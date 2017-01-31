/**
 * Created by sergiodiazpinilla on 30/01/17.
 */
/**
 * Created by sergiodiazpinilla on 29/01/17.
 */

// app/models/Portfolio.js
// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const topicSchema = mongoose.Schema({
    name : String,
    style : String,
    year : {type: Date, default: Date.now()}
});

// methods ====================== todo son en la parte de la logica
// create the model for users and expose it to our app
module.exports = mongoose.model('Topic', topicSchema);