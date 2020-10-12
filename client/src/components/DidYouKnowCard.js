import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const DidYouKnow = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://user-images.githubusercontent.com/68169895/95765996-3fbea680-0c78-11eb-976f-289e8dc551ea.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim enim vitae massa hendrerit interdum. In et ipsum dui. Maecenas accumsan ipsum eu urna bibendum, et blandit mi pretium. Nullam at condimentum purus. Fusce id solli Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim enim vitae massa hendrerit interdum. In et ipsum dui. Maecenas accumsan ipsum eu urna bibendum, et blandit mi pretium. Nullam at condimentum purus. Fusce id solli</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DidYouKnow;