import fs from 'node:fs/promises';
import {load} from 'cheerio';
import sharp from 'sharp';
const ids=['20172379','19904982','19671035','19103957','20324632','19101685'];
await fs.mkdir('public/images',{recursive:true});await fs.mkdir('src',{recursive:true});
const manifest={};const jobs=[];
for(const id of ids){const $=load(await fs.readFile('research/'+id+'-gallery.html','utf8'));const urls=$('.gallery-content img').map((_,e)=>$(e).attr('data-src')).get();manifest[id]=urls.map((url,i)=>({url,file:`images/${id}-${i+1}.webp`}));jobs.push(...manifest[id]);}
const $=load(await fs.readFile('research/rednova.html','utf8'));
console.log('PROFESSIONAL', $('[title="Gaspar Tapia"]').html());
console.log('LOGO',$('.navbar-brand img').attr('src'));
jobs.push({url:$('.navbar-brand img').attr('src'),file:'images/rednova.webp'});
const portrait=$('[title="Gaspar Tapia"] img').attr('src');if(portrait)jobs.push({url:portrait,file:'images/gaspar.webp'});
await fs.writeFile('research/image-sources.json',JSON.stringify(manifest,null,2));
let next=0;await Promise.all(Array.from({length:6},async()=>{while(next<jobs.length){const j=jobs[next++];const r=await fetch(j.url);if(!r.ok)throw Error(r.status+' '+j.url);await sharp(Buffer.from(await r.arrayBuffer())).rotate().resize({width:1500,height:1200,fit:'inside',withoutEnlargement:true}).webp({quality:80}).toFile('public/'+j.file);}}));
await fs.writeFile('src/images.json',JSON.stringify(Object.fromEntries(Object.entries(manifest).map(([id,imgs])=>[id,imgs.map(x=>x.file)])),null,2));
console.log('Downloaded',jobs.length,'images');
