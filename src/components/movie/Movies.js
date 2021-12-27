import React from "react";
import MovieCard from "./MovieCard"
import "./Movies.css"

export class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      showCard: true,
      movies: [],
      movie: null,
    };
  }


  getMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data,
          
        });
      });
  }
  
  componentDidMount () {
    this.getMovies()
  }


  handleChange = (event) => {
    const {value } = event.target
    this.setState({
      movie: this.state.movies[value]
    });
  };
    render() {
    const { movies, movie, showCard } = this.state;

    const movieData = movies.map((eachMovie, i) => {
      return (
        <option key={i} value={i}>
          {eachMovie.title}
        </option>
      );
    });

   
    return (
      <div className='movies'>
      <div>
        <h1>Select a Movie</h1>
        <br />
        <select name='movie' onChange={this.handleChange}>
          <option></option>
          {movieData}
        </select>
        <br />
        {movie && <MovieCard movie={movie} showCard={showCard}/>}
      </div>
    </div>
    );
  }
}

export default Movies;
