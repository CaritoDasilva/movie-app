import React, { Component } from 'react';
import Movie from '../Movie/movieIndex';

const url = 'https://api.themoviedb.org/3/discover/movie?api_key=10c16bf05c5bd1c555be0b1e8188a1f6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const urlPhoto = 'https://image.tmdb.org/t/p/w500';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            films: [],
            error: false
        };

    }

    componentDidMount() {
        fetch(url)
            .then(response => response.json())
            .then(films => {
                films.results.forEach(data => {
                    let film = {
                        title: data.title,
                        photo: `${urlPhoto}${data.backdrop_path}`,
                    }
                    this.setState({ films: this.state.films.concat([film]) })
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
                    {this.state.films.map(film =>
                        <div>   <h1>{film.title}</h1>
                            <img src={film.photo} />
                        </div>
                    )
                    }



                    {!loading && !error && !films && <h2>No hay información disponible</h2>}
                    {!loading && error && <h2>Ocurrio un error</h2>}
                </div>

            );
        }
        return (
            <p>Cargando...</p>
        )



    }

}