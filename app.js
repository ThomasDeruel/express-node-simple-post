const express = require('express');
const app = express();
const bodyParser     =  require("body-parser");
//const bodyParser = require('body-parser');

const homeRouter = require('./routes/home');
const handleUsers = require('./routes/users');
const handle404 = require('./routes/404');

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended: false}))
app.use(homeRouter);
app.use(handleUsers.route);
app.use(handle404);

app.listen(3000);