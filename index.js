require("dotenv").config();
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send({
    glossary: {
      title: "example glossary",
      GlossDiv: {
        title: "S",
        GlossList: {
          GlossEntry: {
            ID: "SGML",
            SortAs: "SGML",
            GlossTerm: "Standard Generalized Markup Language",
            Acronym: "SGML",
            Abbrev: "ISO 8879:1986",
            GlossDef: {
              para: "A meta-markup language, used to create markup languages such as DocBook.",
              GlossSeeAlso: ["GML", "XML"],
            },
            GlossSee: "markup",
          },
        },
      },
    },
  });
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`);
});

module.exports = app;
