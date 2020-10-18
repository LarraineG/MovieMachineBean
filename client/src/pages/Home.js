import React from 'react';
import FeaturedCard from '../components/FeaturedCard';
import { Container, Row, Col } from 'reactstrap';
import DidYouKnow from '../components/DidYouKnowCard'


const Home = (props) => {
    return (
        <Container fluid>
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