const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    //user (ref: "User")
    //movie title
    //link or info pertaining to movie
    // seen : yes or no (use boolean)
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;