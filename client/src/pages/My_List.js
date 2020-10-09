import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Card from "../components/Card";
import Search from "../components/Search";
import Navigation from '../components/NavBar'

class MyList extends Component {
  state = {

  };

  //functions, componentDidMounts go here

  render() {
    return (
      <section className="My_List">
        <Navigation />
        My List Page
        
        <Container>
          <Search />
          <Card 
          className=""
          goSeeMovie="false"
          />
        </Container>

      </section>

    )
  }
};

export default MyList;