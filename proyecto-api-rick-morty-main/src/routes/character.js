const express = require("express");
const characterSchema = require("../models/characters")

const router = express.Router();


// create character

router.post('/characters', (req,res) => {
   const character = characterSchema(req.body);
   character
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

//get all characters

router.get('/characters', (req,res) => {
    characterSchema
     .find()
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}))
 });

 // get a character
 router.get('/characters/:id', (req,res) => {
     const { id } = req.params;
    characterSchema
     .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}))
 });


// update a  character
 router.put('/characters/:id', (req,res) => {
    const { id } = req.params;
    const { name, status, species, gender, image} = req.body;
   characterSchema
    .updateOne({ _id: id},{$set:{name, status, species, gender, image}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

// delete a  character
router.delete('/characters/:id', (req,res) => {
    const { id } = req.params;
   characterSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

module.exports = router;