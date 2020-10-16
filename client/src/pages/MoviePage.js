import React, { useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import AddMovieButton from '../components/AddMovieButton';
import { useAuth0 } from '@auth0/auth0-react';


const MoviePage = (props) => {
    const { user } = useAuth0()

    useEffect( () => {
        console.log(props.movie)
        //api call
        
        movieCall = searchCall(props.movie)[0]
    }, [])
    


    return (
        <section className="MoviePage">


            <Container className="themed-container" fluid={true}>
                <Row className="justify-content-center">
                    <h1>Movies Page</h1>
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