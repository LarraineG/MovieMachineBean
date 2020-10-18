import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { Container, Row } from 'reactstrap';
import AddMovieButton from '../components/AddMovieButton';
import { useAuth0 } from '@auth0/auth0-react';
import API from "../utils/API";
import { useHistory } from 'react-router-dom';

const MoviePage = (props) => {

    const { user } = useAuth0()
    const[movie,setMovie]=useState({});
    const history = useHistory();

    useEffect( () => {
        console.log(props.movie)
        
        if (!props.movie) return history.push("/")
        API.searchCall(props.movie).then(

            response=> { const movieId=response.data.results[0].id;
<<<<<<< HEAD
               
=======
>>>>>>> 10b46c313fe6d796f50b577f659cbdea2a857b91
                
            API.idCall(movieId).then(function({data:response}){
                console.log(response);
                var dirObj=response.credits.crew.filter(x=> x.department=="Directing");
                var cast="";
                for (let i=0;i<3&&i<response.credits.cast.length;i++) {
                    if (cast.length>1){
                        cast+=(", ")
                    }
                    cast += (response.credits.cast[i].name);
                }
                console.log(cast)
                
                var movObj={
                    title:response.title,
                    year:response.release_date.substring(0,4),
                    director:dirObj[0].name,
                    cast:cast,
                    genres:response.genres,
                    runtime:response.runtime,
                    summary:response.overview,
                    posterUrl:"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+response.poster_path,
                    id:movieId
                }
                setMovie(movObj);
            });
            }
        )

    }, [])

    return (
        <section className="MoviePage">
            <Container className="themed-container" fluid={true}>
                <Row className="justify-content-center">
                </Row>
                <MovieCard
                title={movie.title}
                year={movie.year}
                cast={movie.cast}
                runtime={movie.runtime}
                genres={movie.genres}
                director={movie.director}
                summary={movie.summary}
                poster={movie.posterUrl}
                />
                <AddMovieButton movie={movie}/>
            </Container>
        </section>
    )
}

export default MoviePage;