import fs from 'node:fs/promises';
const urls = ['casa-en-venta-en-cruz-del-eje-4-ambientes--20172379','casa-en-venta-en-cruz-del-eje-4-ambientes--19904982','quinta-en-venta-en-cruz-del-eje-4-ambientes--19103957','casa-en-venta-en-cruz-del-eje-5-ambientes--19671035','casa-en-alquiler-en-cruz-del-eje-4-ambientes--20324632','terreno-en-venta-en-cruz-del-eje--19101685'];
await Promise.all(urls.map(async slug => { const r=await fetch('https://www.inmuebles.clarin.com/'+slug); if(!r.ok) throw new Error(r.status+' '+slug); const h=await r.text();await fs.writeFile('research/'+slug.split('--')[1]+'.html',h); console.log(slug,h.length); }));
const r=await fetch('https://www.rednovainmobiliaria.com/');await fs.writeFile('research/rednova.html',await r.text());
