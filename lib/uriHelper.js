'use strict';

let _ = require('lodash');

let uriTemplate = require('express-uri-template');
let querystring = require('querystring');

module.exports = function(uri, params, qs) {
    let url = uriTemplate(uri, params);
    return !_.isEmpty(qs) ? url + '?' + querystring.stringify(qs) : url;
};