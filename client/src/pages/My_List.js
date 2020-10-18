import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import Card from "../components/Card/Card";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import API from '../utils/API';
import { response } from 'express';

const Dashboard = (props) => {
  
  const { user, isAuthenticated, isLoading } = useAuth0();

    const [ movies, setMovies ] = useState({});

    useEffect( ()=> {
      if(!isLoading){
      API.getAddedMovie(user.sub)
      .then(response=>{console.log(response);
      const movieArray=(response.data);
      console.log(movieArray)
      setMovies(movieArray)
      .catch(console.log)
      })}
    },
    [user, isLoading])

    return (

      isAuthenticated &&

      <section className="My_List">
        <Container className="themed-container" fluid={true}>
        <Row className="justify-content-center m-3">
          <h1>My List Page</h1>
        </Row>
            
          <Card 
          />
          </Container>
      </section>

    )
}

export default withAuthenticationRequired(Dashboard, {
  // Show a message while the user waits to be redirected to the next page.
  // this may be the login page, or it may just be react taking a minute to load the dashboard
  onRedirecting: () => {
    return (
      <h1>Redirecting...</h1>
    );
  },
});