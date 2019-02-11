import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Board from '../Board/boardIndex';
import Favoritos from '../Favoritos/indexFavoritos';
import LastMovies from '../BoardLastMovies/indexBoardLastMovies';
import Error from '../Error/indexError'
import SingleMovie from '../SingleMovie/indexSingleMovie';

export default class Router extends Component {
    render() {
        return (




            <Switch>
                <Route exact path="/home" component={Board} />
                <Route exact path="/favoritos" component={Favoritos} />
                <Route exact path="/estrenos" component={LastMovies} />
                <Route exact path={`/pelicula/:filmTitle`} component={SingleMovie} />

                <Route component={Error} />
            </Switch>

        )
    }
}
