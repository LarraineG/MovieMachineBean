import React, { useEffect, useState, Component } from 'react';
import { Container, Row } from 'reactstrap';
import Card from "../components/Card/Card";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import API from '../utils/API';
import Context from '../Context';
import { response } from 'express';


// import { response } from 'express';
class MyList extends Component {
  state = {
    quote: null,
    movies: []
  }
  static contextType = Context;

  // const { isAuthenticated } = useAuth0();

  // const [movies, setMovies] = useState({});

  // useEffect(() => {

  setMoviews = () => {
     var response = API.getAddedMovie()
     this.setState({ movies: response });
     console.log(this.state.movies)
     
  }
  
  componentDidMount() {
    this.setMoviews()
    console.log(this.state.movies)
  }
  
  render() {
  return (

  

    <section className="My_List">
      <Container className="themed-container" fluid={true}>
        <Row className="justify-content-center m-3">
          <h1>My List Page</h1>
        </Row>

        {this.state.movies.map(movie => (
          <Card title={movie.title}
            summary={movie.summary}
          >
          </Card>
        ))}
      </Container>
    </section>

    )
  }
}
  


export default withAuthenticationRequired(MyList, {
  // Show a message while the user waits to be redirected to the next page.
  // this may be the login page, or it may just be react taking a minute to load the dashboard
  onRedirecting: () => {
    return (
      <h1>Redirecting...</h1>
    );
  },
});


/*

//   API.getAddedMovie()
//     .then(response => {
//       console.log(response);

//       const movieArray = (response.data);
//       this.setState({ movies: movieArray });
//       console.log(movieArray[0])
//       setMovies(movieArray)
//       // .catch(console.log)
//     })
// },
//   [])
*/