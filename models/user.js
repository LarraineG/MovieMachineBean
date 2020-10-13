const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //info related to user
    //username
    //password
    //review (look into ref: "Review"[model name?])
    //movie (same as above ref: "Movie")
})

const User = mongoose.model("User", userSchema);

module.exports = User;