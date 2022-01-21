var express = require("express");
var router = express.Router();
var Meals = require("../models/meals");

// POST
router.post("/", function (req, res, next) {
  let name = req.body.name;
  let main_flavour = req.body.main_flavour;
  let country_origin = req.body.country_origin;
  let ingredients = req.body.ingredients;
  let score = req.body.score;
  
  let responseObject = { name: name, main_flavour: main_flavour, country_origin: country_origin, ingredients: ingredients, score: score };
  
  Meals.add(responseObject, function (err) {
    if (err) {
      res.status(500).send("Server Error");
    } else {
      res.json(responseObject);
    }
  });
});

// GET ALL
router.get("/", function (req, res, next) {
    Meals.all(function (err, data) {
      if (err) {
        res.status(500).send("Server Error");
      } else {
        res.json(data);
      }
    });
  });
  
// GET ONE  
  router.get("/:id", function (req, res, next) {
    const id = parseInt(req.params.id);
    Meals.one(id, function (err, data) {
      if (err) {
        res.status(500).send("Server Error");
      } else {
        res.json(data);
      }
    });
  });
  
// UPDATE
  router.put("/:id", function (req, res, next) {
    const id = parseInt(req.params.id); 
    let name = req.body.name;
    let main_flavour = req.body.main_flavour;
    let country_origin = req.body.country_origin;
    let ingredients = req.body.ingredients;
    let score = req.body.score;
  
    let newData = { name: name, main_flavour: main_flavour, country_origin: country_origin, ingredients: ingredients, score: score };
    Meals.update(id, newData, function (err) {
      if (err) {
        res.status(500).send("Server Error");
      } else {
        res.json(newData);
      }
    });
  });
  
// DELETE ALL
  router.delete("/all", function (req, res, next) {
    Meals.removeAll(function (err) {
      if (err) {
        res.status(500).send("There was an error");
      } else {
        res.status(200).send();
      }
    });
  });
  
// DELETE ONE
  router.delete("/:id", function (req, res, next) {
    const id = parseInt(req.params.id);
    Meals.remove(id, function (err) {
      if (err) {
        res.status(500).send("There was an error");
      } else {
        res.status(200).send();
      }
    });
  });

  module.exports = router;