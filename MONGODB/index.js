// const express=require("express")
// const app=express()
// const mongoose=require('mongoose')
// const User=require('./userSchema')
// app.use(express.json())
// mongoose.connect('mongodb://127.0.0.1:27017/badge')
// .then(()=>console.log('connected')
// )


// app.post('/users',async(req,res)=>{
//     const{name,age}=req.body
//  const user=new User({
//     name:name,
//     age:age
//  })

//  await user.save()

//  res.status(200).send(user)
// })


// app.get('/',async(req,res)=>{
//     const user= await User.find()
//     res.send(user)
// })

// app.put('/update/:id',async(req,res)=>{
//     const{name,age}=req.body
//     const userid=req.params.id
//     const user= await User.findByIdAndUpdate(userid,{name,age},{ new: true })
    
//     res.status(200).send(user)
// })

// app.delete('/remove/:id',async(req,res)=>{
//     const user=User.findByIdAndDelete(req.params.id)
//     res.status(200).send(user)
// })

// app.listen(5000,()=>{

//     console.log('server running on 5000');
    
// })





const express = require("express");
const mongoose = require("mongoose");
const User = require("./userSchema");
const Post=require("./postSchema")
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/badge")
  .then(() => console.log("connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// CREATE: Add a new user
app.post("/users", async (req, res) => {
  try {
    const { name, age } = req.body;
    const user = new User({ name, age });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Error creating user" });
  }
});

// READ: Get all users
app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

// UPDATE: Update a user by ID
app.put("/update/:id", async (req, res) => {
    console.log("ggygy",req.params.id);
    
  try {
    const { name, age } = req.body;
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(userId, { name, age }, { new: true });
     
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
   

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Error updating user" });
  }
});

// DELETE: Delete a user by ID
app.delete("/remove/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", user });
  } catch (err) {
    res.status(500).json({ error: "Error deleting user" });
  }
});


//mongoose populate

app.post('/post',async(req,res)=>{
    const{title,author}=req.body
    const postdata=new Post({title,author}).populate('author')
     await postdata.save()
    const populatedPost = await Post.findById(postdata._id).populate("author");
    res.send(populatedPost)
})





app.get("/allposts", async (req, res) => {
    try {
      const posts = await Post.find().populate("author");
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: "Error fetching posts" });
    }
  });


// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
