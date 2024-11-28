const http=require('http')
const PORT=3001
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is a home page</h1>')
        res.end()
    }else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is a about page</h1>')
        res.end()
    }else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is a contact page</h1>')
        res.end()
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(PORT,()=>{
    console.log(`server running on port ${PORT} `);
    
})