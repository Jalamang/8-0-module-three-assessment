import React from "react";
import MovieCard from "./MovieCard"
import "./Movies.css"

export class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: '',
    };
  }

  fetchMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data,
        });
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  handleChange = (event) => {
    this.setState({
      movie: this.state.movie[event.target.value],
    });
  };

  render() {
    const { movies, movie } = this.state;
    console.log(movie);
    const movieData = movies.map((eachMovie, i) => {
      return (
        <option key={i} value={eachMovie.id}>
          {eachMovie.title}
        </option>
      );
    });

    return (
  
      <div className="movies">
        <div>
          <select >
          <br />
            <option>Select a Movie</option>
            {""}<br /><br />
            {movieData}
          </select>
          {/* <MovieCard movie={movie}/> */}
        </div>
      </div>
    );
  }
}

export default Movies;
