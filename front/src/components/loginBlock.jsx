import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/netfion_logo.webp';
const locker = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 9.761v-4.761c0-2.761-2.238-5-5-5-2.763 0-5 2.239-5 5v4.761c-1.827 1.466-3 3.714-3 6.239 0 4.418 3.582 8 8 8s8-3.582 8-8c0-2.525-1.173-4.773-3-6.239zm-8-4.761c0-1.654 1.346-3 3-3s3 1.346 3 3v3.587c-.927-.376-1.938-.587-3-.587s-2.073.211-3 .587v-3.587zm3 17c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm2-6c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"/></svg>
const user = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.032 0 5.5 2.467 5.5 5.5 0 1.458-.483 3.196-3.248 5.59 4.111 1.961 6.602 5.253 7.482 8.909h-19.486c.955-4.188 4.005-7.399 7.519-8.889-1.601-1.287-3.267-3.323-3.267-5.61 0-3.033 2.468-5.5 5.5-5.5zm0-2c-4.142 0-7.5 3.357-7.5 7.5 0 2.012.797 3.834 2.086 5.182-5.03 3.009-6.586 8.501-6.586 11.318h24c0-2.791-1.657-8.28-6.59-11.314 1.292-1.348 2.09-3.172 2.09-5.186 0-4.143-3.358-7.5-7.5-7.5z"/></svg> 

function LoginBlock () {
  return (
    <div className="login-register-block">
      <div className="login-register-block__top_container">
        <img src={logo} alt="netfion-logo" />
        <h1>Login</h1>
      </div>
      <div className="login-register-block__form_container">
        <form className="login-register-block__form_container__form">
          <div className="login-register-block__form_container__form__input">
            <span>{user}</span>
            <input type="text" placeholder="Username" />
          </div>
          <div className="login-register-block__form_container__form__input">
            <span>{locker}</span>
            <input type="password" placeholder="Password" />
            <Link id="forgot-link" to="/forgot-password">Forgot?</Link>
          </div>
        <button className="login-register-block__form_container__button">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default LoginBlock;