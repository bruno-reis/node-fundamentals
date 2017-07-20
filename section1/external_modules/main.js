const request = require("request")

request('http://swapi.co/api/people/2/', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(JSON.parse(body))
  } else {
    console.log(response.statusCode)
  }
})