import React from 'react';
import {
    Card,
    CardImg,
} from 'reactstrap';
const Banner = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" height="400px" src="https://user-images.githubusercontent.com/68169895/96377337-cf69c680-114a-11eb-8ce1-578716390b16.png" alt="Card image cap" />
            </Card>
        </div>
    );
};
export default Banner;