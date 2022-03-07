const axios = require("axios");

const express = require("express");
const res = require("express/lib/response");
const app = express();

const countries = require("./countries.js");

// ROUTES
app.get("/countries/:countryName", (req, res) => {
  const country = countries.countries.find((country) => {
    return country.name.common === req.params.countryName;
  });

  res.json(country.name.common);
});

app.get("/all", (req, res) => {
  res.json(countries.countries);
});

// REQUETE AXIOS
let countriesNames = [];

function getCountries() {
  axios.get("http://localhost:8000/all").then((res) => {
    // console.log(res);
    countriesNames = res.data.map((country) => {
      return country.name.common;
    });

    console.log(countriesNames.join(" - "));
  });
}

getCountries();

// démarrage serveur
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
