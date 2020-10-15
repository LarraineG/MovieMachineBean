import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import AddMovieButton from '../components/AddMovieButton';
import { useAuth0 } from '@auth0/auth0-react';
import API from "../utils/API";

const MoviePage = (props) => {
    const { user } = useAuth0()
    const[movie,setMovie]=useState({});
    useEffect( () => {
        console.log(props.movie)
        //api call
        API.searchCall(props.movie).then(

            response=> { const movieId=response.data.results[0].id;
                // console.log(response);
                // const movieArray=response.data.results
                // .map(arrfunc);
                // function arrfunc(mov){
                //     var movobj={
                //         title:mov.title,
                //         date:mov.release_date.substring(0,4),
                //         summary:mov.overview,
                //         id:mov.id,
                //         poster:"https://image.tmdb.org/t/p/w200"+mov.poster_path
                //     }
                //         return(movobj);
                // }
                // console.log(movieArray);
            API.idCall(movieId).then(function({data:response}){
                console.log(response);
                var dirObj=response.credits.crew.filter(x=> x.department=="Directing");
                var cast="";
                for(let i=0;i<3&&i<response.credits.cast.length;i++){
                    if (cast.length>1){
                        cast+=(", ")
                    }
                    cast+=(response.credits.cast[i].name);
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
                    <h1>{movie.title}</h1>
                    {JSON.stringify(user)}
                </Row>
                <MovieCard
                    className=""
                    rateThisMovie="false"
                />
                <AddMovieButton />
            </Container>
        </section>
    )
}



export default MoviePage;