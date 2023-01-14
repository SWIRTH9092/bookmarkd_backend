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
const generalGet = require("./controllers/general/generalGet")
const bookmarkIndex = require("./controllers/bookmark/bookmarkIndex")
const bookmarkPost = require("./controllers/bookmark/bookmarkPost")
const bookmarkUpdate = require("./controllers/bookmark/bookmarkUpdate")
const bookmarkDelete = require("./controllers/bookmark/bookmarkDelete")
const bookmarkShow = require("./controllers/bookmark/bookmarkShow")


//--------------------------------------------
//  Added Middleware
//--------------------------------------------
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

//--------------------------------------------
//  Routes
//--------------------------------------------

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