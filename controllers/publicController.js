'use strict';

let routes = require('../routes');

function publicController(req, res, next) {
    return res.render('public');
}

module.exports.controller = (app) => {
    app.get(routes.portal.public, publicController)
};
