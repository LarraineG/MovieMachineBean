# Create React Express App

# Movie Machine (Project 3)

## Description

Movie Machine is for movie enthusiasts that appreciate seeing reviews and creating lists of what to watch. You can log in and able to reviews admin reviews as well as view your list that you have created and search for movies and detailed information. 

## View Application:

* [The URL of the deployed application](https://moviemachinebean.herokuapp.com/)
* [The URL of the GitHub repository](https://github.com/LarraineG/Project3)

<img src="https://user-images.githubusercontent.com/68169895/96400753-2e552d00-1197-11eb-8d41-02d006e52a79.png">

## Walkthrough

The application features movie searches and information, a list you are able to reference for what is on your "To Watch" list, reviews by the creators/movie enthusiasts and also explore some featured movies.

* The home page has featured movies as well as random movie trivia facts.
* If you search for a movie, you are able to see information about the movie as well as add it to your list
* My List page is to reference your movies you need to watch
* The Recommended page is reviews made by the creators of Movie Machine as well as movie enthusiasts 
* The Login will help maintain your list and certain rights to specific pages


## The Team

* Team members: Angela Keys, Calum Held, Larraine Gonzales and Chloe Perkins.

## Requirements

* Must use a ReactJS
* Must use Node and Express Web Server
* Must be backed by a MySQL or MonoDb database with a Sequelize or Mongoose ORM
* Must utilize both GET and POST routes for retrieving and adding new data
* Must be deployed using Heroku (with data)
* Must utilize at least two new library, package, or technology that we haven’t discussed
* Must have a polished front end/UI
* Must have an authenticator for users
* Must have a folder structure that meets the MVC paradigm
* Must meet good quality coding standards (indentation, scoping, naming)
* Must protect API keys in Node with environment variables

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
