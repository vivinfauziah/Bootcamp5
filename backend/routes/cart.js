const express = require("express");
const Cart = require("../models/cart");
const router = express.Router();

module.exports = function(passport){

    router.get("/:id", (req, res) => {
    
        Cart.findById(req.params.id, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json(result)
            }
        });
    
    });
    
    router.get("/", (req, res) => {
    
        Cart.find({}, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json(result)
            }
        });
    });
    
    router.post("/", (req, res) => {
    
    
        if (!req.files.profile) {
            return res.status(400).send("No files were uploaded");
        }
    
        let image = req.files.profile;
        let date = new Date();
        let imageName = date.getTime() + ".png"
    
        image.mv("./collections/photo/" + imageName, (error) => {
            
            if (error) return res.status(500).send(error);
            
            let newObj = new Cart({
                photo : "http://localhost:3000/photo/" + imageName,
                name : req.body.name,
                price : req.body.price,
                quantity : req.body.quantity,
                total : req.body.total,
            });
            
            newObj.save((error) => {
                if (error) {
                    res.status(500).send(error);
                }
                else{
                    res.json(newObj);
                }
            });
    
        });
    
    });
    
    router.delete("/:id", (req, res) => {
    
        Cart.findByIdAndRemove(req.params.id, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json({ message : "Data deleted" })
            }
        });
        
    });
    
    router.put("/", (req, res) => {
        
        let newObj = {
            name : req.body.name,
            price : req.body.price,
            quantity : req.body.quantity,
            total : req.body.total
        };
    
        Cart.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else {
                res.status(500).json({ message : "Data updated" })
            }
        });
    
    });

};

module.exports = (function(){
    return router;
})();