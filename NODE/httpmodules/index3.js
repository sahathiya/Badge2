const http=require('http')
const fs=require('fs')
const PORT=3002

const server=http.createServer((req,res)=>{
    if(req.url==='/file'){
        fs.readFile('file1.txt','utf8',(err,data)=>{
            if(err) throw err 
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('page not found')
        res.end()
    }
    
})


server.listen(PORT,()=>{
    console.log(`server running on port ${PORT} `);
    
})