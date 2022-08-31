import React from "react";
import RegisterBlock from "../components/registerBlock";

function Register() {
  const handleSubmit = event => {
    event.preventDefault();
    window.location.href = "/login";
  }

  const labelAnimation = (e) => {
    if (e.target.value !== "") {
      e.target.nextElementSibling.classList.add("focus");
    } else {
      e.target.nextElementSibling.classList.remove("focus");
    }
  }

  return (
    <RegisterBlock 
      handlesubmit={handleSubmit}
      labelAnimation={labelAnimation} />
  )
};

export default Register;