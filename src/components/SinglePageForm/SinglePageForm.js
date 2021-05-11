/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SinglePageForm.css';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

function SinglePageForm(props) {
  const {
    header,
    buttonText,
    hintText,
    hintLinkText,
    hintLinkUrl,
    children,
    onSubmit,
    inputData,
    isFormValid
  } = props;
  SinglePageForm.propTypes = {
    header: PropTypes.string.isRequired, // Заголовок формы
    buttonText: PropTypes.string.isRequired, // Текст кнопка действия
    hintText: PropTypes.string.isRequired, // Текст подсказки (совета залогиниться или регистрации)
    hintLinkText: PropTypes.string.isRequired, // Текст ссылки в подсказке (вход / регистрация)
    children: PropTypes.element.isRequired, // Дочерние импуты формы
    hintLinkUrl: PropTypes.string.isRequired, // Адрес ссылки в подсказке
    onSubmit: PropTypes.func.isRequired,
  };

  /* Симуляция нажатия на отправку формы для проверки статус бара */
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(inputData);
  }

  return (
    <>
      <div className="spf">
        <Link className="spf__logo-link" to="/">
          <img className="spf__logo" src={logo} alt="Логотип Movies Explorer" />
        </Link>
        <h1 className="spf__header">{header}</h1>
        <form className="spf__form" id="spf" onSubmit={(e) => handleFormSubmit(e)} noValidate>
          {children}
        </form>
        <button form="spf" className="spf__button" type="submit" disabled={isFormValid == 0}>
          {buttonText}
        </button>
        <p className="spf__hint">
          {hintText}
          {' '}
          <Link to={hintLinkUrl} className="spf__hint-link">
            {hintLinkText}
          </Link>
        </p>
      </div>
    </>
  );
}

export default SinglePageForm;
