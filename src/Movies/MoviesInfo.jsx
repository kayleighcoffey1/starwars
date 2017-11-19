import React, { Component } from 'react';
import '../index.css';

class MoviesInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            expand: false,
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    //for opening more information about each movie
    open(){
        this.setState({expanded: !this.state.expanded})
    }
    close(){
        this.setState({expanded: !this.state.expanded})
    }
    render(){
        const infoMov = this.props.moviesInfo;
        if(!this.state.expanded){
            return<button className="button"
                          onClick={this.open}
            >Show info</button>
        }

        return(
            <div className = "details">
                <button  class="button" onClick={this.close}>Hide Info</button>
                <ul>
                    <h3>No: {infoMov.episode_id}</h3>
                    <h3>Director: {infoMov.director}</h3>
                    <h3>Opening Crawl: {infoMov.opening_crawl}</h3>
                    <h3>Release Date: {infoMov.release_date}</h3>


                </ul>
            </div>
        )

    }
}

export default MoviesInfo;