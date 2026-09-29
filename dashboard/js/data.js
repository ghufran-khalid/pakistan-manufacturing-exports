const cache=new Map();let manifest;
export function loadJSON(path){if(!cache.has(path))cache.set(path,fetch(path).then(r=>{if(!r.ok)throw Error(`Data request ${path}: ${r.status}`);return r.json();}).catch(e=>{cache.delete(path);throw e;}));return cache.get(path);}
export async function dataset(id){manifest??=await loadJSON('data/public_manifest.json');const d=manifest.find(d=>d.dataset_id===id && d.path.endsWith('.json'));if(!d)throw Error(`Unknown dataset ${id}`);return loadJSON(d.path);}
export function uniqueIndex(rows,key){const map=new Map();for(const row of rows){const k=typeof key==='function'?key(row):row[key];if(k==null||map.has(k))throw Error('Nonunique lookup key '+k);map.set(k,row);}return map;}
export const sitc2Lookup=rows=>uniqueIndex(rows,'sitc2');
export function join(rows,lookup,key){return rows.map(r=>{const k=typeof key==='function'?key(r):r[key];if(!lookup.has(k))throw Error('Unmatched join '+k);return {...lookup.get(k),...r};});}
export async function guarded(container,fn){const node=document.getElementById(container);node?.setAttribute('aria-busy','true');try{await fn();}catch(e){console.error(e);if(node)node.innerHTML='<p class="error" role="alert">Data could not be loaded for this visual. Please refresh to try again.</p>';}finally{node?.setAttribute('aria-busy','false');}}
