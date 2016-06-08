'use strict';

let _ = require('lodash');
let publicRoutes = require('../config').publicRoutes;
let routes = require('../routes');

function getAuth(req, res, next) {

    let currentPath = req.path;

    if ( (req.session.passport && req.session.passport.user) || _.some(publicRoutes, (route) => route === currentPath)) {
        return next();
    }

    return res.redirect(routes.portal.login);
}

module.exports = getAuth;
    
