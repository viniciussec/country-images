const express = require("express");

//Pegar image da pasta /images
const imagePath = __dirname + "/images/";

const app = express();

//Servir imagem na rota get
app.get("/images/:name", (req, res) => {
  res.sendFile(imagePath + req.params.name + ".svg");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
