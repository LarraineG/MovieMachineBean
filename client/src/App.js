import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Navigation from './components/NavBar' 
function App() {
    return (
        <div className="">
            {/* <Layout> */}
                {/* <Header className="" title="Title" scroll> */}
                    <Navigation>
                        <Link to="/home">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/mylist">My List</Link>
                        <Link to="/moviespage">Movies Page</Link>
                        <Link to="/adminpage/id:1">Callum Page</Link>
                        <Link to="/adminpage/id:2">Angela Page</Link>
                        <Link to="/adminpage/id:3">Larraine Page</Link>
                        <Link to="/adminpage/id:4">Chloe Page</Link>
                    </Navigation>
                {/* </Header> */}
            {/* </Layout> */}
        </div>
    );
}
export default App;