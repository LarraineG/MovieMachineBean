import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const AddMovieButton = () => {
    const { isAuthenticated } = useAuth0();
   
    return (
        isAuthenticated && (
        <button>
        Add Movie
        </button>)
    )
}

export default AddMovieButton;