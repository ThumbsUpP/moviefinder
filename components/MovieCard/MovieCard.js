import './MovieCard.scss';
import React from 'react';
import { head } from 'lodash/fp';

const baseUrl = 'http://image.tmdb.org/t/p/w185/';

const MovieCard = ({ poster_path, original_title, release_date }) => {
  const date = release_date.match(/\d{4}/);
  console.log(date);
  return (
    <div className="movie-card">
      <img src={`${baseUrl}${poster_path}`} alt={original_title} />
      <p className="movie-card__title">{original_title}</p>
      <p className="movie-card__date">{head(date)}</p>
    </div>
  );
};

export default MovieCard;
