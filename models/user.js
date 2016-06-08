'use strict';

function userModel(params) {
    let email = params.email;
    let pw = params.pw;
    email = email.trim().toLowerCase();
    return {
        email,
        pw
    }
}

module.exports = userModel;