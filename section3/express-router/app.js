const express = require('express');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/users', userRoutes);

app.get('/', (req, res, next) => res.redirect('/users'))

app.listen(3000, () => console.log('Server is listening on port 3000'))
