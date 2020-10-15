import React, { Component } from 'react';
import Navigation from '../components/NavBar'
import MovieCard from '../components/MovieCard';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import AddMovieButton from '../components/AddMovieButton';
import { useAuth0 } from '@auth0/auth0-react';


const MoviePage = () => {
    const { user } = useAuth0()

    


    return (
        <section className="MoviePage">

            <Navigation />

            <Container className="themed-container" fluid={true}>
                <Row className="justify-content-center">
                    <h1>Movies Page</h1>
                    {JSON.stringify(user)}
                </Row>
                <MovieCard
                    className=""
                    rateThisMovie="false"
                />
                <AddMovieButton />
            </Container>
        </section>
    )
}



export default MoviePage;