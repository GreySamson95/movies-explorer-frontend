/* eslint-disable */
import React from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';

function MoviesCard(props) {
  const {
    duration, cover, title, isFavourite, uniqueId,
  } = props;

  const [saved, setSaved] = React.useState(isFavourite);

  MoviesCard.propTypes = {
    duration: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
  };

  function calcDuration(movieDurationInMinutes) {
    const hours = Math.floor(movieDurationInMinutes / 60);
    const minutes = Math.floor(movieDurationInMinutes - hours * 60);
    return `${hours}ч ${minutes}м`
  }

  function handleMovieClick(e) {
    setSaved(!saved);
  }

  const inputId = `favourite${uniqueId}`

  return (
    <article className="movies-card">
      <label for={inputId} className="movies-card__cover">
        <img src={cover} className="movies-card__cover-image" />
      </label>
      <div className="movies-card__image-description">
        <span className="movies-card__title">{title}</span>
        <span className="movies-card__duration">{calcDuration(duration)}</span>
        <button
          type="button" onClick={handleMovieClick}
          className={`movies-card__button-like ${saved && 'movies-card__button-like-checked'}`}
          id={inputId}
        />
      </div>
    </article>
  );
}

export default MoviesCard;