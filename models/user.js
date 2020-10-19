const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id:String,
    movies:Array
})

const User = mongoose.model("User", userSchema);

module.exports = User;