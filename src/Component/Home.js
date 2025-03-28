import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../Component/SearchBar';
import MovieList from '../Component/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center py-4">Movie Search App</h1>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
