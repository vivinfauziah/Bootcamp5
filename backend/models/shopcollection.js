const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shopcollection");

const Schema = mongoose.Schema;

const womenSchema = new Schema({
    name : String,
    price : Number,
    description : String,
    photo : String
});

const Women = mongoose.model("women", womenSchema);

module.exports = Women;