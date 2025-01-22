const express = require("express");

const imagePath = __dirname + "/images/";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/images/:name", (req, res) => {
  res.sendFile(imagePath + req.params.name + ".svg");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;
