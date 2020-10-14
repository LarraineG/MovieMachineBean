const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const factSchema = new Schema({
    id:Number,
    fact:String
})

const User = mongoose.model("Funfact", userSchema);

module.exports = Funfact;