import React from 'react';
import FeaturedCard from '../components/FeaturedCard';
import { Container, Row, Col } from 'reactstrap';
import DidYouKnow from '../components/DidYouKnowCard'
import Banner from '../components/MovieBanner';
const Home = (props) => {
    return (
        <Container fluid style={{ backgroundColor: "black" }}>
            <Row>
                <Banner />
                <Col sm="7">
                    <FeaturedCard style={{ backgroundColor: "black" }} />
                </Col>
                <Col sm="3">
                    <DidYouKnow style={{ backgroundColor: "black" }} />
                </Col>
            </Row>
        </Container>
    );
}
export default Home;