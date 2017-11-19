import React, { Component } from 'react';
import '../index.css';

class SpeciesInfo extends Component{
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
        const infoSpecies = this.props.speciesInfo;
        if(!this.state.expanded){
            return<button className="button"
                          onClick={this.open}
            >Show info</button>
        }

        return(
            <div className = "details">
                <button  className="button" onClick={this.close}>Hide Info</button>
                <ul>
                    <h3>Name: {infoSpecies.name}</h3>
                    <h3>Language: {infoSpecies.language}</h3>
                    <h3>Classification: {infoSpecies.classification}</h3>



                </ul>
            </div>
        )

    }
}

export default SpeciesInfo;