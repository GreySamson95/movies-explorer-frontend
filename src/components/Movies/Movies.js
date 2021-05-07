import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
  const [showShortMovies, setShowShortMovies] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchKeyWords, setSearchKeyWords] = React.useState('');

  const onCheckBoxToggle = (isCheckBoxChecked) => {
    setShowShortMovies(isCheckBoxChecked);
  };

  const getMoviesFromLocalStorage = () => JSON.parse(localStorage.getItem('movies'));

  const onFormSubmit = (userInput) => {
    setLoading(true); // Включили прелоудер
    if (getMoviesFromLocalStorage()) { // Есть ли фильмы в localStorage?
      setMovies(getMoviesFromLocalStorage());// Взяли фильмы из localStorage и установили в стейт
      setLoading(false); // Выключили лоудер
    } else {
      moviesApi.getFilms() // Отправили запрос
        .then((serverMovies) => { // Получили ответ
          localStorage.setItem('movies', JSON.stringify(serverMovies)); // Сохранили в localStorage
          setMovies(serverMovies); // Взяли фильмы с сервера и установили в стейт
          setLoading(false); // Выключили лоудер
        });
    }
    setSearchKeyWords(userInput); // Ключевые слова для фильтрации
  };

  return (
    <>
      <Header loggedIn />
      <SearchForm
        onCheckBoxToggle={onCheckBoxToggle}
        onFormSubmit={onFormSubmit}
      />
      <MoviesCardList
        movies={movies}
        showShortMovies={showShortMovies}
        searchKey={searchKeyWords}
        isLoading={loading}
      />
    </>
  );
}

export default Movies;
