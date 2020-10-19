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
//started user 2 angela
{
  movieId:114,
  user:2,
  rating:5,
  review:"Who knew it was so much fun to be a hooker? Fun loving romantic comedy that never gets old"
},

{
  movieId:22881,
  user:2,
  rating:5,
  review:"Based on the extraordinary true story with a very happy ending"
},
{
  movieId:57119,
  user:2,
  rating:4,
  review:"Very close to my own personal love story of princess meets the bad boy with a happy ending"
},
{
  movieId:67660,
  user:2,
  rating:3,
  review:"The balance of power in four couples’ relationships is upset when the women start using the advice in Steve Harvey’s book, Act Like A Lady with all couples making the grade"
},
{
  movieId:222899,
  user:2,
  rating:4,
  review:"A modern reimagining of the classic romantic comedy, this contemporary version closely follows new love for two couples as they journey from the bar to the bedroom and are eventually put to the test in the real world."
},
{
  movieId:168530,
  user:2,
  rating:5,
  review:"Another great Ice Cube movie with both truth and fiction to make very funny"
},
{
  movieId:257091,
  user:2,
  rating:5,
  review:"Very funny movie that managed to put black and white together without making it about race"
},
{
  movieId:274167,
  user:2,
  rating:5,
  review:"The story of a mild-mannered radio executive who strives to become the best stepdad ever to his wife's two children that has to deal with a bad-boy ex made very funny"
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