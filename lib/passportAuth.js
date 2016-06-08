'use strict';

let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let db = require('../db.json');


passport.serializeUser((user, done) => done(null, user.email));

passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    (req, email, password, done) => {
        var currentUser = db.filter((user) => {
            return email === user.email && password === user.pw
        });

        if (!currentUser){
            return done(err);
        }
        req.user = currentUser;
        return done(null, currentUser[0]);
    })
);

module.exports = passport;