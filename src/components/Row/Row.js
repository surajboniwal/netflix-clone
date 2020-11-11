import React, { Component } from 'react'
import axios from '../../axios'
import './Row.css'
import Movie from '../Movie/Movie'

class Row extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
        this.fetch = this.fetch.bind(this)
        this.fetch();
    }

    async fetch() {
        const response = await axios.get(this.props.endPoint)
        this.setState({
            movies: response.data.results
        })
    }

    render() {
        const { movies } = this.state
        return (
            <div className='row'>
                <h3>{this.props.title}</h3>
                <div className='movieList'>
                    {
                        movies.map(movie => <Movie isLargeRow={this.props.isLargeRow} movie={movie} />)
                    }
                </div>
            </div>
        )
    }
}

export default Row
