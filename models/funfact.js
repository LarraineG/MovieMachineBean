const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const factSchema = new Schema({    
    fact:String
})

const Funfact = mongoose.model("Funfact", factSchema);

module.exports = Funfact;