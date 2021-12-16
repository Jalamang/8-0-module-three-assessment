import React from "react";

function MovieCard({ movie }) {
    console.log(movie)
  return (
    <>
      <div>
        <h2>Title: {movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Description: {movie.description}</p>
      </div>
    </>
  );
}

export default MovieCard;
