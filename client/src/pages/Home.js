import React from 'react';
import MovieCard from '../components/MovieCard';
import Navigation from '../components/NavBar'

const Home = (props) => {
    return (
        <div>
        
        <Navigation />
    
        <MovieCard title="Movie Poster" text="Title, Year, Director, Cast, Etc." />
        <MovieCard title="idk what goes here" text="wordswordswordswordswords" />
    </div>
    );
}


export default Home;
