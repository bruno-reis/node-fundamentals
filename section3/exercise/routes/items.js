const express = require("express")
const router = express.Router();

let items = [{name: 'apples', id: 1},
  {name: 'oranges', id: 2},
  {name: 'pears', id: 3}]

let id = 4

const findItem = id => items.find(el => el.id === Number(id))

const searchItem = name => {
  const results = items.filter(el => el.name === name)
  return results.length > 0 ? results : ['The search query did not match any items']
}

router.get('/', (req, res, next) => res.render('index', {items}))

router.get('/new', (req, res, next) => res.render('new'))

router.get('/search', (req, res, next) => {
  const results = searchItem(req.query.q)
  res.render('search', {results})
})

router.get('/:id', (req, res, next) => {
  const item = findItem(req.params.id)
  res.render('show', {item})
})

router.get('/:id/edit', (req, res, next) => {
  const item = findItem(req.params.id)
  res.render('edit', {item})
})


router.post('/', (req, res, next) => {
  items.push({name: req.body.name, id: ++id})
  res.redirect('/items')
})

router.patch('/:id', (req, res, next) => {
  const item = findItem(req.params.id)
  item.name = req.body.name
  res.redirect('/items')
})

router.delete('/:id', (req, res, next) => {
  const itemIndex = items.findIndex(el => el.id === Number(req.params.id))
  items.splice(itemIndex, 1)
  res.redirect('/items')
})

router.delete('/', (req, res, next) => {
  items = []
  res.redirect('/items')
})

module.exports = router