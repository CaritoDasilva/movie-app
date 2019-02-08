import React, { Component } from 'react';
import Movie from '../Movie/movieIndex';

const urlLastFilm = 'https://api.themoviedb.org/3/discover/movie?api_key=10c16bf05c5bd1c555be0b1e8188a1f6&language=en-US&primary_release_year=2019';
const urlPhoto = 'https://image.tmdb.org/t/p/w500';


export default class LastMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            films: [],
            error: false
        };
        this.getLastMovie = this.getLastMovie.bind(this);
    }

    componentDidMount() {
        this.getLastMovie();
    }

    getLastMovie() {
        this.setState({ films: [] });
        fetch(urlLastFilm)
            .then(response => response.json())
            .then(films => {
                films.results.forEach(data => {
                    if (data.backdrop_path === null) {
                        let film = {
                            title: data.title,
                            photo: `${urlPhoto}${data.poster_path}`,
                        }
                        console.log(data);
                        this.setState({ films: this.state.films.concat([film]) })
                    } else {
                        let film = {
                            title: data.title,
                            photo: `${urlPhoto}${data.backdrop_path}`,
                        }

                        console.log(data);
                        this.setState({ films: this.state.films.concat([film]) })
                    }
                });
            })
    }
    render() {
        console.log(this.state.films.length);
        const { films: films, loading, error } = this.state;
        if (this.state.films.length > 0) {
            return (
                <div>
                    <h1>PELÍCULAS POPULARES</h1>
                    {loading && <p>Cargando información...</p>}
                    {this.state.films.map((film, index) =>
                        <Movie key={index} film={film} />
                    )
                    }
                    {!loading && !error && !films && <h2>No hay información disponible</h2>}
                    {!loading && error && <h2>Ocurrio un error</h2>}
                </div>

            );
        }
        return (
            <p>Cargando información...</p>
        )
    }
}
