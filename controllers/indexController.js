'use strict';

let _ = require('lodash');

let routes = require('../routes');

let repoService = require('../services/repoService')
let repoModel = require('../models/repo');

function indexController(req, res, next) {
    return repoService.getRepos({
        userAgent: req.get('user-agent')
    })
        .then((data) => {
            let repos = _.map(JSON.parse(data), (repo) => {
                return repoModel(repo);
            });
            return res.render('index', {
                repos: repos
            });
        })
        .catch(console.log);
}

module.exports = (app) => {
    app.get(routes.portal.index, indexController);
};