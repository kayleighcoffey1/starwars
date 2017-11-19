import React, { Component } from 'react';
import '../index.css';

class PlanetInfo extends Component{
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
        const infoPlanet = this.props.planetInfo;
        if(!this.state.expanded){
            return<button className="button"
                          onClick={this.open}
            >Show info</button>
        }

        return(
            <div className = "details">
                <button  className="button" onClick={this.close}>Hide Info</button>
                <ul>
                    <h3>Name: {infoPlanet.name}</h3>
                    <h3>Climate: {infoPlanet.climate}</h3>
                    <h3>Population: {infoPlanet.population}</h3>
                    <h3>Terrain: {infoPlanet.terrain}</h3>


                </ul>
            </div>
        )

    }
}

export default PlanetInfo;