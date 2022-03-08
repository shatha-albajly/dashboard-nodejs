// const mongoose = require("mongoose");
const mongoose = require("../database/connection");

const schema = new mongoose.Schema({
  title: { type: String,required: [true, 'must provide name'],
  trim: true, },
  provider: { type: String,required: [true, 'must provide name'],
  trim: true, },
  details: { type: String,required: [true, 'must provide name'],
  trim: true,  },
  is_active: { type: Number, default: 1 },
});
const experience = mongoose.model("experience", schema);
console.log("hhhhhhhhhhhhhhhhhhhhhhh");
module.exports = experience;

