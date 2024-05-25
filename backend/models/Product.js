const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      required : true,
    },
    category: {
      type: String,
      required: true,
    },
    new_price: {
      type: Number,
      require: true,
    },
    old_price: {
      type: Number,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    available: {
        type: Boolean,
        default: true
    }
    
   
  },
);

module.exports = mongoose.model("product", ProductSchema);