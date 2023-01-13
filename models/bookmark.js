//-------------------------------------------
// Import Dependencies
//-------------------------------------------
const mongoose = require("./connection")

//-------------------------------------------
// Define Bookmark Model
//-------------------------------------------
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make user schema
const bookmarkSchema = new Schema({
    title: {type: String},
    url: {type: String}
});

// make Bookmark model
const Bookmark = model("Bookmark", bookmarkSchema);

//-------------------------------------------
// Export Menu Model
//-------------------------------------------
module.exports = Bookmark
