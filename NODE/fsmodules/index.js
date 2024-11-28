const fs=require('fs')

//readfilesync
// const data=fs.readFileSync('example.txt','utf8')
// console.log(data);
// //writefilesync
// fs.writeFileSync('example.txt','hiii fathima')

//readfile

fs.readFile('example.txt','utf8',(err,data)=>{
    if(err) throw err
    console.log(data);
    
})


fs.writeFile('example.txt','heyyyyy',(err)=>{
    if(err) throw err
    console.log("file successfully written");
    
})


fs.appendFile('example.txt','i am a developer',(err)=>{
    if(err) throw err
    console.log("file append");
    
})

fs.writeFile('write.html','learn nodejs',(err)=>{
    if(err) throw err 
    console.log("created a new file with text");
    
})

fs.readFile('write.html','utf8',(err,data)=>{
    if(err) throw err
    console.log(data);
    
})


fs.appendFile('append.html','learn append a file',(err)=>{
    if(err) throw err
    console.log('file created with a new text');
    
})


// fs.unlink('test.js',(err)=>{
//     if(err) throw err
//     console.log('file deleted');
    
// })

// fs.mkdir('created',(err)=>{
//     if(err) throw err
//     console.log('folder created');
    
// })

// fs.rmdir('created',(err)=>{
//     if(err) throw err
//     console.log('folder deleted');
    
// })


fs.readdir('new',(err,files)=>{
    if (err)  throw err 
    console.log(files);
    
})


if(fs.existsSync('example.txt')){
    console.log('this file existed');
    
}else{
    console.log('file not found');
    
}

fs.rename('new/index2.txt','renamed.txt',(err)=>{
    if(err) throw err 
    console.log('file renamed');
    
})