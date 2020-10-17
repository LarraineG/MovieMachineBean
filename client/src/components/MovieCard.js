import React from 'react';
import {Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button,
  InputGroup,
  InputGroupAddon, Input
} from 'reactstrap';
import ReviewCard from './ReviewCard';



const MovieCard = (props) => {

return (
  <div>
    <Card>
      <Row>
          <Col>
              <CardImg top width="100%" src={props.poster} alt="Movie Poster" />
          </Col>

          <Col>
              <CardBody>
                <Col>
                  <CardTitle><h1>{props.title}({props.year})</h1></CardTitle>
                  <CardText>Summary: {props.summary}</CardText>
                  <CardText>Director: {props.director}</CardText>
                  <CardText>Cast: {props.cast}</CardText>
                  <CardText>Runtime: {props.runtime}</CardText>
                </Col>
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