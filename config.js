'use strict';

let routes = require('./routes');

module.exports = {
    portalUrl: "http://localhost:3000",
    baseDir: "public/",
    viewEngine: "hbs",
    gitRepo: 'https://api.github.com/users/getify/repos',
    sessionSecret: 'bananhej',
    publicRoutes: [
        routes.portal.public,
        routes.portal.login,
        routes.portal.signup,
        routes.portal.index
    ],
    db: 'db.json'
};