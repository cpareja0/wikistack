const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");
//const addPage = require("./routes/wiki");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", require("./routes/wiki"));

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 3000;

const syncFunc = async () => {
  await db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
  });
};
syncFunc();
