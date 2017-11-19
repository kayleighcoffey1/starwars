import React, { Component } from 'react';
import '../index.css';

class StarshipsInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            expand: false,
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    //for opening more information about each starship
    open(){
        this.setState({expanded: !this.state.expanded})
    }
    close(){
        this.setState({expanded: !this.state.expanded})
    }
    render(){
        const infoStar = this.props.starshipsInfo;
        if(!this.state.expanded){
            return<button className="button"
                          onClick={this.open}
            >Show info</button>
        }

        return(
            <div className = "starships-details">
                <button  className="button" onClick={this.close}>Hide Info</button>
                <ul>
                    <h3>Name: {infoStar.name}</h3>
                    <h3>Model: {infoStar.model}</h3>
                    <h3>Class: {infoStar.starship_class}</h3>
                    <h3>Manufacturer: {infoStar.manufacturer}</h3>


                </ul>
            </div>
        )

    }
}

export default StarshipsInfo;