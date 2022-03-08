var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const {getQualification,addQualification,deleteQualification,updateQualification} = require("../controller/qualification");

router.get("/", getQualification);

router.post("/add", urlencodedParser, addQualification);

router.post("/delete",
  urlencodedParser,
  deleteQualification
);

router.post(
  "/update",
  urlencodedParser,
  updateQualification
);


module.exports = router;
