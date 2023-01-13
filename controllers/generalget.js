//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")

// for MongoDB database
const Bookmark = require("../models/bookmark")

//----------------------------
//  Create Route
//----------------------------
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello world");
});

//----------------------------
//  Export the Router
//----------------------------

module.exports = router;