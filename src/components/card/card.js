import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  return (
    <>
      {
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards_img"
              alt=""
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />
            <div className="cards_overlay">
              <div className="card_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card_runtime">
                {movie ? movie.release_date : ""}
                <span className="card_rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      }
    </>
  );
};

export default Cards;
