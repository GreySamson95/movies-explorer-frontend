import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function SavedMovies() {
  return (
    <>
      <ErrorPopup />
      <Header
        loggedIn="true"
      />
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default SavedMovies;
