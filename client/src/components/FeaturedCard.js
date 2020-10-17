
import React from 'react';
import {
  Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const MovieCard = (props) => {


  return (
    <div>
      <Card>
        <Row>
          <Col>
            <CardImg top width="100%" src="https://user-images.githubusercontent.com/68169895/95767024-bad48c80-0c79-11eb-99a9-e9519b559627.jpg" alt="Pink Flamingo" />
          </Col>
          <Col>
            <CardBody>
              <CardTitle>Example Movie Title</CardTitle>
              <CardText>Directory: John Waters</CardText>
              <CardText>Writer: John Waters</CardText>
              <CardText>1979</CardText>
              <CardText>Notorious Baltimore criminal and underground figure Divine goes up against a sleazy married couple who make a passionate attempt to humiliate her and seize her tabloid-given title as "The Filthiest Person Alive".</CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default MovieCard;