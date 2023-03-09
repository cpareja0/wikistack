//blah blah blah
const express = require('express')
const wikiRouter = express.Router();
const { addPage } = require("../views");
const { Page } = require('../models');

wikiRouter.get("/", (req, res) => {
  res.send("GET request to /wiki/");
});
wikiRouter.post("/", async (req, res, next) => {
  try{
    const page = await Page.create({
      title: 'new post',
      content: 'yaddah yaddah new post',
    })
    res.redirect('/')
  } catch (error) { next(error)}
});

wikiRouter.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = wikiRouter;