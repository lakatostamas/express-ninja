'use strict';

let path = require('path');
var fs = require('graceful-fs');
let express = require('express');
let exphbs = require('express-handlebars');
let Handlebars = require('handlebars');

let config = require('./config');
let middlewares = require('./lib/middlewares');

let app = express();

middlewares(app);

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

let ctrlPath = path.join(__dirname, 'controllers');

let scandir = (dir) => {
    fs.readdirSync(dir).forEach((file) =>  {
        let fullPath = dir + '/' + file;
        if (file.substr(-3) === '.js') {
            let route = require(fullPath);
            if (route.controller) {
                route.controller(app);
            }
        } else if(fs.lstatSync(fullPath).isDirectory()) {
            scandir(fullPath);
        }
    });
};
scandir(ctrlPath);

module.exports = app.listen(3000);
