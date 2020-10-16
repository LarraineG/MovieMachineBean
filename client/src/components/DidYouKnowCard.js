import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const DidYouKnow = (props) => {

  // export function Funfact({ children }) {
  //   return <p className="group">{children}</p>;
  // }
  
  // export function Funfact({fact})

  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://user-images.githubusercontent.com/68169895/95765996-3fbea680-0c78-11eb-976f-289e8dc551ea.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                <p className="group-item">
                {/* <p>{fact}</p> */}
                </p>
              </CardText>          
        </CardBody>
      </Card>
    </div>
  );
};

export default DidYouKnow;