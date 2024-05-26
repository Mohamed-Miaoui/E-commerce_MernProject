const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required : true,
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
    },
    date: {
      type: Number,
      default: Date.now,
    },
  },
);

module.exports = mongoose.model("user", UserSchema);