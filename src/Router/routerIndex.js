import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Board from '../Board/boardIndex';
import Favoritos from '../Favoritos/indexFavoritos';

export default class Router extends Component {
    render() {
        return (




            <Switch>
                <Route exact path="/home" component={Board} />
                <Route exact path="/favoritos" component={Favoritos} />

            </Switch>

        )
    }
}
