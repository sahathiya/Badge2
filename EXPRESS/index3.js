
const fs=require('fs').promises


const ReadFile= async()=>{
 const data=await fs.readFile('example.html','utf8')
 console.log(data);
 
}
ReadFile()
