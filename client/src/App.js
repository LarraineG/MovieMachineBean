import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import Admin from './pages/Admin'
import MyList from './pages/My_List';

function App() {
    return (
        <Router>
        <div>
        <Route exact path={["/Home", "/"]} component={Home}/>
        <Route exact path="/MoviePage" component={MoviePage}/>
        <Route exact path="/My_List" component={MyList}/>
        <Route exact path="/Admin" component={Admin}/>
        </div>
        </Router>
    );
}
export default App;