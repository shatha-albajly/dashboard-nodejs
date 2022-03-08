 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = process.env;
require("dotenv").config();

const User = require("../modals/dashboard");

exports.getLogin=(req,res) =>{
    res.render("login");
    res.end();
}

exports.postLogin=async(req,res) =>{
  
 try {
    // Get user input
    const { email, password } = req.body;
    console.log('ddddddd')
    console.log(req.body)

    // Validate user input
    // if (!(email && password)) {
    //   res.status(400).send("All input is required");
    // }
    // Validate if user exist in our database
    const user = await User.findOne({ email });
        console.log("user")

    console.log(user)
     console.log('password',password)
                console.log('user.password',user.password)


    if (user && 
    (await bcrypt.compare(password, user.password))) {
      // Create token
          console.log('ssssssssssss')

               
          console.log("user")
          console.log(user._id)
          console.log(email)
          console.log(process.env.TOKEN_KEY)

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;
      console.log(user)
       res.cookie(`token`,token);
      res.cookie(`email`,email);


      res.status(201).redirect('/dashboard')


      // user

    }
    else{
            res.status(404).send("One or more of the inputs are wrong")

// res.
    }
    // res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log('login')
    console.log(err);
  }
}
 
 