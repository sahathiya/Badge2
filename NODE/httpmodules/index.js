const http=require('http')
const port=3000
const server=http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/html'})
    // res.write('<h1>hello world<h1>')
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('heeyy node')
    res.end()
})

server.listen(port,()=>{
    console.log(`server listening on port ${port}`);
    
})