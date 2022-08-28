import React from "react";
import RegisterBlock from "../components/registerBlock";

function Register() {
  const handleSubmit = event => {
    event.preventDefault();
    window.location.href = "/login";
  }

  return (
    <RegisterBlock handlesubmit={handleSubmit}/>
  )
};

export default Register;