const mongoose=require('mongoose')
const postSchema=mongoose.Schema({
    title:{type:String},
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
})

module.exports=mongoose.model('Post',postSchema)