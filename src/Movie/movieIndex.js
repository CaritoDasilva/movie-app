import React from 'react';
import { Icon } from 'react-materialize';


const Movie = ({ film }) => (
    <div className="film">
        <h1>{film.title}</h1>
        <img src={film.photo} alt="{film.description}" />
        <Icon small>favorite_border</Icon>
    </div>
);

export default Movie;