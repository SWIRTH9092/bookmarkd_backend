//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const generalGet = require("../controllers/general/generalGet");

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routers
//-------------------------------------------
router.get("/", generalGet)

//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;