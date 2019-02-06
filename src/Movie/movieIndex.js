import React from 'react';


const Movie = ({ film }) => (
    <div className="film">
        <h1>{film.title}</h1>
        <img src={film.photo} />

    </div>
);

export default Movie;