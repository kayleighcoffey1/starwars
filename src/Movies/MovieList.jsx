import React, { Component } from 'react';
import MoviesInfo from '../Movies/MoviesInfo';
import '../App.css';
import '../index.css';


class MoviesList extends Component{

    render() {
        const movies = this.props.movies;

        return (
            <div className="">
                {
                    movies.map((p) => {
                        console.log(p);
                        return (
                            <div key={p.url}>
                                <h1 className="movie-name">{p.title}</h1>
                                <MoviesInfo moviesInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


}
export default MoviesList;