const mongoose = require("mongoose");

const DbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`db connected to ${process.env.MONGO_URI}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = DbConnect;
