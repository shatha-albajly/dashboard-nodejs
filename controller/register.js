const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = process.env;
require("dotenv").config();
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');const
User = require("../modals/dashboard");
var cookieSession = require('cookie-session')
const { createCustomError } = require('../errors/custom-error')
  var flash = require('express-flash');


exports.getRegister=(req,res) =>{
    res.render("register");
    res.end();
}

exports.postRegister=async(req,res) =>{
   try {
     console.log(req.body,res.body)
   

    // Get user input
    // req.headers = {Authorization: `Bearer `}
    // req.headers.add("Access-Control-Expose-Headers","Authorization")
    const { name, surname, email, password } = req.body;
          console.log(req.body)

    if (!name) {
      console.log('dddddddd')
    req.flash('error', 'something goes wrong');

      
  }
 
//     localStorage.setItem('myFirstKey', 'myFirstValue');
// console.log(localStorage.getItem('myFirstKey'));

    // Validate user input
    // if (!(email && password && name && surname)) {
    //   res.status(400).send("All input is required");
    // }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    // if (oldUser) {
    //   return res.status(409).send("User Already Exist. Please Login");
    // }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);
console.log(encryptedPassword)
    // Create user in our database
    const user = await User.create({
      name,
      surname,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });
    console.log(user)

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
    console.log(token)
 res.cookie(`token`,token);
  res.cookie(`email`,email);



    // return new user
    res.status(201).redirect('/dashboard')

  } catch (err) {
    console.log(err);
  }
}
