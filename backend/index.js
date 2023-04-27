const express = require('express');
const connectDB = require('./database/databse');
const router = require('./controller/userController');
require('dotenv').config(); 

const app = express();
// for connect mongodb
connectDB();

//create route
app.get('/',(req, res) =>{
    res.send('helo');
});

app.use('/user', require('./controller/userController'));

//listen route
app.listen(process.env.PORT,()=>{
    // console.log('Hello iTS ME');
    console.log(`${process.env.PORT}`)
});

