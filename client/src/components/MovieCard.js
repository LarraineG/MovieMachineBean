import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const MovieCard = (card, index) => {

    return (
      <Row>
      <Col sm="4">
        <Card body key={index}>
          <CardTitle>{card.title}</CardTitle>
          <CardText>{card.text}</CardText>
        </Card>
      </Col>
    </Row>
    )
  };

export default MovieCard;