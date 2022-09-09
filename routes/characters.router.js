const express = require('express')
const router = express.Router()
const getApi = require('../controllers/characters.controller')


router.get('/characters', (req, res) => {
    res.render('characters')
})

router.get('/characters', getApi)

module.exports = router