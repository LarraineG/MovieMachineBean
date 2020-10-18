import React from 'react';
import FeaturedCard from '../components/FeaturedCard';
import { Container, Row, Col } from 'reactstrap';
import DidYouKnow from '../components/DidYouKnowCard'
import MovieQuotes from '../components/MovieQuotesbu';



const styles = {
    FeaturedCard: {
        MarginLeft: "300px"
    }
}

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
            <Row>
                <MovieQuotes/>
                </Row>

        </Container>
    );
}


export default Home;