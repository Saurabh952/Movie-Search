import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
          <div className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700 cursor-pointer">
            <img 
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} 
              alt={movie.Title} 
              className="w-full h-60 object-cover rounded" 
            />
            <h3 className="text-lg mt-2">{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
