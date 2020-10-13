
import React, { useState } from 'react';
import {
  Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
//import picture from "../pages/";

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
            <CardImg top width="100%" src="https://user-images.githubusercontent.com/68169895/95767024-bad48c80-0c79-11eb-99a9-e9519b559627.jpg" alt="Pink Flamingo" />
          </Col>
          <Col>
            <CardBody>
              <CardTitle>Example Movie Title{props.movieName}</CardTitle>
              <CardText>Example Movie Synopsis{props.date}</CardText>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim enim vitae massa hendrerit interdum. In et ipsum dui. Maecenas accumsan ipsum eu urna bibendum, et blandit mi pretium. Nullam at condimentum purus. Fusce id sollicitudin ante. Pellentesque bibendum diam nec massa cursus mattis. Etiam eu eros eu ante volutpat scelerisque. Maecenas et felis ante. Nulla varius odio at arcu venenatis aliquet. Nunc pellentesque sodales ante ut volutpat. Nam feugiat enim nec massa fringilla, et tempor quam sodales. Aliquam consequat tellus sit amet nibh sagittis consectetur.Nullam et odio odio. Duis vitae maximus ex. Duis ornare eget odio sed cursus. Duis in condimentum tortor. Sed viverra orci vitae odio gravida, a molestie ante convallis. Nunc ultricies nisl id elit efficitur, vel ornare massa ultricies. Nulla in placerat odio. Maecenas scelerisque, urna ut elementum tristique, tellus sapien elementum nulla, vitae consectetur nunc felis non augue. Duis ornare dolor nec orci accumsan semper. Etiam quis enim eu lorem tincidunt luctus. Praesent et felis neque.{props.movieSummary}</CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default MovieCard;