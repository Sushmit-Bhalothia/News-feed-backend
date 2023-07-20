const express = require("express");
const Model = require("../models/model");

const router = express.Router();

router.post("/post", (req, res) => {
  const data = new Model({
    email: req.body.name,
    password: req.body.age,
  });
});

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send("the user with id " + req.params.id + " has an account");
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
