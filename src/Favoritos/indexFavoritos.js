`/*global firebase*/`
import React from 'react';
import firestore from "./firestore";


class Favoritos extends React.Component {
    constructor() {
        super();
        this.state = {
            npmbrePelicula: '',
            description: ''
        };
        this.addFavorite = this.addFavorite.bind(this);
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addFavorite = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection('favoritos').add({
            npmbrePelicula: this.state.npmbrePelicula,
            description: this.state.description
        });
        this.setState({
            npmbrePelicula: '',
            description: ''
        });
    };
    render() {
        return (
            <form onSubmit={this.addUser}>
                <input
                    type="text"
                    name="nombrePelicula"
                    placeholder="Nombre Película"
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Descripción"
                    onChange={this.updateInput}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default Favoritos;
