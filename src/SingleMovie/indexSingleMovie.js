import React, { Component } from 'react';
import Router from '../Router/routerIndex';

const urlMovie = 'https://api.themoviedb.org/3/movie/';
const urlPhoto = 'https://image.tmdb.org/t/p/w500';


export default class SingleMovie extends Component {
    state = {
        loading: false,
        films: [],
        error: false
    };
    componentDidMount() {
        this.getPopularMovies();
        console.log(this.props.match.params.filmTitle);
    }

    getPopularMovies() {
        fetch(`${urlMovie}${this.props.match.params.filmTitle}?api_key=10c16bf05c5bd1c555be0b1e8188a1f6&language=en-US`)
            .then(response => response.json())
            .then(films => {
                console.log(films);
                let title = films.title;
                let photo = `${urlPhoto}${films.backdrop_path}`;
                let overview = films.overview;
                let filmSelected = {
                    title: title,
                    photo: photo,
                    description: overview
                }
                this.setState({ films: filmSelected })
            })
    }
    render() {
        let { films: films } = this.state;
        console.log(this.state);

        return (
            <div>
                <h1>{films.title}</h1>
                <img src={films.photo} alt="{film.description}" />
                <p>{films.description}</p>
                {console.log('holis')}
            </div>
        )
    }
}
