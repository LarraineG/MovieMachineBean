const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    //user (ref: "User")
    //rating
    //review text
})

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;