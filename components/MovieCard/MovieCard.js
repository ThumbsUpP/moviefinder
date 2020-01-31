import './MovieCard.scss';
import React from 'react';
import { head } from 'lodash/fp';
import cn from 'classnames';

const baseUrl = 'http://image.tmdb.org/t/p/w185/';

const MovieCard = ({
  poster_path,
  original_title,
  release_date,
  className,
}) => {
  const date = release_date.match(/\d{4}/);
  return (
    <div className={cn('movie-card', { [className]: !!className })}>
      <img src={`${baseUrl}${poster_path}`} alt={original_title} />
      <p className="movie-card__title">{original_title}</p>
      <p className="movie-card__date">{head(date)}</p>
    </div>
  );
};

export default MovieCard;
