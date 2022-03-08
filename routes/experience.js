var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const {getexperience,addexperience,deleteexperience,updateexperience} = require("../controller/experience");

router.get("/", getexperience);

router.post("/add", urlencodedParser, addexperience);

router.post("/delete",
  urlencodedParser,
  deleteexperience
);

router.post(
  "/update",
  urlencodedParser,
  updateexperience
);


module.exports = router;
