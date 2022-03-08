// const mongoose = require("mongoose");
const mongoose = require("../database/connection");

const schema = new mongoose.Schema({
  name: { type: String,
  trim: true, },

  surname: { type: String,
  trim: true, },

  phone: { type: String,
    
  trim: true, },

  address: { type: String,
  trim: true, },

  email: { type: String,    unique: true,

  trim: true, },

  education: { type: String,
  trim: true, },

  country: { type: String,
  trim: true, },

  state: { type: String,
  trim: true, },

  password: { type: String,
  trim: true, },
  
  is_active: { type: Number, default: 1 },
});
const dashboard = mongoose.model("dashboard", schema);
console.log("hhhhhhhhhhhhhhhhhhhhhhh");
module.exports = dashboard;


// // const mongoose = require("mongoose");
// const mongoose = require("../database/connection");

// const schema = new mongoose.Schema({
//   name: { type: String,required: [true, 'must provide name'],
//   trim: true, },

//   surname: { type: String,required: [true, 'must provide surname'],
//   trim: true, },

//   phone: { type: String,required: [true, 'must provide phone'],
    
//   trim: true, },

//   address: { type: String,required: [true, 'must provide address'],
//   trim: true, },

//   email: { type: String,required: [true, 'must provide email'],
//   trim: true, },

//   education: { type: String,required: [true, 'must provide education'],
//   trim: true, },

//   country: { type: String,required: [true, 'must provide country'],
//   trim: true, },

//   state: { type: String,required: [true, 'must provide state'],
//   trim: true, },
  
//   is_active: { type: Number, default: 1 },
// });
// const dashboard = mongoose.model("dashboard", schema);
// console.log("hhhhhhhhhhhhhhhhhhhhhhh");
// module.exports = dashboard;

