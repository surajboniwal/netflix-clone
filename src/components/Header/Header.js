import React, { Component } from 'react'
import './Header.css'
import requests from './../../requests'
import axios from './../../axios'

var backdrop_path = `https://image.tmdb.org/t/p/original`

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
        this.fetchRandomMovie = this.fetchRandomMovie.bind(this)
        this.fetchRandomMovie();
    }

    async fetchRandomMovie() {
        const movies = await axios.get(requests.fetchNetflix)
        this.setState({
            movie: movies.data.results[Math.floor(Math.random() * (19 - 0)) + 0]
        })
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${backdrop_path}${this.state.movie.backdrop_path})` }} className='header' >
                <h2 className='headerTitle'>{this.state.movie.name}</h2>
                <div className='headerButtons'>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <div className='headerDescription'>{this.state.movie.overview?.substring(0, 150)}</div>
                <div className='headerBottom'></div>
            </div >
        )
    }
}

export default Header
