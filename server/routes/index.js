/**
 * Created by sergiodiazpinilla on 11/01/17.
 */

const routes = require('express').Router();
const passport = require('passport');
const flash    = require('connect-flash');
const session      = require('express-session');

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
//const profile = require('./perfil');

require('../config/passport')(passport); // pass passport for configuration

// required for passport
routes.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
routes.use(passport.initialize());
routes.use(passport.session()); // persistent login sessions
routes.use(flash()); // use connect-flash for flash messages stored in session

// =====================================
// HOME PAGE (with login links) ========
// =====================================
routes.get('/', function(req, res) {
    res.render('index.html'); // load the index.ejs file
});

// =====================================
// LOGIN ===============================
// =====================================
// show the login form
routes.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage') });
});

// process the login form
routes.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
// process the login form
// app.post('/login', do all our passport stuff here);

// =====================================
// SIGNUP ==============================
// =====================================
// show the signup form
routes.get('/signup', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage') });
});

// process the signup form
// app.post('/signup', do all our passport stuff here);

// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
routes.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
        user : req.user // get the user out of session and pass to template
    });
});

// =====================================
// LOGOUT ==============================
// =====================================
routes.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// process the signup form
routes.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = routes;