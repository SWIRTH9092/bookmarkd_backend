//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const Bookmark = require("../models/bookmark")

const bookmarkPost = async (req, res) => {
    try {
        //  create bookmark
        res.json (await Bookmark.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
    
    //res.send("post bookmark controller")
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = bookmarkPost