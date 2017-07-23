const express = require('express')
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const itemRoutes = require('./routes/items')

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use('/items', itemRoutes)

app.get('/', (req, res, next) => res.redirect('/items'))

app.listen(3000, () => console.log('Server is listening on port 3000'))
