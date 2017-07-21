const fs = require('fs')
const request = require('request')
const prompt = require('prompt')

const search = function (name) {
  request(`https://swapi.co/api/people/?search=${name}`, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(JSON.parse(body))
    }
  })
}

const logToFile = function (query) {
  fs.appendFileSync('results.txt', query + '\n')
}

const mostSearched = function (queries) {
  return queries.split("\n").reduce((acc, elem, i, arr) =>
      (arr.filter(v => v === acc).length >= arr.filter(v => v === elem).length ? acc : elem),
    null)
}

const readFileAsArray = function (file) {
  return fs.readFileSync(file, "utf8").toString()
}


if (process.argv[2] && process.argv[2] === 'leaderboard') {
  const queries = readFileAsArray('results.txt')
  console.log("The most search character is: " +  mostSearched(queries))
} else {
  prompt.start()

  prompt.get('character', (err, result) => {
    search(result.character)
    logToFile(result.character)
  })
}

