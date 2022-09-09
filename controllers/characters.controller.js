const express = require('express')
const router = express.Router()

const AllCharactersUrl = "https://rickandmortyapi.com/api";

async function getAllCharacters() {
    let response = await fetch(AllCharactersUrl);
    console.log(response + 'esta es la response :v');

    let data = await response.json();
    console.log(data);

}

module.exports = router