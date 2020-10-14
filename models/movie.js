const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    //user (ref: "User")
    //movie title
    //link or info pertaining to movie
    
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