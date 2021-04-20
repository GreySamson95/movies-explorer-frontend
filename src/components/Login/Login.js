/* eslint-disable */
import React from 'react';
import '../SinglePageForm/SinglePageForm.css';
import SinglePageForm from '../SinglePageForm/SinglePageForm';

function Login() {
  return (
    <SinglePageForm
      header="Рады видеть!"
      buttonText="Войти"
      hintText="Ещё не зарегистрированы?"
      hintLinkText="Регистрация"
      hintLinkUrl="/signup"
    >
      <label htmlFor="email" className="spf__label">E-mail</label>
      <input
        type="email"
        className="spf__input"
        placeholder="vitaly@email.com"
        id="email"
      />

      <label htmlFor="password" className="spf__label">Пароль</label>
      <input
        type="password"
        className="spf__input"
        placeholder="vitaliy@yandex.com"
        id="password"
        placeholder=""
      />

    </SinglePageForm>
  );
}

export default Login;
