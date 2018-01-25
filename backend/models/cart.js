const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shopcollection");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    photo : String,
    name : String,
    price : Number,
    quantity : Number,
    total : Number
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;