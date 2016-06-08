'use strict';

let routes = require('../routes');
let passport = require('../config/passport');

function loginController(req, res, next) {
    return res.render('login', {
        postUrl: routes.portal.login
    });
}

module.exports.controller = (app) => {
    app.get(routes.portal.login, loginController);
    app.post(routes.portal.login, passport.authenticate('local-login', {
        successRedirect : '/', //
        failureRedirect : '/login'
    }))
};
