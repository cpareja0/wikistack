const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 3000;

const syncFunc = async () => {
  await User.sync();
  await Page.sync();

  app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
  });
};
syncFunc();
