
const mongoose = require("mongoose");

const transSchema = new mongoose.Schema({
    prod_id: {
    type: String,
    required: true,
  },
  prod_name: {
    type: String,
    required: true,
  },
  prod_price: {
    type: Number,
    required: true,
  },
  prod_quantity: {
    type: String,
    required: true,
  },
  prod_category: {
    type: String,
    required: true,
  },
  user_id: {
    type:String,
    required:true,
  },
  prod_image:{
    type:String,
    required:true
  }
});

const Transaction = mongoose.model("transaction", transSchema);
module.exports = Transaction;
