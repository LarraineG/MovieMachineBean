const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listMovieSchema = new Schema({
    movieId:Number,
    hasWatched:Boolean
})

const ListMovie = mongoose.model("listMovie", listMovieSchema);

module.exports = ListMovie;