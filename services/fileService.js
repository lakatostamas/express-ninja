'use strict';

let fs = require('fs');

function writeFileService(params) {
    let deferred = Promise.defer();
    fs.writeFile(params.fileName, params.file, (err) => {
        err ? deferred.reject(err) :deferred.resolve(params);
    });
    return deferred.promise;
}

module.exports = {
    write: writeFileService
};