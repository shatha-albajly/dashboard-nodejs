var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const {getexperience} = require("../controller/profile");

router.get("/", getexperience);




module.exports = router;
