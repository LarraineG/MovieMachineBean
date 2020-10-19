import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import API from "../utils/API";

const DidYouKnow = (props) => {

  const[fact,setFact]=useState({});
  
    useEffect( () => {
        API.getFact()
        .then(response=>{console.log(response); 
        const factArray=(response.data);
        console.log(factArray[0].fact)
        setFact(factArray[0])})
        .catch(console.log)
    },
    [])

  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://user-images.githubusercontent.com/68169895/95765996-3fbea680-0c78-11eb-976f-289e8dc551ea.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>??Did You Know???</CardTitle>
              <CardText>
                {fact.fact}
              </CardText>          
        </CardBody>
      </Card>
    </div>
  );
};

export default DidYouKnow;