const router = require('express').Router();
const bodyParse = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../models/userModels');

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
            email : email,
        });

        newUser.save();
        res.json("user registration success");

    } catch (error) {
        res.status(500).json("user registration failed");
    }


    // console.log{fname};
});


module.exports = router;