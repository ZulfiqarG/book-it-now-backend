const express = require("express"); //imported  express
const router = express.Router(); //for creating route handlers
const controller = require("../controller/controller") //imported 3functions from controller  

router.get("/booking",controller.getBooking); //get request
router.post("/booking",controller.postBooking); //post request
router.delete("/booking",controller.deleteBooking);

module.exports = router; //exported the router module