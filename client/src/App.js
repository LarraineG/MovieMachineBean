import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import Admin from './pages/Admin'
import MyList from './pages/My_List';
import Navigation from './components/NavBar/NavBar';

function App() {
    return (
        <Router>
            <Routes></Routes>
        </Router>
    );
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
