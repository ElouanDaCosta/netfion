import React from "react";
import { Link } from 'react-router-dom'

function RegisterBlock () {
  return (
    <div className="register-block">
      <div className="register-block__top__container">
        <img src="" alt="netfion-logo" />
        <h1>Register</h1>
      </div>
      <div className="register-block__form__container">
        <form >
          <div className="register-block__form__container__input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="register-block__form__container__input">
            <input type="text" placeholder="Email" />
          </div>
          <div className="register-block__form__container__input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="register-block__form__container__input">
            <input type="password" placeholder="Password confirmation" />
          </div>
        </form>
        <button className="register-block__form__container__button">register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default RegisterBlock;