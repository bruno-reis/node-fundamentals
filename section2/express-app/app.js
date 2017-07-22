'use strict'
const express = require("express")
let app = express()

app.get('/', (req, res) => res.send('Hello Express World!'))

app.get('/instructor/:first_name', (req, res) => {
  res.send(`The name of this instructor is ${req.params.first_name}`)
})

app.listen(3000, () => console.log("Server listening on localhost:3000"))
