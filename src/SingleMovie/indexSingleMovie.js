import React, { Component } from 'react'

const urlMovie = 'https://api.themoviedb.org/3/movie/?api_key=<<api_key>>&language=en-US'
export default class SingleMovie extends Component {
    render() {
        console.log('holis');

        return (
            <div>
                <h1>holis soy una peli</h1>
                {console.log('holis')}
            </div>
        )
    }
}
