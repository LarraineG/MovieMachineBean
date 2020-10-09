import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import UserList from './pages/UserList'
import Login from './pages/Login'
import Calum from './pages/Calum'
import Chloe from './pages/Chloe'
import Larraine from './pages/Larraine'
import Angela from './pages/Angela'

function App() {
    return (
        <Router>
        <div>
        <Route exact path={["/Home", "/"]} component={Home}/>
        <Route exact path="/MoviePage" component={MoviePage}/>
        <Route exact path="/UserList" component={UserList}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Calum" component={Calum}/>
        <Route exact path="/Chloe" component={Chloe}/>
        <Route exact path="/Larraine" component={Larraine}/>
        <Route exact path="/Angela" component={Angela}/>
        </div>
        </Router>



    );
}
export default App;