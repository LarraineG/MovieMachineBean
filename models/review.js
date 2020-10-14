const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    //user (ref: "User")
    //rating
    //review text
    movieId:Number,
    user:Number,
    rating:Number,
    review:String,
})

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;