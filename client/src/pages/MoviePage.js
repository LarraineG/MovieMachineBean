import React, {Component} from 'react';
import Navigation from '../components/NavBar'
import MovieCard from '../components/MovieCard';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

class MoviePage extends Component {
    state = {
  
    };   
    
render()  {
    return (
        <section className="MoviePage">

            <Navigation />

           
            
            <Container className="themed-container" fluid={true}>
                <Row className="justify-content-center">
                    <p>Movies Page</p>
                </Row>
                <MovieCard 
                className=""
                rateThisMovie="false"
                />
            </Container>
        </section>
        )
    }
};


export default MoviePage;