import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const name=url.pathname==='/'?'index.html':decodeURIComponent(url.pathname).slice(1);if(!['index.html','style.css'].includes(name)){res.writeHead(404).end('Not found');return;}const data=await readFile(path.join(root,name));res.setHeader('Content-Type',name.endsWith('.html')?'text/html':'text/css');res.end(data);}catch{res.writeHead(404).end('Not found');}}).listen(3000,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:3000'));
