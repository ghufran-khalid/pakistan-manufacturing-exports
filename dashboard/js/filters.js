export const value=id=>document.getElementById(id).value;
export const checked=id=>document.getElementById(id).checked;
export function years(){document.querySelectorAll('select[data-year]').forEach(s=>{s.innerHTML=Array.from({length:25},(_,i)=>`<option value="${2000+i}">${2000+i}</option>`).join('');s.value=s.dataset.year;});}
export function on(ids,fn){for(const id of ids){const e=document.getElementById(id);e.addEventListener(e.type==='search'?'input':'change',()=>Promise.resolve(fn()).catch(console.error));}}
export const search=(rows,q,lookup)=>{q=q.toLowerCase().trim();return rows.filter(r=>`${r.sitc4} ${lookup.get(r.sitc4)?.product_name??''}`.toLowerCase().includes(q));};
