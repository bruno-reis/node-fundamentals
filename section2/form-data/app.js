const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('new-user'))

app.get('/create-new-user', (req, res) => res.send(req.query))

app.post('/create-new-user', (req, res) => {
  // res.send(req.body)
  res.redirect('/')
})

app.listen(3000, () => console.log("Listening on localhost:3000"))

