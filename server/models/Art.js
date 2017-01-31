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
    year : {type:Date, default: Date.now()},
    privateArt : {type: Boolean, default : false},
    sellData : {
        price: {type:Number, default: 0},
        unique: {type: Boolean, default : false},
        sold : {type: Number, default : 0}
    }
});

// methods ======================
// update Data todo Ver si si actualiza en base de datos, sin nesesidad de guardar
artSchema.methods.updateData = function(name,autor,description) {
    this.name = name;
    this.autor = autor;
    this.desctiption = description;
    return "Data update";
};

// set private todo Ver si si actualiza en base de datos, sin nesesidad de guardar
artSchema.methods.setPrivate = function() {
    this.privateArt = true;
    return this.privateArt;
};

// set price todo Ver si si actualiza en base de datos, sin nesesidad de guardar
artSchema.methods.setPrice = function(price) {
    if(this.sellData.unique && this.sellData.sold == 0){
        this.sellData.price = price;
    }else {
        if(!this.sellData.unique){
            this.sellData.price = price;
        }else {
            //todo crear un archivo en el cual mantener los errores
            return "Error no se puede  editar precio de una pieza unica ya vendida";
        }
    }
    return this.sellData.price;
};

// buy todo Ver si si actualiza en base de datos, sin nesesidad de guardar
artSchema.methods.buy = function() {
    if(this.sellData.unique && this.sellData.sold == 0){
        this.sellData.sold++;
    }else {
        if(!this.sellData.unique){
            this.sellData.sold++;
        }else {
            //todo crear un archivo en el cual mantener los errores
            return "Error pieza de arte ya comprada";
        }
    }
    return this.sellData.price;
};



// create the model for users and expose it to our app
module.exports = mongoose.model('Art', artSchema);