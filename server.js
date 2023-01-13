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

const cors = require("cors");
const morgan = require("morgan");

// controller Dependencies
const generalGet = require("./controllers/generalGet")
const bookmarkIndex = require("./controllers/bookmarkIndex")
const bookmarkPost = require("./controllers/bookmarkPost")
const bookmarkUpdate = require("./controllers/bookmarkUpdate")
const bookmarkDelete = require("./controllers/bookmarkDelete")
const bookmarkShow = require("./controllers/bookmarkShow")


//--------------------------------------------
//  Added Middleware
//--------------------------------------------
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

//--------------------------------------------
//  Routes
//--------------------------------------------
// create test route
// app.use("/", GeneralGetRouter)   //"hello World"
// app.use("/Bookmark",IndexRouter)

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/", generalGet)
app.get('/bookmark', bookmarkIndex);  // get all 
app.post('/bookmark', bookmarkPost);  // Create New 
app.put('/bookmark/:id', bookmarkUpdate); //Update Existing
app.delete('/bookmark/:id', bookmarkDelete)  // delete Existing
app.get('/bookmark/:id', bookmarkShow)  // Show all

//--------------------------------------------
//  Listner
//--------------------------------------------
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))