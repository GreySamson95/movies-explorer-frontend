/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';

function MoviesCard(props) {
  const {
    duration, cover, title, isFavourite, uniqueId,
  } = props;

  const [saved, setSaved] = React.useState(isFavourite);

  MoviesCard.propTypes = {
    uniqueId: PropTypes.string.isRequired, // Уникальный ID для добавления/удаления из сохранённых
    duration: PropTypes.number.isRequired, // Длительность в минутах
    cover: PropTypes.string.isRequired, // Изображение карточки
    title: PropTypes.string.isRequired, // Название фильма
    isFavourite: PropTypes.bool.isRequired, // Добавлено в любимые? Bool
  };

  function calcDuration(movieDurationInMinutes) {
    const hours = Math.floor(movieDurationInMinutes / 60);
    const minutes = Math.floor(movieDurationInMinutes - hours * 60);
    return `${hours}ч ${minutes}м`;
  }

  function handleMovieClick() {
    setSaved(!saved);
  }

  const inputId = `favourite${uniqueId}`;

  return (
    <article className="movies-card">
      <label htmlFor={inputId} className="movies-card__cover">
        <img src={cover} className="movies-card__cover-image" alt={title} />
      </label>
      <div className="movies-card__image-description">
        <span className="movies-card__title">{title}</span>
        <span className="movies-card__duration">{calcDuration(duration)}</span>
        <button
          type="button"
          onClick={handleMovieClick}
          className={`movies-card__button-like ${saved && 'movies-card__button-like-checked'}`}
          id={inputId}
        />
      </div>
    </article>
  );
}

export default MoviesCard;
