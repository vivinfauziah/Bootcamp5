const express = require("express");
const bodyParser = require("body-parser")
const shopcollectionRoutes = require("./routes/shopcollection");
const cartRoutes = require("./routes/cart")
const fileUpload = require("express-fileupload");

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(fileUpload());
app.use(express.static('collections'));

app.use("/api/women", shopcollectionRoutes);
app.use("/api/cart", cartRoutes);

app.listen(3000);