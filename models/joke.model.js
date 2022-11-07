const mongoose = require("mongoose")

// MODELS ARE FOR DESCRIBING THE STRUCTURE OF DATA
// DEFINE JSON OBJECTS IN THE DATABASE BY CREATING SCHEMAS

// JokeSchema is defining a schema object and storeing in inside JokeSchema
// !!!!!!! 1 --- DEFINE A SCHEMA IN MODEL ----- !!!!!
const JokeSchema = new mongoose.Schema({
    name: {
        type:String
    },
    age: {
        type:Number
    },
    tropical: {
        type:Boolean
    }
    // timestamp:true - creates our created & updated at automatically
}, {timestamps:true});

// ('Joke') - very important - when we put it as a name in the collection it puts it as a
// singular collection name. Mongoose turns it into lowercamps and plurals "jokes",
// once it gets registered as a model, we get a joke ojbect model that has CRUD attached to it
// !!!!!!!! 2 -------- REGISTER SCHEMA IN MONGOOSE MIDDLEWERE --------- !!!!!
const Joke = mongoose.model('Joke', JokeSchema);
// 


// !!!!!!! 3-------  OBJETEC CREATED THAT HAS ALL CRUD FUNCTIONALITIES ATTACHED TO IT ------ !!!!!!!!!!!
// IS EXPORTED TO THE CONTROLLERS
module.exports = Joke;