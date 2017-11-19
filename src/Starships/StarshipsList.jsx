import React, { Component } from 'react';
import StarshipsInfo from './StarshipsInfo'
import '../App.css';
import '../index.css'


class StarshipsList extends Component{

    render() {
        const starships = this.props.starships;

        return (
            <div className="">
                {
                    starships.map((p) => {
                        console.log(p);
                        return (
                            <div key={p.url}>
                                <h1 className="starship-name">{p.name}</h1>
                                <StarshipsInfo starshipsInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


}
export default StarshipsList;