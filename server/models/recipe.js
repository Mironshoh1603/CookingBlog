const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "this field id required!"],
  },
  description: {
    type: String,
    required: [true, "this field id required!"],
  },
  email: {
    type: String,
    required: [true, "this field id required!"],
  },
  ingredients: {
    type: Array,
    required: [true, "this field id required!"],
  },
  categories: {
    type: Array,
    enam: ["Thai", "American", "Chinese", "Mexican", "Indian"],
    required: [true, "this field id required!"],
  },
  image: {
    type: String,
    required: [true, "this field id required!"],
  },
});

module.exports = mongoose.model("recipe", recipeSchema);
