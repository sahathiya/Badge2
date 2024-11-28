const http=require('http')
const PORT=3003

const server = http.createServer((req, res) => {
    if (req.url === '/data') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const data = { name: 'John Doe', age: 30 };
      res.end(JSON.stringify(data));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Page not found' }));
    }
  });

server.listen(PORT,()=>{
    console.log(`server running on port ${PORT} `);
    
})