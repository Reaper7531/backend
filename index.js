require("dotenv").config();
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Nah id win</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`);
});
