const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({path: './.env'})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.use(express.json())
app.use('/', require('./routes/index.routes'))
app.use('/', require('./routes/characters.router'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))