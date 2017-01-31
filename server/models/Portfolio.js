/**
 * Created by sergiodiazpinilla on 29/01/17.
 */

// app/models/Portfolio.js
// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const portfolioSchema = mongoose.Schema({
        userId : String,
        artNumber :Number,
        reputation : {type:Number, default:0},
        principalImg : [],
        artPieces : []
});

// methods ======================
// add image principal
portfolioSchema.methods.addImages = function(imgUrl) {
    return this.principalImg.push(imgUrl);
};

// add art piece
portfolioSchema.methods.addImages = function(imgId) {
    return this.principalImg.push(imgId);
};

// get all images
portfolioSchema.methods.consult = function() {
    return this.artPieces;
};

// create the model for users and expose it to our app
module.exports = mongoose.model('Portfolio', portfolioSchema);