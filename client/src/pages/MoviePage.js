import React from 'react';
import Navigation from '../components/NavBar'
import MovieCard from '../components/MovieCard';

const MoviePage = (props) => {
    return (
        <div>

            <Navigation />

            <MovieCard title="Movie Poster" text="Title, Year, Director, Cast, Etc." />
            <MovieCard title="idk what goes here" text="wordswordswordswordswords" />

        </div>
    );
}


export default MoviePage;