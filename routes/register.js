var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const {getRegister,postRegister} = require("../controller/register");
router.get("/register", getRegister);
const { body, validationResult } = require('express-validator');

router.post("/register/send", urlencodedParser, postRegister);

module.exports = router;
