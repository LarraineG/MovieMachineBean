import React from 'react';
import "./card.css";
import {Col, Row,
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const ListCard = (props) => {
  return (
    
    <div>
      <Card className="card">
        <Row>
            <Col className="text-center">
                <img src="https://via.placeholder.com/300" alt="" />
            </Col>
            <Col>
                <CardBody>
                <CardTitle>Movie Title{props.movieName}</CardTitle>
                <CardText>Movie Date{props.date}</CardText>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim enim vitae massa hendrerit interdum. In et ipsum dui. Maecenas accumsan ipsum eu urna bibendum, et blandit mi pretium. Nullam at condimentum purus. Fusce id sollicitudin ante. Pellentesque bibendum{props.movieSummary}</CardText>
                </CardBody>
            </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ListCard;