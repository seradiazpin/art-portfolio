/**
 * Created by sergiodiazpinilla on 14/12/16.
 */
"use strict";

const express = require("express");
const app = express();


app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + "/public"));

//  Connect all our routes to our application
app.use('/', routes);


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


// server.js

// set up ======================================================================
// get all the tools we need

const mongoose = require('mongoose');
const passport = require('passport');
const flash    = require('connect-flash');

const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');

const configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + "/public"));

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
//  Connect all our routes to our application
app.use('/', routes);

// launch ======================================================================
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});