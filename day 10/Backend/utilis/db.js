const mongoose = require("mongoose");
const UserDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to ${process.env.MONGO_URI}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = UserDb;
