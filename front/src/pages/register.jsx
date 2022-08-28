import React from "react";
import RegisterBlock from "../components/registerBlock";

function Register() {
  const handleSubmit = event => {
    event.preventDefault();
    window.location.href = "/login";
  }

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
    <RegisterBlock handlesubmit={handleSubmit}/>
  )
};

export default Register;