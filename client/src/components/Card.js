
import React, { useState } from 'react';
import "./card.css";
import {Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, ButtonGroup
} from 'reactstrap';

const Example = (props) => {

    const [cSelected, setCSelected] = useState([]);

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
            <Col>
              <Row className="justify-content-around mt-3">
                <CardText>Have you seen this movie?</CardText>
                <Button color="primary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Seen this movie?</Button>
              </Row>
            </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Example;