import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react'
import API from "../utils/API"
<<<<<<< HEAD



const AddMovieButton = ({movie}) => {
    // const { isAuthenticated } = useAuth0();

    return (
        // isAuthenticated && (
        <button onClick={() => API.addMovie({title:movie.title, summary:movie.summary, movieId:movie.id, poster:movie.posterUrl, date:movie.year,})}>
            
        Add Movie
=======
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
>>>>>>> d8bc6150a096ac5d89ded65b3fb88406e94e3fd2
        </button>
    )
}
export default AddMovieButton;