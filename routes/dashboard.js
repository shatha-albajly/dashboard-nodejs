var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const {getDashboard,addDashboard,deleteDashboard,updateDashboard} = require("../controller/dashboard");

router.get("/", getDashboard);


router.post("/add", urlencodedParser, addDashboard);


router.post(
  "/update",
  urlencodedParser,
  updateDashboard
);


module.exports = router;
