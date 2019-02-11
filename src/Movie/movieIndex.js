import React, { Component } from 'react'
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom'



export default class Movie extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let film = this.props.film;
        let index = this.props.index;
        return (
            <div className="film">
                <h1>{film.title}</h1>
                {console.log(index)}
                <Link to={`/pelicula/${film.title}`}>
                    <img src={film.photo} alt="{film.description}" />
                </Link>
                <Icon small onClick={this.addFavorite}>favorite_border</Icon>
            </div >
        )
    }
}


