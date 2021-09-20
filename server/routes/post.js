const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

// Route to get all posts.
router.get("/allposts",(req,res) => {
    Post.find()
    .populate("postedBy")
    .then(posts => {
        res.json(posts)
    }).catch(err => {
        console.log(err)
    })
});


// Route for displaying post created by a specific user.

router.get('/myposts',requireLogin,(req,res) =>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(mypost =>{
        res.json({mypost})
    }).catch(err => {
        console.log(err);
    })
})


// Route for Create Post
router.post("/createpost",requireLogin,(req,res) => {
    const {title, body} = req.body;
    if(!title || !body){
        res.status(422).json({error:"Tite and Body should not be empty"});
    }
    console.log(req.user);
    //console.log(req.body);
   // res.send("Ok");
   req.user.password=undefined;
    const post = new Post({
        title,
        body,
        postedBy:req.user
     })
     post.save().then(result=>{
        res.json({post:result})
     }).catch(err=>{
         console.log(err);
     })

});
module.exports = router;