const axios = require("axios");

const express = require("express");
const res = require("express/lib/response");
const app = express();

const pokemons = require("./pokemons.js");

// ROUTES
app.get("/pokemons/:name", (req, res) => {
  console.log(pokemons);
  const pokemon = pokemons.pokemons.find((pokemon) => {
    return pokemon.name === req.params.name;
  });

  res.json(pokemon);
});

app.get("/all", (req, res) => {
  res.json(pokemons);
});

// REQUETE AXIOS
let pokemonsNames = [];

function getPokemons() {
  axios.get("http://localhost:8000/all").then((res) => {
    // console.log(res.data.pokemons);
    pokemonsNames = res.data.pokemons.map((pokemon) => {
      return pokemon.name;
    });

    console.log(pokemonsNames.join(" - "));
  });
}

getPokemons();

// démarrage serveur
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
