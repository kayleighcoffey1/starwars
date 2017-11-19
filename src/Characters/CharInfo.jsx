import React, { Component } from 'react';
import '../index.css';

class CharInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            expand: false,
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    //for opening more information about character
    open(){
        this.setState({expanded: !this.state.expanded})
    }
    close(){
        this.setState({expanded: !this.state.expanded})
    }
    render(){
        const info = this.props.charInfo;
        if(!this.state.expanded){
            return<button className="button"
                        onClick={this.open}
                        >Show info</button>
        }

        return(
            <div className = "details">
                <button  class="button" onClick={this.close}>Hide Info</button>

                <ul>

                    <h3>Height: {info.height}</h3>
                    <h3>Weight: {info.mass}</h3>
                    <h3>Hair Colour: {info.hair_color}</h3>
                    <h3>Skin Colour: {info.skin_color}</h3>
                    <h3>Eye Colour: {info.eye_color}</h3>
                    <h3>Birthdate: {info.birth_year}</h3>
                    <h3>Gender: {info.gender}</h3>

                </ul>
            </div>
        )

    }
}

export default CharInfo;