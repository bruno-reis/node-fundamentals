const express = require("express")
const router = express.Router()
const db = require('../models')

router.get('/', (req, res, next) => {
  db.Pet.find().then(pets => res.render('index', {pets}))
})

router.get('/new', (req, res, next) => res.render('new'))

router.get('/:id', (req, res, next) => {
  db.Pet.findById(req.params.id).then(pet => res.render('show', {pet}))
})

router.get('/:id/edit', (req, res, next) => {
  db.Pet.findById(req.params.id).then(pet => res.render('edit', {pet}))
})

router.post('/', (req, res, next) => {
  db.Pet.create(req.body).then(pet => res.redirect('/pets'))
})

router.patch('/:id', (req, res, next) => {
  db.Pet.findByIdAndUpdate(req.params.id, req.body)
    .then(pet => res.redirect('/pets'))
})

router.delete('/:id', (req, res, next) => {
  db.Pet.findByIdAndRemove(req.params.id, req.body)
    .then(pet => res.redirect('/pets'))
})

module.exports = router