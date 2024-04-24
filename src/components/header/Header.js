import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c16fdbdce4772e21b588692b7d5fa362&query=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link
        to="/"
        className="navbar-brand"
        style={{ textDecoration: "underline solid red" }}
      >
        <span style={{ color: "red" }}>M</span>OVIE-
        <span style={{ color: "red" }}>M</span>ANIA
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/movies/popular" className="nav-link">
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies/top_rated" className="nav-link">
              Top_Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies/upcoming" className="nav-link">
              Upcoming
            </Link>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            className="btn my-2 my-sm-0"
            type="button"
            onClick={handleSearchSubmit}
          >
            Search
          </button>
        </div>
      </div>
      <div className="search-results">
        {searchResults.map((movie) => (
          <div key={movie.id} className="movie">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            )}
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
