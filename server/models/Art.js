/**
 * Created by sergiodiazpinilla on 29/01/17.
 */

/**
 * Created by sergiodiazpinilla on 19/01/17.
 */

// app/models/Art.js
// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const artSchema = mongoose.Schema({
    name :String,
    autor : String,
    desctiption: {type:String, default: this.name +" - Created by "+this.autor+"-"+this.year},
    year : {type:Date, default: Date.now()}
});

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model('Art', artSchema);