import React from 'react'
import { Media } from 'reactstrap'
import ReactStars from "react-rating-stars-component"


const ReviewCard = (props) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <Media>
              <Media left href="{https://via.placeholder.com/50}">
                <Media object src={props.poster} alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                  {props.title}
                </Media>
                {props.review}
              </Media>
              <Media>
                written by {props.user}
              </Media>
              <ReactStars count={4} />
        </Media>
    )
}

export default ReviewCard;
