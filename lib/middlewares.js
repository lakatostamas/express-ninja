'use strict';

let compression = require('compression');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require('express-session');
let flash = require('connect-flash');
let morgan = require('morgan');
let passport = require('passport');

let config = require('../config');
let auth = require('./authorization');

module.exports = function(app) {
    app.use(compression({
        filter: (req, res) => {
            if (req.headers['x-no-compression']) {
                return false
            }
            return compression.filter(req, res)
        }
    }));

    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(bodyParser());

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({
        secret: config.sessionSecret
    }));

    app.use(auth);


    app.use(function(req, res, next) {
        if (req.session.passport && req.session.passport.user) {
            res.locals.user = req.session.passport.user;
        }
        next();
    });
};
