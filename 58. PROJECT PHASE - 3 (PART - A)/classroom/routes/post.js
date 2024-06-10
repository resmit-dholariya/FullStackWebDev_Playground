const express = require("express");
const router = express.Router();

//Posts
//index-route
router.get("/", (req, res) => {
  res.send("GET for posts");
});

//show-route
router.get("/:id", (req, res) => {
  res.send("GET for posts id");
});

//post-route
router.post("/", (req, res) => {
  res.send("POST for posts");
});

//Delete-route
router.delete("/:id", (req, res) => {
  res.send("DELETE for posts id");
});

module.exports = router;
