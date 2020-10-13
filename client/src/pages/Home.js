import React from 'react';
import FeaturedCard from '../components/FeaturedCard';
import Navigation from '../components/NavBar';
import { Container, Row, Col } from 'reactstrap';
import DidYouKnow from '../components/DidYouKnowCard'

const styles = {
    FeaturedCard: {
        MarginLeft: "300px"
    }
}

const Home = (props) => {
    return (
        <Container fluid>
            <Navigation />
            <Row>
                <Col sm="7">
                    <FeaturedCard />
                </Col>
                <Col sm="3">
                    <DidYouKnow/>
                </Col>
            </Row>
        </Container>
    );
}


export default Home;

{/* <Row>
<Col xs="6" sm="4">.col-6 .col-sm-4</Col>
<Col xs="6" sm="4">.col-6 .col-sm-4</Col>
<Col sm="4">.col-sm-4</Col>
</Row> */}