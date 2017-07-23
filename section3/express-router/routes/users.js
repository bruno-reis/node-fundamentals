const express = require("express")
const router = express.Router();

let users = [{name: 'foo', id: 1}, {name: 'bar', id: 2}]
let id = 3

const findUser = id => users.find( el => el.id === Number(id))

router.get('/', (req, res, next) => res.render('index', {users}))

router.get('/new', (req, res, next) => res.render('new'))

router.get('/:id', (req, res, next) => {
  const user = findUser(req.params.id)
  res.render('show', {user})
})

router.get('/:id/edit', (req, res, next) => {
  const user = findUser(req.params.id)
  res.render('edit', {user})
})

router.post('/', (req, res, next) => {
  users.push({name: req.body.name, id: ++id})
  res.redirect('/users')
})

router.patch('/:id', (req, res, next) => {
  const user = findUser(req.params.id)
  user.name = req.body.name
  res.redirect('/users')
})

router.delete('/:id', (req, res, next) => {
  const userIndex = users.findIndex(el => el.id === Number(req.params.id))
  users.splice(userIndex, 1)
  res.redirect('/users')
})

module.exports = router