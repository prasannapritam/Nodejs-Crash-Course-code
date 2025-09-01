import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      let filepath;
      if (req.url == '/') {
        filepath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about') {
        filepath = path.join(__dirname, 'public', 'about.html');
      } else {
        throw new Error('Not Found');
      }
      const data = await fs.readFile(filepath);
      res.setHeader('content-Type', 'text/html');
      res.write(data);
      res.end();
    } else {
      throw new Error('Method not allowed');
    }
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/plain' });
    res.end('<h1>Server Error</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`sever runninng on port ${PORT}`);
});
