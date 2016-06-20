'use strict';

let _ = require('lodash');

let routes = require('../routes');

let repoService = require('../services/repoService')
let repoModel = require('../models/repo');

function indexController(req, res, next) {
    if(!(req.session.passport && req.session.passport.user)) {
       return res.render('index');
    }
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
        .catch(console.log)
        .next();
}

module.exports.controller = (app) => {
    app.get(routes.portal.index, indexController);
};
