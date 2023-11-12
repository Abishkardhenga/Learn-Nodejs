const mongoose = require("mongoose");

let ProductSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productImg: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductDetail", ProductSchema);
