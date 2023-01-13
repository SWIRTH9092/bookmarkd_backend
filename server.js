//--------------------------------------------
//  Dependenices
//--------------------------------------------
// get .env variables
require("dotenv").config()
// pull Port from .env, give deafault value of 4000
const { PORT = 3000, DATABASE_URL } = process.env;

//import express
const express = require("express");

// create application object
const app = express ();

//  model for bookmark
const Bookmark = require("./models/bookmark")

//--------------------------------------------
//  Routes
//--------------------------------------------
// create test route
app.get("/", (req, res) => {
    res.send("hello world");
});


//--------------------------------------------
//  Listner
//--------------------------------------------
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))