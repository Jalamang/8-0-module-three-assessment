import React, { Component } from "react";

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      Movies: [],
      movie: null,
    };
  }
  fetchMovies = () =>{
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      this.setState({
        movies: data
      });
    });
  }

  componentDidMount () {
    this.fetchMovies()
    }

  
  render() {
    return <div></div>;
  }
}

export default Movies;
