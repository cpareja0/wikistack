//blah blah blah
const express = require('express')
const wikiRouter = express.Router();
const { addPage } = require("../views");

wikiRouter.get("/", (req, res) => {
  res.send("GET request to /wiki/");
});
wikiRouter.post("/", (req, res) => {
  res.send("POST request to /wiki/");
});
wikiRouter.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = wikiRouter;