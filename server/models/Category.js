const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "this field id required!"],
  },
  image: {
    type: String,
    required: [true, "this field id required!"],
  },
});

module.exports = mongoose.model("category", categorySchema);
