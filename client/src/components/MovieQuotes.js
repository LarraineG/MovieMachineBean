import React, {Component} from 'react';
import movieQuotes from 'movie-quotes';
import Context from '../context';
class MovieQuotes extends Component {
        state = {
                quote: null
        }
        static contextType = Context;
        quoteHandler = e =>  {
                e.preventDefault()
                console.log(movieQuotes.random());
                this.setState({quote: movieQuotes.random()});
        }
        render() {
        return (
        <React.Fragment>
          <div>
                <p>Your quote: {this.state.quote}</p>
            <footer>
              <h1>Movie Quote</h1>
            <div>
              <h2>Get Quote</h2>
            <button
              onClick={this.quoteHandler}
            >
              Click Me!
            </button>
          </div>

            </footer>
          </div>
        </React.Fragment>
        )
    }
}
export default MovieQuotes;
