const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path: './.env'})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

db.connect((error) => {
    if (error) {
        console.log(error)
    }
    console.log('SQL CONNECTED')
})


const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', require('./routes/index.routes'))
app.use('/', require('./routes/characters.router'))
app.use('/register', require('./register'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))