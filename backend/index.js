const express = require('express');
const connectDB = require('./database/databse');
const cors = require('cors');

require("dotenv").config(); 
const app = express();

app.use(express.json());
// for connect mongodb
connectDB();

const corsOptions = {
    origin:true,
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));

//create route
app.get('/',(req, res) =>{
    res.send('helo');
});

app.use('/user', require('./controller/userController'));

//listen route
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});

