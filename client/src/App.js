import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './components/Routes';
import Context from './Context';
class App extends Component {
    state = {
        movies: []
    }
    render() {
        return (
            <Context.Provider value={{
                movies: this.state.movies
            }}>
                <Router>
                    <Routes
                        movies={this.movies}
                        movie={this.state.movies}
                        moview={this.context.movies}
                    />
                </Router>
            </Context.Provider>
        );
    }
}
export default App;
