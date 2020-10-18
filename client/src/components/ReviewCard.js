import React from 'react'
import { Media } from 'reactstrap'
import ReactStars from "react-rating-stars-component"


const ReviewCard = (props) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <Media>
              <Media left href="https://via.placeholder.com/50">
                <Media object src="https://via.placeholder.com/50" alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                  Username {props.username}
                </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                {props.review}
              </Media>
              <ReactStars count={5} onChange={ratingChanged} />
        </Media>
    )
}

export default ReviewCard;
