import React, { Component } from 'react';
import '../index.css';

class VehiclesInfo extends Component{
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
        const infoVehicle = this.props.vehiclesInfo;
        if(!this.state.expanded){
            return<button className="button"
                          onClick={this.open}
            >Show info</button>
        }

        return(
            <div className = "vehicles-details">
                <button  className="button" onClick={this.close}>Hide Info</button>
                <ul>
                    <h3>Name: {infoVehicle.name}</h3>
                    <h3>Model: {infoVehicle.model}</h3>
                    <h3>Class: {infoVehicle.passengers}</h3>
                    <h3>Manufacturer: {infoVehicle.manufacturer}</h3>


                </ul>
            </div>
        )

    }
}

export default VehiclesInfo;