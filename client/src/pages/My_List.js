//import React, { useEffect, useState, Component } from 'react';
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Card from "../components/Card/Card";
//import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import API from '../utils/API';
import Context from '../Context';
//import { response } from 'express';
// import { response } from 'express';
class MyList extends Component {
  state = {
    movies: []
  }
  static contextType = Context;
  componentDidMount() {
    this.fetchMovies();
  }
  // const { isAuthenticated } = useAuth0();
  // const [movies, setMovies] = useState({});
  // useEffect(() => {
  fetchMovies = () => {
    let url = "http://localhost:3000/api/myList"
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Request to backend failed.');
        }
        return res.json();
      }).then(data => {
        console.log("fetchMovies: ", data);
        //console.log(this.fetchMovies());
        const movies = data;
        this.setState({ movies: movies });
      }).catch(err => {
        console.log(err);
      });
  }
  render() {
    const { movies } = this.state;
    return (
      <section className="My_List">
        <Container className="themed-container" fluid={true}>
          <Row className="justify-content-center m-3">
            <h1 style={{ border: "3px dotted rebeccapurple", padding: "2rem 4rem", margine: "1rem 0" }}>My List Page</h1>
          </Row>
          {!movies && (
            <Row>
              <p
                style={{ fontSize: "3rem", color: "rebeccapurple" }}
              >We'll show your past movie searches here</p>
            </Row>
          )}
          {movies.map(movie => <div>{movie.title}</div>)}
        </Container>
      </section>
    )
  }
}
export default MyList;
