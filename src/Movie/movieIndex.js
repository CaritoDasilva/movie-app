import React from 'react';


const Movie = ({ film }) => (
    <div className="film">
        <h1>{film.title}</h1>
        <img src={film.photo} alt="{film.description}" />

    </div>
);

export default Movie;