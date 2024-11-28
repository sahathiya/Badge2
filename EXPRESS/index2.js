const express=require('express')
const fs=require('fs')
const app=express()
app.get('/',(req,res)=>{
fs.readFile('example.txt','utf8',(err,data)=>{
    if(err) throw err
    res.send(data)
})
})

app.listen(5000,()=>{
    console.log('server running on 5000');
    
})