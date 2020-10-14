
import React, { useState } from 'react';
import {Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup
} from 'reactstrap';

const styles = {
  h6: {
    h6: "40px"
  }
}

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
                <CardImg top width="50%" src="https://via.placeholder.com/50" alt="" />
            </Col>
            <Col>
                <CardBody>
                <CardTitle>Movie Title{props.movieName}</CardTitle>
                <CardText>Movie Date{props.date}</CardText>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim enim vitae massa hendrerit interdum. In et ipsum dui. Maecenas accumsan ipsum eu urna bibendum, et blandit mi pretium. Nullam at condimentum purus. Fusce id sollicitudin ante. Pellentesque bibendum{props.movieSummary}</CardText>
                </CardBody>
            </Col>
            <Col>
                <ButtonGroup>
                  <h6>Movies I've Seen</h6>
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