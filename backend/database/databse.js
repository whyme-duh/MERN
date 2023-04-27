const mongoose = require('mongoose');
require('dotenv').config(); 

// for mongodb
const connectDB = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("CONNECTED " + process.env.DB_URL);
    });
}


module.exports = connectDB;