const router = require('express').Router();
const bodyParse = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../models/userModels');
const jwt = require('jsonwebtoken');

router.get('/test', (req, res) =>{
    res.send('welcome to API');
});



router.post('/register',bodyParse.json(), async(req, res) => {
    // console.log(req.body);
    // res.send('user registration');

    const { fname, lname, password, email } = req.body;

    if (!fname || !lname || !password || !email) {
        return res.status(400).json({ msg: "please enter all feilds" });
    }

    try {

        const existingUser = await User.findOne({ email });
        //checking existing user
        if (existingUser) {
            return res.status(400).json({ msg: "user already exist" });
        }

        // hasing the poasswoed
        const salt = await bcrypt.genSaltSync(10);
        const passwordHash = await bcrypt.hashSync(password, salt);

        const newUser = new User({
            fname: fname,
            lname: lname,
            password : passwordHash,
            email : email
        });

        newUser.save();
        res.json("user registration success");

    } catch (error) {
        res.status(500).json("user registration failed");
    }


    // console.log{fname};
});

router.post('/login',bodyParse.json(), async(req, res) => {
    console.log(req.body);

    const {  password, email } = req.body;

    if (!password || !email) {
        return res.status(400).json({ msg: "please enter all feilds" });
    }

    try {

        const user = await User.findOne({ email });
        //checking  user
        
        if(!user){
            return res.status(400).json({msg : "User does not exist!"});
        }

        const isCorrectPassoword = await bcrypt.compare(password , user.password);

        if(!isCorrectPassoword){
            await res.status(400).json({msg : "Invalid Credentials!"});
        }

        // creating a token and signing it with jwt

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET);

        res.cookie("token", token,{
            httpOnly :true,
            secure : true,
            expires : new Date(Date.now() + 24*60*60*1000)
        })
        
       // send user data
       res.json({
        token,
        user,
        msg : "User Logged in successfully"
       });

    } catch (error) {
        res.send(error);
        res.status(500).json("user login failed");
    }


    // console.log{fname};
});


module.exports = router;