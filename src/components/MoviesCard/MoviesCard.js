import React from "react";
import { useLocation } from "react-router";
import "./MoviesCard.css";
import PropTypes from "prop-types";

function MoviesCard(props) {
  const { duration, cover, title, isFavourite, uniqueId } = props;

  const [saved, setSaved] = React.useState(isFavourite);
  const { pathname } = useLocation();

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
          onClick={handleMovieClick}
          id={inputId}
          className={`movies-card__button
          ${saved && pathname === "/movies" && "movies-card__button_active"}
          ${
            saved &&
            (pathname === "/movies"
              ? "movies-card__button_active"
              : "movies-card__button_remove")
          }`}
        ></button>
      </div>
    </article>
  );
}

export default MoviesCard;
