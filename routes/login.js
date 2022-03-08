var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const {getLogin,postLogin} = require("../controller/login");
router.get("/login", getLogin);

router.post("/login/send", urlencodedParser, postLogin);

module.exports = router;
