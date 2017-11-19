import React, { Component } from 'react';
import SpeciesInfo from './SpeciesInfo'
import '../App.css';
import '../index.css'


class SpeciesList extends Component{

    render() {
        const species = this.props.species;

        return (
            <div className="">
                {
                    species.map((p) => {
                        console.log(p);
                        return (
                            <div key={p.url}>
                                <h1 className="species-name">{p.name}</h1>
                                <SpeciesInfo speciesInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


}
export default SpeciesList;