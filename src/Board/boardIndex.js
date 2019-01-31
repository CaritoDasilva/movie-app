import React, { Component } from 'react';


const url = 'https://api.themoviedb.org/3/movie/550?api_key=10c16bf05c5bd1c555be0b1e8188a1f6';


export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            films: [],
            error: false
        };

    }

    async componentDidMount() {
        try {
            this.setState({ loading: true, error: false });
            const response = await fetch(url);
            const responseJson = await response.json();
            const films = responseJson;
            this.setState({ films, loading: false, error: false });
            console.log(films);
        } catch (e) {
            this.setState({ loading: false, error: true })
        }

    }
    render() {
        const { films, loading, error } = this.state;
        return (

            <div>
                <h1>{films.title}</h1>
            </div>
        );
    }

}