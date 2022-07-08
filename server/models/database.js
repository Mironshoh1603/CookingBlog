const mongoose = require("mongoose");

const db = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

mongoose.connect(db, {}).then(() => {
  console.log("DATABASE  connected...");
});

require("./Category");
