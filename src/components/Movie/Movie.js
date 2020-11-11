import React from 'react'
import './Movie.css'

function Movie(props) {
    var poster_path = `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`
    return (
        <div >
            <img className={`moviePoster ${props.isLargeRow && "movieLargePoster"}`} src={poster_path}></img>
        </div>
    )
}

export default Movie