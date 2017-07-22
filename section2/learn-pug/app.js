const express = require("express")
const app = express()

const colours = ["red", "green", "orange"]

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const firstName = "Dave"
  res.render('index', {name: firstName})
})

app.get('/colours', (req, res) => res.render('colours', {colours}) )

app.listen(3000, () => 'Listening on localhost:3000')
