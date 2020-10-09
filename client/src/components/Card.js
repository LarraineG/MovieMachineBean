
import React, { useState } from 'react';
import {Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup
} from 'reactstrap';
//import picture from "../pages/";

const Example = (props) => {

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
                <CardImg top width="100%" src="https://via.placeholder.com/150" alt="" />
            </Col>
            <Col>
                <CardBody>
                <CardTitle>Example Movie Title{props.movieName}</CardTitle>
                <CardText>Example Movie Synopsis{props.date}</CardText>
                    <CardText>lorem ipsum{props.movieSummary}</CardText>
                
                </CardBody>
            </Col>
            <Col>
                <Button href={props.goSeeMovieHref} target="_blank">Go see Movie</Button>
                <ButtonGroup>
                    <h6>Click here if you have seen this movie</h6>
        <Button color="primary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Click here</Button>
       
      </ButtonGroup>
                <CardText>{props.haveYouSeenThisMovis}</CardText>
            </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Example;