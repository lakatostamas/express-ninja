'use strict';

let fs = require('fs');
let routes = require('../routes');
let passport = require('../config/passport');
let userModel = require('../models/user');
let db = require('../db.json');
let config = require('../config');

let fileService = require('../services/fileService');


function signupController(req, res, next) {
    return res.render('signup', {
        formUrl: routes.portal.signup
    });
}

function handleRegistration(req, res, next) {
    let user = userModel({
        email: req.body.email,
        pw: req.body.pw
    });

    db.push(user);

    return fileService.write({
        fileName: config.db,
        file: JSON.stringify(db)
    })
        .then( (params) => res.redirect(routes.portal.login))
        .catch(console.log)
}

module.exports.controller = (app) => {
    app.get(routes.portal.signup, signupController);
    app.post(routes.portal.signup, handleRegistration);
};
    