const express = require("express");
const Women = require("../models/shopcollection");
const router = express.Router();

router.get("/:id", (req, res) => {
    
    Women.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.get("/", (req, res) => {
    
    Women.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.post("/", (req, res) => {
        
    if (!req.files.photo) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.photo;
    let date = new Date();
    let imageName = date.getTime() + ".png"
    
    image.mv("./collections/photo/" + imageName, (error) => {
            
        if (error) return res.status(500).send(error);
            
        let newObj = new Women({
            name : req.body.name,
            price : req.body.price,
            description : req.body.description,
            photo : "http://localhost:3000/photo/" + imageName
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
    
    Women.findByIdAndRemove(req.params.id, (error, result) => {
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
        description : req.body.description
    };
    
    Women.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else {
            res.status(500).json({ message : "Data updated" })
        }
    });
    
});

module.exports = (function(){
    return router;
})();