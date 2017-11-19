import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import axios from 'axios';
import List from './Characters/List';
import MoviesList from "./Movies/MovieList";
import StarshipsList from "./Starships/StarshipsList";
import VehiclesList from "./Vehicles/VehiclesList";
import SpeciesList from "./Species/SpeciesList";
import PlanetsList from "./Planets/PlanetsList";



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            people: [],
            movies: [],
            starships: [],
            vehicles: [],
            species: [],
            planets: [],
            query: props.query,
        };

        this.getPeople = this.getPeople.bind(this);
    }

    getPeople(){
        return axios.get("https://swapi.co/api/people")
            .then((response) => {
                let data = response.data.results.map(obj => obj);
                    console.log(data);
                this.setState( {people: response.data.results})
            } )

    }

    getMovies(){
        return axios.get("https://swapi.co/api/films")
            .then((response) => {
                let data = response.data.results.map(obj => obj);
                console.log(data);
                this.setState( {movies: response.data.results})
            } )

    }

    getStarships(){
        return axios.get("https://swapi.co/api/starships")
            .then((response) => {
                let data = response.data.results.map(obj => obj);
                console.log(data);
                this.setState( {starships: response.data.results})
            } )

    }


    getVehicles(){
        return axios.get("https://swapi.co/api/vehicles")
            .then((response) => {
                let data = response.data.results.map(obj => obj);
                console.log(data);
                this.setState( {vehicles: response.data.results})
            } )

    }

    getSpecies(){
        return axios.get("https://swapi.co/api/species")
            .then((response) => {
                let data = response.data.results.map(obj => obj);
                console.log(data);
                this.setState( {species: response.data.results})
            } )

    }

    getPlanets(){
        return axios.get("https://swapi.co/api/planets")
            .then((response) => {
                let data = response.data.results.map(obj => obj);
                console.log(data);
                this.setState( {planets: response.data.results})
            } )

    }



    componentDidMount()
    {
        this.getPeople();
        this.getMovies();
        this.getStarships();
        this.getVehicles();
        this.getSpecies();
        this.getPlanets();
    }

    filter(e)
    {
        this.setState({filter: e.target.value})
    }

  render() {
        let {people} = this.state;
        let {movies} = this.state;//destructoring
        let {starships} =  this.state;
        let {vehicles} = this.state;
        let {species} = this.state;
        let {planets} = this.state;

    if(this.state.filter){
       people = people.filter( item =>
        item.name.toLowerCase()
            .includes(this.state.filter.toLowerCase()));

        movies = movies.filter( item =>
            item.title.toLowerCase()
                .includes(this.state.filter.toLowerCase()));

        starships = starships.filter( item =>
            item.name.toLowerCase()
                .includes(this.state.filter.toLowerCase()));

        vehicles = vehicles.filter( item =>
            item.name.toLowerCase()
                .includes(this.state.filter.toLowerCase()));

        species = species.filter( item =>
            item.name.toLowerCase()
                .includes(this.state.filter.toLowerCase()));

        planets = planets.filter( item =>
            item.name.toLowerCase()
                .includes(this.state.filter.toLowerCase()));
    }

    return (

      <div className="App">
        <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className = "search">
            <input type={"text"} onChange={this.filter.bind(this)}/>

        </div>
          <div class="column">
              <List className="people-list" people={people} />
          </div>
          <div class="column">
            <MoviesList className= "movies-list" movies={movies} />
          </div>
          <div class="column">
            <StarshipsList className= "starships-list" starships={starships} />
          </div>
          <div class="column">
            <VehiclesList className= "vehicles-list" vehicles={vehicles} />
          </div>
          <div class="column">
            <SpeciesList className= "species-list" species={species} />
          </div>
          <div class="column">
            <PlanetsList className= "planets-list" planets={planets}/>
          </div>



          </div>

    );
  }
}

export default App;
