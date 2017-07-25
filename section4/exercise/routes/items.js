const express = require("express")
const router = express.Router()
const db = require('../models')

router.get('/', (req, res, next) => {
  db.Item.find().then(items => res.render('index', {items}))
})

router.get('/new', (req, res, next) => res.render('new'))

router.get('/:id', (req, res, next) => {
  db.Item.findById(req.params.id)
    .then(item => res.render('show', {item}))
})

router.get('/:id/edit', (req, res, next) => {
  db.Item.findById(req.params.id).
  then(item => res.render('edit', {item}))
})

router.post('/', (req, res, next) => {
  db.Item.create(req.body)
    .then(item => res.redirect('/items'))
})

router.patch('/:id', (req, res, next) => {
  db.Item.findByIdAndUpdate(req.params.id, req.body)
    .then(item => res.redirect('/items'))
})

router.delete('/:id', (req, res, next) => {
  db.Item.findByIdAndRemove(req.params.id, req.body)
    .then(item => res.redirect('/items'))
})

module.exports = router