/* eslint-disable */
import React from 'react';
import { useLocation } from 'react-router';
import './MoviesCard.css';
import PropTypes from 'prop-types';

function MoviesCard(props) {
  const {
    duration, cover, title, trailerLink, uniqueId, handleMovieLike, wholeMovie
  } = props;

  const [saved, setSaved] = React.useState(false);
  const { pathname } = useLocation();

  MoviesCard.propTypes = {
    uniqueId: PropTypes.number.isRequired, // Уникальный ID для добавления/удаления из сохранённых
    duration: PropTypes.number.isRequired, // Длительность в минутах
    cover: PropTypes.object.isRequired, // Изображение карточки
    title: PropTypes.string.isRequired, // Название фильма
    trailerLink: PropTypes.string.isRequired,
  };

  function calcDuration(movieDurationInMinutes) {
    const hours = Math.floor(movieDurationInMinutes / 60);
    const minutes = Math.floor(movieDurationInMinutes - hours * 60);
    return `${hours}ч ${minutes}м`;
  }

  function handleMovieClick() {
    setSaved(!saved);
    handleMovieLike(wholeMovie);
  }

  const inputId = `favourite${uniqueId}`;

  return (
    <article className="movies-card">
      <a href={trailerLink} target="_blank" className="movies-card__cover">
        <img src={cover} className="movies-card__cover-image" alt={title} />
      </a>
      <div className="movies-card__image-description">
        <span className="movies-card__title">{title}</span>
        <span className="movies-card__duration">{calcDuration(duration)}</span>
        <button
          onClick={handleMovieClick}
          id={inputId}
          className={`movies-card__button
          ${saved && pathname === '/movies' && 'movies-card__button_active'}
          ${
            saved
            && (pathname === '/movies'
              ? 'movies-card__button_active'
              : 'movies-card__button_remove')
          }`}
        />
      </div>
    </article>
  );
}

export default MoviesCard;
