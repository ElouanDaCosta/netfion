import React from "react";
import LoginBlock from "../components/loginBlock";

function Login() {

  const labelAnimation = (e) => {
    if (e.target.value !== "") {
      e.target.nextElementSibling.classList.add("focus");
    } else {
      e.target.nextElementSibling.classList.remove("focus");
    }
  }

  return (
    <LoginBlock 
      labelAnimation={labelAnimation} />
  )
};

export default Login;