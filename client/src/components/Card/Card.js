import React from 'react';
import "./card.css";
import {
  Col, Row,
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const ListCard = (props) => {
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
              <CardText>FU*K MOVIES</CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ListCard;