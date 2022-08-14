import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/netfion_logo.webp';

function LoginBlock () {
  return (
    <div className="login-block">
      <div className="login-block__top_container">
        <img src={logo} alt="netfion-logo" />
        <h1>Login</h1>
      </div>
      <div className="login-block__form_container">
        <form className="login-block__form_container__form">
          <div className="login-block__form_container__form__input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="login-block__form_container__form__input">
            <input type="password" placeholder="Password" />
            <Link to="/forgot-password">Forgot ?</Link>
          </div>
        </form>
        <button className="login-block__form__container__button">Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default LoginBlock;