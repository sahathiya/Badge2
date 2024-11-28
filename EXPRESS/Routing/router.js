const express=require('express')

const app=express()
const router=express.Router()

app.use('/userside',router)



router
.get('/',(req,res)=>{
    res.send('home page ')
})

.get('/profile',(req,res)=>{
    res.send('profile page')
})





app.listen(3000,()=>{
    console.log('server running onnn 3000');
    
})