require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
  // Database connection 🥳
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
  });
  const connection = mongoose.connection;
  connection
    .once('open', () => {
      console.log('Database connected 🥳🥳🥳🥳');
    })
    .on('error', function (err) {
      console.log('Database Connection Failed ... ');
    });
}

// filesharing
// HHi9Cr.u-M2jZV6

module.exports = connectDB;
