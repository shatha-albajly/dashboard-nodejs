// const mongoose = require("mongoose");
const mongoose = require("../database/connection");

const schema = new mongoose.Schema({
  skills: { type: String,required: [true, 'must provide skill'],
  trim: true, },
  is_active: { type: Number, default: 1 },
});
const skills = mongoose.model("skills", schema);
console.log("hhhhhhhhhhhhhhhhhhhhhhh");
module.exports = skills;

