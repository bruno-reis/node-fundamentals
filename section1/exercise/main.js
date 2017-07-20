const fs = require('fs')
const request = require('request')
const prompt = require('prompt')


prompt.start()

prompt.get('movie', (err, result) => {
  console.log('  movie: ' + result.movie);
})