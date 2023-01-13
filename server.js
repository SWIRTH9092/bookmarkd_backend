//--------------------------------------
//  Dependencies
//--------------------------------------

require("dotenv").config();
//get .env variables
const{ PORT = 3000 } = process.env;

//import express
const express = require("express");

//create application object
const app=express();

//--------------------------------------
//  Routes
//--------------------------------------

//create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

//--------------------------------------
//  Listener
//--------------------------------------

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
