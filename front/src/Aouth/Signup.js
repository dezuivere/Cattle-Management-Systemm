import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "../valid/signupValid";
import axios from "axios";
import "../styles/main.css";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (!errors.name && !errors.email && !errors.password) {
      axios
        .post("http://localhost:8080/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="register-box">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="register-username">Username</label>
        <input
          className="input_signup"
          type="text"
          id="register-username"
          name="name"
          onChange={handleInput}
          required
        />
        {errors.name && <span className="text-danger">{errors.name}</span>}
        <label htmlFor="register-email">Email</label>
        <input
          className="input_signup"
          type="email"
          id="register-email"
          name="email"
          onChange={handleInput}
          required
        />
        {errors.email && <span className="text-danger">{errors.email}</span>}
        <label htmlFor="register-password">Password</label>
        <input
          className="input_signup"
          type="password"
          id="register-password"
          name="password"
          onChange={handleInput}
          required
        />
        {errors.password && (
          <span className="text-danger">{errors.password}</span>
        )}
        <button type="submit" className="home_button">
          Register
        </button>
        <h6>
          <a href="/">Login</a>
        </h6>
      </form>
    </div>
  );
}

export default Signup;
