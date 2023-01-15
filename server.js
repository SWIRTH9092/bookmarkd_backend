//--------------------------------------------
//  Dependenices
//--------------------------------------------
require("dotenv").config()

//import express
const express = require("express");
const middleware= require("./utils/middleware");

//--------------------------------------------
// create application object
//--------------------------------------------
const app = express ();

//--------------------------------------------
// Middleware
//--------------------------------------------
middleware(app);

//--------------------------------------------
//  Listner
//--------------------------------------------
const PORT = process.envPORT || 3000;
app.listen(PORT, () => {console.log(`🧏‍♀️ listening on PORT ${PORT}`)})