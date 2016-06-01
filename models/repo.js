'use strict';

let _ = require('lodash');

function repoModel(repo) {
    return _.pick(repo, ['name', 'owner']);
}

module.exports = repoModel;