import React, { useState } from 'react';
import movieQuotes from 'movie-quotes';


/* this one prints quote to console */
const quoteHandler = e => {
        e.preventDefault()
        //console.log(movieQuotes.random());
}

const Quote = () => (
  <div>
    <h2>Get Quote</h2>
    <button
      onClick={quoteHandler}
    >
      Click Me!
    </button>
  </div>
)
const MovieQuotes = () => (
    <div>
      <footer
        
      >
        <h1>Movie Quote</h1>
        <Quote />
      </footer>
    </div>
  )
  
  export default MovieQuotes;




  