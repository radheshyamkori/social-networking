const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../valueKeys');
const requireLogin = require('../middleware/requireLogin');

router.get('/',(req,res) => {
    res.send('Hello World');
})


router.post("/signup",(req,res)=>{
    //console.log(req.body.name);
    const {name, email, password} = req.body   // destructured req.body

   if(!name || !email || !password){
       res.json({error: "Name, Email and Password should not be blank"});       
   }
   User.findOne({email:email}).then(( savedUser =>{
            if(savedUser){
                res.status(422).json({error:"Email already registered!"})
            }else{
            bcrypt.hash(password,12).then(hashedPassword => {
                const user = new User ({
                    name,
                    email,
                    password:hashedPassword   // here password:hashedPassword is taken as if only hashedPassword is written, then hashedPassword value will store in hashedPassword variable as per Modern Javascript(ES6), but as we need to store it in password variable, we have written password: hashedPassword
                })
                    
                user.save()
                .then(user=>{
                    res.status(201).json({message:"User Registered successfully"});
                }).catch(err =>{
                    console.log(err);
                })
            })
        }
            
   })).catch(err =>{
       console.log(err);
   })
   //res.json({message: "Your data is successfully sent"});
    
})

// route for protected user

router.get('/protected',requireLogin,(req,res) => {
    res.send('Hello User');
})


// route for user signin
router.post('/signin',(req,res) => {
    // console.log(req.body.email);
    // console.log(req.body.password);
    // console.log(req.body);
    const {email, password} = req.body;   // destructuring req.body to take email and password for signin
    console.log(email);
    console.log(password);
    if(!email || !password){
        return res.status(422).json({error:"Email or Password should not be blank."});
    }
    User.findOne({email:email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error: "Invalid Email or password"});
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch => {
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET);
                const{_id, name, email} = savedUser;
                res.json({message:"Successfully signed in",token,user:{_id,name,email}});
                //res.json({message:"Successfully signed in"});
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password!!"});
            }
        }).catch(err => {
            console.log(err);
        })
    })
   
})

module.exports = router;
