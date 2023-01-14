//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const Bookmark = require("../../models/bookmark")

const bookmarkShow = async (req, res) => {
    try {
        res.json(await Bookmark.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
    
    //res.send("Show bookmark controller")
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = bookmarkShow