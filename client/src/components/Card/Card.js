import React from 'react';
import "./card.css";
import ReactStars from "react-rating-stars-component"

import {Col, Row,
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';


const ListCard = (props) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    
    <div>
      <Card className="card">
        <Row>
            <Col className="text-center">
                <img src={props.poster} alt="" />
            </Col>
            <Col>
                <CardBody>
                <CardTitle>{props.title} ({props.date})</CardTitle>
                <CardText>{props.summary}</CardText>
                <CardText>FUCK MOVIES</CardText>
                </CardBody>
            </Col>
            <ReactStars count={5} onChange={ratingChanged} />
        </Row>
      </Card>
    </div>
  );
};

export default ListCard;