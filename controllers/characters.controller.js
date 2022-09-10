const express = require('express')
const router = express.Router()
const axios = require('axios')

axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })

module.exports = router