const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'hbs')
app.use(express.json())
app.use('/', require('./routes/index.routes'))
app.use('/', require('./routes/characters.router'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))