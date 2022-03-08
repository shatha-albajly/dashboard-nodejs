const mongoose = require('mongoose');

const DB = 'mongodb://localhost:27017/dashboard';
mongoose
  .connect(DB, {
    autoIndex: true,
  })
  .then(() => {
    console.log('done');
  });

module.exports = mongoose;