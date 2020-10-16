const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project3"
);

const reviewSeed = [
{
  movieId:10351,
  user:1,
  rating:4,
  review:"The first scene of this movie sees a man's skeleton escape from his body and attack people. Also Robert Englund is in it :)",
},
{
  movieId:503919,
  user:1,
  rating:5,
  review:"This is the best movie of 2019, and one of the best looking movies I've ever seen. If you don't like this movie it reflects badly on your value as a person."
},
{
  movieId:310131,
  user:1,
  rating:5,
  review:"This possibly the best horror movie of the last decade. Some of the most oppressive and creepy atmosphere ever put to film."
},
{
  movieId:14372,
  user:1,
  rating:5,
  review:"Essentially the movie Alien but underwater, and with one liners. That's high praise, in case you were wondering."
},
{
  movieId:460885,
  user:1,
  rating:5,
  review:"A rage fueled acid trip. This is Nic Cage at his Nic Cagiest."
},
{
  movieId:25623,
  user:1,
  rating:4,
  review:"Every website assures me this is a horror movie, but I don't think even the director believes that. Either way it's a bizarre joyful trip to watch. Very Japanese."
},
{
  movieId:29161,
  user:1,
  rating:5,
  review:"A girl has a psychic link to bugs and uses it to catch a serial killer. It's rare for a movie to be so bizarre yet still have such an engaging and coherent story. There is also a monkey."
},
{
  movieId:18502,
  user:1,
  rating:4,
  review:"♫The stuff is here now. A great new taste sensation. Alive and free now. Gives you elevation. ENOUGH IS NEVER ENOUGH *clap* EEENOUGH IS NEVER ENOUGH *clap* OF THE STUFF *clap clap*"
},
{
  movieId:2654,
  user:1,
  rating: 5,
  review:"The best lovecraft movie. It's not actually based on any lovecraft story. Sam Neil is a wonderful man."
},
{
  movieId:8413,
  user:1,
  rating:5,
  review:"This movie is so good, you don't need eyes to see it. Rachel would hate this movie."
}
];

db.Review.remove({})
  .then(() => db.Review.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });