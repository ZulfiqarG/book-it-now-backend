const mongoose = require("mongoose"); //importing mongoose

// defining the schema for the booking 
const bookingSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  seats: {
    type: Array,
    required: true
   
      }
    }
);

// creating the booking model
const booking = mongoose.model("booking", bookingSchema);

//exportung the booking model
module.exports = booking;