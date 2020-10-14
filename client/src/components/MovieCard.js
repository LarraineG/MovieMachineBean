import React, { useState } from 'react';
import {Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup,
  InputGroup,
  InputGroupAddon,Input,Media
} from 'reactstrap';
import ReviewCard from './ReviewCard';



const MovieCard = (props) => {

  const [cSelected, setCSelected] = useState([]);
const [rSelected, setRSelected] = useState(null);

const onCheckboxBtnClick = (selected) => {
  const index = cSelected.indexOf(selected);
  if (index < 0) {
    cSelected.push(selected);
  } else {
    cSelected.splice(index, 1);
  }
  setCSelected([...cSelected]);
}


return (
  <div>
    <Card>
      <Row>
          <Col>
              <CardImg top width="100%" src="https://via.placeholder.com/150" alt="Movie Poster" />
              <CardTitle>Example Movie Title{props.movieName}</CardTitle>
              <CardText>Director: Some person</CardText>
              <CardText>Cast: A lot of people</CardText>
          </Col>
          <Col>
              <CardBody>
              
                <CardText>Example Movie Synopsis{props.date}</CardText>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{props.movieSummary}</CardText>
              
              </CardBody>
          </Col>
          <Col>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <InputGroup>
              <Input />
              <InputGroupAddon addonType="append"><Button>Submit Movie Review</Button></InputGroupAddon>

            </InputGroup>
          </Col>
      </Row>
    </Card>
  </div>
);
};

export default MovieCard;