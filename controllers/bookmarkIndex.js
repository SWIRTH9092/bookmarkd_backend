//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const Bookmark = require("../models/bookmark")

const bookmarkIndex = async (req, res) => {
    try {
        // send all bookmarks
        res.json(await Bookmark.find({}));
    }  catch (error) {
        //send error
        res.status(400).json(error);
    }
    
    //res.send("index bookmark controller")
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = bookmarkIndex