import React, { Component } from 'react'
import { Icon, Button } from 'react-materialize';
import { Link } from 'react-router-dom'
/*global firebase*/
// eslint-disable-next-line no-unused-vars
import firestore from "../Firebase/firestore";
import firebase from 'firebase';


export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            photo: ''


        };
        this.addFavorite = this.addFavorite.bind(this);
    }

    updateInput = e => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addFavorite = (e, name) => {
        console.log(Object.values(e.currentTarget[0].form[0]));
        e.preventDefault();
        this.setState({
            name: name
        });
        console.log(this.state);
        const db = firebase.firestore();
        db.settings({
        });
        const userRef = db.collection('favorites').add({
            name: this.state.name,
            description: this.state.photo
        });
        this.setState({
            name: '',
            photo: ''
        });
        console.log(this.state);
    };

    render() {
        let film = this.props.film;

        let index = this.props.index;
        return (
            <div className="film">
                <form onSubmit={this.addFavorite.bind(film.title)}>
                    <h1
                        id={film.title}
                    >{film.title}</h1>
                    <Link to={`/pelicula/${film.id} `} query={`${film.description}`}>
                        <img src={film.photo} alt="{film.description}" value="photo"
                        />
                    </Link>
                    <Button type="submit">
                        <Icon small >favorite_border</Icon></Button>
                </form>
            </div >
        )
    }
}


