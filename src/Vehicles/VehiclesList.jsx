import React, { Component } from 'react';
import VehiclesInfo from './VehiclesInfo'
import '../App.css';
import '../index.css'


class VehiclesList extends Component{

    render() {
        const vehicles = this.props.vehicles;

        return (
            <div className="">
                {
                    vehicles.map((p) => {
                        console.log(p);
                        return (
                            <div key={p.url}>
                                <h1 className="vehicles-name">{p.name}</h1>
                                <VehiclesInfo vehiclesInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


}
export default VehiclesList;