import React from "react";
import LoginBlock from "../components/loginBlock";

function Login() {

  document.querySelectorAll(".text-input").forEach((elemnt) => {
    elemnt.addEventListener("blur", (e) => {
      if (e.target.value !== "") {
        e.target.parentNode.classList.add("focus");
      } else {
        e.target.parentNode.classList.remove("focus");
      }
    });
  });

  return (
    <LoginBlock />
  )
};

export default Login;