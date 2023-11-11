const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(connect.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
