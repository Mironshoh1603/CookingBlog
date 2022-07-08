require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

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
// async function insertDummyRecipeDate() {
//   try {
//     await Recipe.insertMany([
//       {
//         name: "Recipe Name Goes Here",
//         description: `Recipe Description Goes Here`,
//         email: "recipeemail@raddy.co.uk",
//         ingredients: [
//           "1 level teaspoon baking powder",
//           "1 level teaspoon cayenne pepper",
//           "1 level teaspoon hot smoked paprika",
//         ],
//         category: "American",
//         image: "southern-friend-chicken.jpg",
//       },
//       {
//         name: "Recipe Name Goes Here",
//         description: `Recipe Description Goes Here`,
//         email: "recipeemail@raddy.co.uk",
//         ingredients: [
//           "1 level teaspoon baking powder",
//           "1 level teaspoon cayenne pepper",
//           "1 level teaspoon hot smoked paprika",
//         ],
//         category: "American",
//         image: "southern-friend-chicken.jpg",
//       },
//     ]);
//   } catch (err) {
//     console.log("error is", err);
//   }
// }

// insertDummyRecipeDate();
