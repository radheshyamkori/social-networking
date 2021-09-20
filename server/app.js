const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const {MONGOURI} = require('./valueKeys.js');

mongoose.connect(MONGOURI,{useNewUrlParser: true,useUnifiedTopology: true});
// checking if MongoDb database is successfully connected.
mongoose.connection.on('connected',()=>{
    console.log(`Database on MongoDb Atlas Cloud successfully connected`);
})
// checking if there is any error while connecting MongoDB Database.
mongoose.connection.on('error',()=>{
    console.log(`Error occured while connecting to database on MongoDb Atlas Cloud!`);
})

require("./models/user");
require("./models/post");
app.use(express.json());
app.use(require('./routes/authentication'));
app.use(require('./routes/post'));

// const customMiddleWare = (req,res,next) => {
//     console.log('This is a Middleware');
//     next()
// }
// Commented below lines as we will use the Middle Ware directly
// within the routes.

// app.use(customMiddleWare);  

// app.get('/',(req,res) => {
//     res.send("Hello World");
// })

// app.get('/home',(req,res) => {
//     res.send(`Hello world from Home!`);
// })

// using middleware along with routes.

//-----------------------//

//app.use(customMiddleWare);  commented as we are directly using in 
//                            routes

// app.get('/',(req,res) => {
//     console.log(`Basic Route without Middle Ware!`)
//     res.send("Hello World");
// })

// app.get('/home',customMiddleWare,(req,res) => {
//     console.log(`Home Route with using Middle Ware`);
//     res.send(`Hello world from Home!`);
// })

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
    //res.send(`Server listening on port ${PORT}`);
} )