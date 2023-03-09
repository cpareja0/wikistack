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
      hooks: {
        beforeValidate: ( (title) => {
          // Removes all non-alphanumeric characters from title
          // And make whitespace underscore
          return title.replace(/\s+/g, '_').replace(/\W/g, '');
        })
      }
    })
    res.redirect('/')
  } catch (error) { next(error)}
});

wikiRouter.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = wikiRouter;