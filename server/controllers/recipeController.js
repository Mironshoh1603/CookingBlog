require("../models/database");
const Category = require("../models/Category");
// const Recipe = require('../models/Recipe');

/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    // const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
    // const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);
    // const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
    // const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNumber);

    // const food = { latest, thai, american, chinese };

    res.render("index", { title: "Cooking Blog - Home ", categories });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
};
exports.expoleCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    // const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
    // const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);
    // const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
    // const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNumber);

    // const food = { latest, thai, american, chinese };

    res.render("categories", {
      title: "Cooking Blog - Categories ",
      categories,
    });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
};

/**
 * GET /categories
 * Categories
 */
async function insertDummyCategoryDate() {
  try {
    await Category.insertMany([
      {
        name: "Thai",
        image: "thai-food.jpg",
      },
      {
        name: "American",
        image: "american-food.jpg",
      },
      {
        name: "Chinese",
        image: "chinese-food.jpg",
      },
      {
        name: "Mexican",
        image: "mexican-food.jpg",
      },
      {
        name: "Indian",
        image: "indian-food.jpg",
      },
      {
        name: "Spanish",
        image: "spanish-food.jpg",
      },
    ]);
  } catch (err) {
    console.log("error is", err);
  }
}

// insertDummyCategoryDate();
