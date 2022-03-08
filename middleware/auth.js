const jwt = require("jsonwebtoken");

const config = process.env;
require('dotenv').config();
 
const bcrypt = require("bcryptjs");

const verifyToken = (req, res, next) => {
      console.log(req.cookies)

  const token =
    req.cookies.token
    

  // if (!token) {
  //   return res.status(403).send("A token is required for authentication");
  // }
  try {
    console.log('token',token)
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    console.log(err)
    return res.status(401).send("Invalid Token");
    
  }
  return next();
};

module.exports = verifyToken;