const express = require("express");
const app = express();
const bodyParser = require('body-parser')

let shop_list = ['apples', 'oranges', 'pears']

const search = function (query) {
  const results = shop_list.filter( el => el === query)
  return results.length > 0 ? results : ['The search query did not match any items']
}

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('shop-list', {shop_list}))

app.get('/search', (req, res) => {
  const results = search(req.query.item)
  res.render('search-result', {results})
})

app.get('/new-item', (req, res) => res.render('new-item'))

app.post('/add-item', (req, res) => {
  shop_list.push(req.body.item)
  res.redirect('/')
})

app.listen(3000, () => console.log("Listening on localhost:3000"))
