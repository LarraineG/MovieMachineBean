import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import ReviewCard from '../components/ReviewCard'

const Recommended = (props) => {

    const { isAuthenticated } = useAuth0();

    return (

        isAuthenticated &&
        <div>
            <ReviewCard
                poster="https://image.tmdb.org/t/p/w200/t7rep7SCqiy4COUsq2cOcdQwzU0.jpg"
                user="Calum"
                rating={4}
                review="The first scene of this movie sees a man's skeleton escape from his body and attack people. Also Robert Englund is in it :)"
                title="Wishmaster"

            />
            <ReviewCard
                poster="https://image.tmdb.org/t/p/w200/vScen3pRHnbtlfNxErROpiM8ABm.jpg"
                user="Calum"
                rating={5}
                review="This is the best movie of 2019, and one of the best looking movies I've ever seen. If you don't like this movie it reflects badly on your value as a person."
                title="The Lighthouse"

            />
            <ReviewCard
                poster="https://image.tmdb.org/t/p/w200/o384OC1tCV8nCnozkM6y4MiSqsw.jpg"
                user="Calum"
                rating={5}
                review="This possibly the best horror movie of the last decade. Some of the most oppressive and creepy atmosphere ever put to film."
                title="The Witch"

            />
            <ReviewCard
                poster="https://image.tmdb.org/t/p/w200/sJNcoyKsqYGEFCCNsYsccikGePV.jpg"
                user="Calum"
                rating={5}
                review="Essentially the movie Alien but underwater, and with one liners. That's high praise, in case you were wondering."
                title="Leviathan"

            />
        </div>
    );
}

export default Recommended;