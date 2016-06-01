'use strict';

let config = require('../config');
let request = require('../lib/requestHelper');

module.exports = {
    getRepos: function(params) {
        return request.get({
            url: config.gitRepo,
            headers: {
                'user-agent': params.userAgent
            }
        });
    }
}