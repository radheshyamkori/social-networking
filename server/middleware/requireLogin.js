const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../valueKeys');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req,res,next)=>{
     const { authorization } = req.headers;
     if(!authorization){
         res.status(401).json({error: "You must be logged in"});
     }
     // Here below replace("Bearer ","") is taken as to remove 
     //the "Bearer" word with "space" which is concatenated with token.. for e.g.   Bearer ekkfififiifindndnnfnnfnfnf ... so it will return only ekkfififiifindndnnfnnfnfnf 
     const token = authorization.replace("Bearer ","");
     //console.log(token);
     jwt.verify(token,JWT_SECRET,(err,payload) => {
         if(err){
            res.status(401).json({error: "You must be logged in!"})
         }
         //console.log("Hello testing");
         const {_id} = payload 
         //console.log(_id);
         User.findById(_id).then(userdata => {
            req.user = userdata;
           // console.log(userdata);
           // console.log(req.user);
           next()      // loop to iterate between, search and compare different ids
         })
       
     });

}