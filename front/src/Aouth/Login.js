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
  const [errors, setErrors] = useState({});
  


  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (errors.email === '' && errors.password === '') {
      axios.post('http://localhost:8080/login', values)
        .then((res) => {
            console.log(res.data)
          if (res.data === 'Success') {
            localStorage.setItem("loginData", values.email);
            localStorage.setItem("loginpass", values.password);
            localStorage.setItem('isAuthenticated', 'true');
            console.log(loginData)
            setLoginData(values.email)
            navigate('/home', { state: { loginData: values.email } });
          } else {
            alert('No record exists');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login-box">
      <h6><a href='/'>User </a><b>  /</b><a href='/login'>admin</a></h6>
     
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
         {errors.email && <span className='text-danger'>{errors.email}</span>}
      <label htmlFor="login-password">Password</label>
      <input
        className="input_signup"
        type="password"
        id="login-password"
        name="password"
        onChange={handleInput}
        required />
        {errors.password && <span className='text-danger'>{errors.password}</span>}
      <button type="submit" className="home_button">
        Sign in
      </button>
      <div className="forgot-password">
        <a href='/signup'>Create accout</a>
      </div>
    </form>
  </div>
  );
}

export default Login;