import React from 'react';

//const urlPhoto = 'https://image.tmdb.org/t/p/w500';

const Movie = ({ film }) => (
    <div className="film">
        <h1>{film.title}</h1>
        <img src={film.photo} />

    </div>
);

export default Movie;