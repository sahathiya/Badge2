const express=require('express')
const fs=require('fs')
const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>home</h1>')
})

app.get('/about',(req,res)=>{
    fs.readFile('sample.txt','utf8',(err,data)=>{
        if(err) throw err
        res.send(data)
    })
    
})

app.listen(4001,()=>{
    console.log('server running on 4001');
    
})