const mongoose = require("mongoose");

const CreatorModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contentIdeas: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("creator", CreatorModel);
