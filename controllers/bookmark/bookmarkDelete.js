//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const Bookmark = require("../../models/bookmark")

const bookmarkDelete = async (req, res) => {
    try {
        // send bookmark to delete
        res.json(await Bookmark.findByIdAndRemove(req.params.id))
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
    
    //res.send("Delete bookmark controller")
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = bookmarkDelete