//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const Bookmark = require("../models/bookmark")


const bookmarkUpdate = async (req, res) => {
    try {
        //  update bookmark
        console.log (req.params.id, req.body)
        res.json (
            await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
    
    //res.send("Update bookmark controller")
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = bookmarkUpdate