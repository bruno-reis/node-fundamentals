const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res, next) => res.render('index'))

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
    const error = (app.get('env') === 'development') ? err : {}

    res.status(err.status || 500)
    res.render('error', {message: err.message, error})
})

app.listen(3000, () => console.log("Server is listening on port 3000"))
