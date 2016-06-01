'use strict';

let path = require('path');
let express = require('express');
let config = require('./config');
let exphbs = require('express-handlebars')
let Handlebars = require('handlebars')
let controller = require('./controllers/indexController');

let app = express();


let viewDir = path.join(__dirname, config.baseDir, '/views')

let hbs = exphbs.create({
    defaultLayout: 'main',
    handlebars: Handlebars,
    extname: '.hbs',
    layoutsDir: path.join(viewDir, 'layouts')
});

app.engine(config.viewEngine, hbs.engine);
app.set('view engine', config.viewEngine);
app.set('views', viewDir);
app.set('express', express);

controller(app);

module.exports = app.listen(3000);