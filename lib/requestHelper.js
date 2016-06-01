'use strict';

let request = require('request');

function getRequest(params) {
    return new Promise((resolve, reject) => {
        request(params, (error, response, body) => {
            if (error && response.statusCode !== 200) {
                return reject(body);
            }
            return resolve(body);
        });
    });
}

module.exports = {
    get: getRequest
};