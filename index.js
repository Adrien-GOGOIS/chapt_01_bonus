const axios = require("axios");

const express = require("express");
const res = require("express/lib/response");
const app = express();

const countries = require("./countries.js");

app.get("/countries/:countryName", (req, res) => {
  const country = countries.countries.find((country) => {
    return country.name.common === req.params.countryName;
  });

  res.json(country.name.common);
});

// let countriesNames = [];

// function getCountries() {
//   axios.get("./countries.json").then((res) => {
//     // console.log(res);
//     countriesNames = res.data.map((country) => {
//       return country.name.common;
//     });

//     console.log(countriesNames.join(" - "));
//   });
// }

// getCountries();

// démarrage serveur
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
