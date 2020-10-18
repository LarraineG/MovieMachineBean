import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import Admin from './pages/Admin'
import MyList from './pages/My_List';
<<<<<<< HEAD
import Navigation from './components/NavBar';
import Context from './Context';
=======
import Navigation from './components/NavBar/NavBar';
>>>>>>> 10b46c313fe6d796f50b577f659cbdea2a857b91

class App extends Component {
    state = {
	quote: null
    }
    render() {
    return (
      <Context.Provider value={{
         quote: this.state.quote
      }}>
        <Router>
            <Routes></Routes>
        </Router>
      </Context.Provider>
    );
    }
}

function Routes(props) {

    let history = useHistory()

    const [SearchString, setSearchString] = useState("")

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchString(value)
    };
    function EnterBtn(event) {
        event.preventDefault()
        console.log(SearchString);
        history.push("/MoviePage")

    }
    return (
        <div>
            <Navigation onChange={handleInputChange} searchInput={SearchString} onSubmit={EnterBtn} />
            <Route exact path={["/Home", "/"]} component={Home} />
            <Route exact path="/MoviePage"><MoviePage movie={SearchString} /></Route>
            <Route exact path="/My_List" component={MyList} />
            <Route exact path="/Admin" component={Admin} />
        </div>
    )
}

export default App;
