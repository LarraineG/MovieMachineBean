const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title:String,
    date:Number,
    summary:String,
    id:{
        type:Number,
        unique:true
    },
    poster:String,
    genres:Array
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;