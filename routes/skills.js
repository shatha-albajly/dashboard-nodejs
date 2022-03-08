var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const {getSkills,addSkills,deleteSkills,updateSkills} = require("../controller/skills");

router.get("/", getSkills);

router.post("/add", urlencodedParser, addSkills);

router.post("/delete",
  urlencodedParser,
  deleteSkills
);

router.post(
  "/update",
  urlencodedParser,
  updateSkills
);


module.exports = router;
