import fs from 'node:fs';
for(const id of ['20172379','19904982','19671035','19103957','20324632','19101685','rednova']) {
let h=fs.readFileSync('research/'+id+'.html','utf8');h=h.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'');
const scripts=[...h.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]);
const clean=h.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
fs.writeFileSync('research/'+id+'-text.txt',clean.replace(/<[^>]*>/g,' ').replace(/\s+/g,' '));
console.log('\n'+id, scripts.filter(s=>/images|Imagenes|Fotos|multimedia|gallery/i.test(s)).map(s=>s.slice(0,3000)));
console.log([...clean.matchAll(/<img[^>]+>/g)].filter(m=>!/logo.svg|spinner/.test(m[0])).slice(0,8).map(m=>m[0]).join('\n'));
}
