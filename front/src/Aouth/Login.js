import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Validation from '../valid/Loginvalid';
import axios from 'axios';
import '../styles/main.css'

function Login() {
  const [loginData, setLoginData] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const emailValid = email_pattern.test(values.email)
    const passValid = password_pattern.test(values.password)
    console.log(emailValid,passValid)
    if (!values.email||!values.password){
      return alert("Enter all the data");
    }
    if (!emailValid){
      return alert("Invalid Email")
    }
    if (!passValid){
      return alert("Invalid Password")
    }
    if (emailValid && passValid) {
      axios.post('http://localhost:8080/login', values)
        .then((res) => {
            console.log(res.data,"Recieved Message")
          if (res.data.data) {
            console.log(res.data)
            localStorage.setItem("loginData", res.data.data.email);
            localStorage.setItem("auth", res.data.data.isadmin);
            const auth = res.data.data.isadmin;
            setLoginData(res.data.data.email)
            console.log(loginData,auth)
              navigate('/');
          } else {
            alert('No record exists');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login-box">
      {/* <h6><a href='/'>User </a><b>  /</b><a href='/login'>admin</a></h6> */}
     
    <h6>Sign in to cattle.io</h6>
    <h2>Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="login-email">Email</label>
      <input
        className="input_signup"
        type="email"
        id="login-email"
        name="email"
        onChange={handleInput}
        required />

      <label htmlFor="login-password">Password</label>
      <input
        className="input_signup"
        type="password"
        id="login-password"
        name="password"
        onChange={handleInput}
        required />
      <button type="submit" className="home_button">
        Sign in
      </button>
      <div className="forgot-password">
        <a href='/signup'>Create account</a>
      </div>
    </form>
  </div>
  );
}

export default Login;