import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/netfion_logo.webp';

function RegisterBlock () {
  return (
    <div className="login-register-block">
      <div className="login-register-block__top_container">
        <img src={logo} alt="netfion-logo" />
        <h1>Register</h1>
      </div>
      <div className="login-register-block__form_container">
        <form className="login-register-block__form_container__form">
          <div className="login-register-block__form_container__form__input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="login-register-block__form_container__form__input">
            <input type="text" placeholder="Email" />
          </div>
          <div className="login-register-block__form_container__form__input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="login-register-block__form_container__form__input">
            <input type="password" placeholder="Confirmation" />
          </div>
        </form>
        <button className="login-register-block__form_container__button">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default RegisterBlock;