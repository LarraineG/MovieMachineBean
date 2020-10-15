const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project3"
);

const factSeed = [
  {
    fact: "Steven Spielberg owns 2.5% of 'Star Wars' due to a bet he made with George Lucas."
  },
  {
    fact: "In 'Jaws' the decision not to show the shark for the majority of the film has garnered it much praise over the years. This decision was only made because the animatronic shark was malfunctioning during shooting."
  },
  {
    fact: "Werner Herzog once rescued Joaquin Phoenix from a car wreck."
  },
  {
    fact: "Werner Herzog Stole a camera from his university to make his first Film."
  },
  {
    fact: "The Velociraptor sounds in 'Jurassic Park' were sampled from tortoises mating."
  },
  {
    fact: "The dog playing Toto was paid more than the dwarfs playing the munchkins in 'Wizard of Oz'"
  },
  {
    fact: "The green text that makes up the code in 'The Matrix' came from a Japanese sushi cookbook."
  },
  {
    fact: "O.J. Simpson was considered for the role of the Terminator. James Cameron rejected him as he thought nobody would buy him as a remorseless killer."
  },
  {
    fact: "In 'The Godfather' Marlon Brando memorized almost none of his lines, and instead read off cue cards during most of the film."
  },
  {
    fact: "The extras playing natives in 'Green Inferno' were actual isolated natives had no idea what a movie was. Eli Roth showed them 'Cannibal Holocaust' and they loved it so much they immediately agreed to be in the movie."
  },
];

db.Funfact.remove({})
  .then(() => db.Funfact.collection.insertMany(factSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
