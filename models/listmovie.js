const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listMovieSchema = new Schema({
    title:String,
    summary:String,
    movieId:{
        type:Number,
        unique:true,
    },
    poster:String,
    date:Number,
    hasWatched:Boolean,
})

const ListMovie = mongoose.model("listMovie", listMovieSchema);

module.exports = ListMovie;