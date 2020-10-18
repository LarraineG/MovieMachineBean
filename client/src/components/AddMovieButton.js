import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react'
import API from "../utils/API"
const AddMovieButton = ({ movie }) => {
    // const { isAuthenticated } = useAuth0();
    return (
        // isAuthenticated && (
        <button
            onClick={() => API.addMovie({
                title: movie.title,
                summary: movie.summary,
                movieId: movie.id,
                poster: movie.posterUrl,
                date: movie.year,
            })}
        >
            Add Movie
        </button>
    )
}
export default AddMovieButton;