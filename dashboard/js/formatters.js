const sign=s=>s.replace(/-/g,'−');
export const formatUSD=v=>v==null?'Not available':sign('$'+(Math.abs(v)>=1e9?(v/1e9).toFixed(1)+'bn':Math.abs(v)>=1e6?(v/1e6).toFixed(1)+'m':v.toLocaleString('en-US',{maximumFractionDigits:0})));
export const formatPercent=(v,d=1)=>v==null?'Not available':sign(v.toFixed(d)+'%');
export const formatRCA=v=>v==null?'Not available':sign(v.toFixed(2));
export const formatECI=v=>v==null?'Not available':sign(v.toFixed(3));
export const formatInteger=v=>v==null?'Not available':v.toLocaleString('en-US');
export const formatPPChange=v=>sign((v>0?'+':'')+v.toFixed(1)+' pp');
export const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
