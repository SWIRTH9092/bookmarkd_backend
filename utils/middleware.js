//----------------------------
//  Import dependencies
//----------------------------
require("dotenv").config()
const express = require('express');
const morgan = require('morgan');  // required for logging
const cors = require('cors');    // required for cors

//----------------------------
// controller Dependencies
//----------------------------
const GeneralRouter = require("../routers/general");
const BookmarkRouter = require("../routers/bookmark");

//----------------------------
//  middleware
//----------------------------
const middleware = (app) => {
  app.use(morgan("dev"));
  app.use(cors()) ;
  app.use(express.json())

    
  //----------------------------
  //  routes
  //----------------------------

  app.use("/bookmark", BookmarkRouter); 
  app.use("/", GeneralRouter);
}
//----------------------------
// export Middleware Function
//----------------------------

module.exports = middleware;