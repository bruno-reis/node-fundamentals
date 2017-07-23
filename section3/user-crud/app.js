const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

let users = [{name: 'foo', id: 1}, {name: 'bar', id: 2}]
let id = 3

const findUser = id => users.find( el => el.id === Number(id))

app.get('/', (req, res, next) => res.redirect('/users'))

app.get('/users', (req, res, next) => res.render('index', {users}))

app.get('/users/new', (req, res, next) => res.render('new'))

app.get('/users/:id', (req, res, next) => {
  const user = findUser(req.params.id)
  res.render('show', {user})
})

app.get('/users/:id/edit', (req, res, next) => {
  const user = findUser(req.params.id)
  res.render('edit', {user})
})

app.post('/users', (req, res, next) => {
  users.push({name: req.body.name, id})
  id++
  res.redirect('/users')
})

app.patch('/users/:id', (req, res, next) => {
  let user = findUser(req.params.id)
  user.name = req.body.name
  res.redirect('/users')
})

app.delete('/users/:id', (req, res, next) => {
  const userIndex = users.findIndex(el => el.id === Number(req.params.id))
  users.splice(userIndex, 1)
  res.redirect('/users')
})

app.listen(3000, () => console.log("Server is listening on port 3000"))
