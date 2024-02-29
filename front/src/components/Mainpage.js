import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/main.css';

// import Signup from "./Signup";

const Homepage = () => {
  const [emaail, setEmaail] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [loginData, setLoginData] = useState('');

//   const handleData = async () => {
//     try {
//       const axiosPromise = axios.post("http://localhost:8080/getData", { email: loginData });
//       const response = await axiosPromise;
//       // console.log(response.data.updatedAt)
//       const date = new Date(response.data.data.updatedAt);
//       console.log(response.data.data.updatedAt,"space to sewe",date)
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (loginData) {
//       handleData();
//       const intervalId = setInterval(handleData, 5000);
//       // Cleanup function to clear the interval when component unmounts
//       return () => clearInterval(intervalId);
//     }
//     console.log(tankLevel);
//   });


  useEffect(() => {
    setLoginData(localStorage.getItem("loginData"))
  }, [loginData])

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/login", {
      email: emaail,
      password: passwordd
    })
    console.log(response.data.message);
    if (response.data.status === 200) {
      console.log(response.data.message)
      // toast.success();
      setEmaail("");
      setPasswordd("");
      localStorage.setItem("loginData", emaail);
      setLoginData(emaail)
    }
    else {
      console.log("error");
    }
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/signup", {
      email: email,
      password: password,
      username: username
    })
    console.log();
    if (response.data.status === 200) {
      console.log(response.data.message)
      setEmail("");
      setPassword("");
      setUsername("");
      handleLoginClick();
    }
    else {
      console.log("err")
    }
  };
  function handleLogout() {
    localStorage.clear();
    window.location.href = '/'
  }


  


  const handleCreateAccountClick = () => {
    setShowSignup(true);
  };
  const handleLoginClick = () => {
    setShowSignup(false);
  };
  return (
    <>

      

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="container-fluid about_1">
              <div className="about-us row">
                <h1>Water Watch</h1>
              </div>
              <div className="about_holder">
                <p className="about_text">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        finibus, nisi eu fermentum venenatis, augue elit mollis dolor, ut
        condimentum quam tellus ac lacus. Vivamus in felis sit amet mi luctus
        fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Sed quis velit nisl. Suspendisse
        potenti. Aliquam erat volutpat. Sed posuere ac arcu vitae cursus. Fusce
        vel dictum libero. Ut faucibus mi vitae mi accumsan, eget pulvinar neque
        fermentum. Duis vitae elit justo. Ut ac nunc sit amet nulla eleifend
        efficitur. Curabitur commodo, lacus vel tincidunt tristique, arcu velit
        finibus lectus, sit amet bibendum mi eros a dui. Cras vehicula orci ut
        tortor dictum, vitae malesuada lacus feugiat. Pellentesque nec
        scelerisque ipsum. Sed non quam et sapien tincidunt vulputate. Nullam
        elementum nunc nec est commodo, ac gravida urna posuere. Sed sed eros
        malesuada, fermentum nisi sed, fringilla purus. Aenean ut sollicitudin
        elit. Maecenas varius quam nec risus dictum fringilla. Etiam a eros
        dictum, feugiat velit in, tempor odio. Donec vel erat non nisi eleifend
        pharetra a nec risus. Curabitur feugiat purus et velit efficitur, a
        varius dolor facilisis. Proin vehicula neque ac augue pulvinar faucibus.
        Mauris venenatis, lacus a vehicula luctus, libero leo dignissim ligula,
        vitae fermentum nunc mauris et odio. Sed eleifend, turpis ac tempus
        feugiat, nisi eros tristique nulla, vitae pellentesque justo urna ac
        mauris. Integer quis vestibulum justo. Phasellus non ligula eget nulla
        eleifend egestas. Quisque in sem sed ex faucibus tincidunt ac id magna.
        Ut id placerat tellus, eu molestie arcu. Integer accumsan, dolor non
        elementum bibendum, lorem sem ultricies mi, vel consequat purus sem id
        enim. Proin nec nunc sed dui efficitur vehicula at ut dui. Donec at eros
        eget nisi malesuada scelerisque id eget mi. Nam lacinia nisi et nisi
        posuere, nec cursus elit rutrum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        potenti. Maecenas et cursus enim. Cras at dolor ac turpis malesuada
        varius nec et dolor. Ut a risus sed elit malesuada consectetur. Nam vel
        ante est. Sed vel nisl id arcu congue vehicula. Donec euismod quam eget
        ultrices convallis. Phasellus interdum augue ut feugiat fringilla. Duis
        vitae turpis a erat dapibus elementum a sit amet mi. Vivamus elementum
        nisi a nulla tempus
        enim. Proin nec nunc sed dui efficitur vehicula at ut dui. Donec at eros
        eget nisi malesuada scelerisque id eget mi. Nam lacinia nisi et nisi
        posuere, nec cursus elit rutrum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        potenti. Maecenas et cursus enim. Cras at dolor ac turpis malesuada
        varius nec et dolor. Ut a risus sed elit malesuada consectetur. Nam vel
        ante est. Sed vel nisl id arcu congue vehicula. Donec euismod quam eget
        ultrices convallis. Phasellus interdum augue ut feugiat fringilla. Duis
        vitae turpis a erat dapibus elementum a sit amet mi. Vivamus elementum
        nisi a nulla tempus
        enim. Proin nec nunc sed dui efficitur vehicula at ut dui. Donec at eros
        eget nisi malesuada scelerisque id eget mi. Nam lacinia nisi et nisi
        posuere, nec cursus elit rutrum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        potenti. Maecenas et cursus enim. Cras at dolor ac turpis malesuada
        varius nec et dolor. Ut a risus sed elit malesuada consectetur. Nam vel
        ante est. Sed vel nisl id arcu congue vehicula. Donec euismod quam eget
        ultrices convallis. Phasellus interdum augue ut feugiat fringilla. Duis
        vitae turpis a erat dapibus elementum a sit amet mi. Vivamus elementum
        nisi a nulla tempus
                </p>
              </div>
            </div>
          </div>
          {
            !loginData ?
              <div className="col-lg-6 col-12">
                <div className="roll-animation">
                  <div className={showSignup ? 'login-container-show' : 'login-container-hide'}>
                    <div className="login-box">
                      <h6>Sign in to WaterWatch</h6>
                      <h2>Login</h2>
                      <form className="login-form" onSubmit={handleLoginSubmit}>
                        <label htmlFor="login-email">Email</label>
                        <input
                          className="input_signup"
                          type="email"
                          id="login-email"
                          name="email"
                          value={emaail}
                          onChange={(e) => setEmaail(e.target.value)}
                          required />
                        <label htmlFor="login-password">Password</label>
                        <input
                          className="input_signup"
                          type="password"
                          id="login-password"
                          name="password"
                          value={passwordd}
                          onChange={(e) => setPasswordd(e.target.value)}
                          required />
                        <button type="submit" className="home_button">
                          Sign in
                        </button>
                        <div className="forgot-password">
                          <span className="forgot-password-text" onClick={() => alert("We cant help you :)")}>Forgot Password?</span>
                          <h6>
                            New to cattle.io?{" "}
                            <span className='switch-button' onClick={handleCreateAccountClick}>
                              Create account
                            </span>
                          </h6>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className={showSignup ? 'register-container-hide' : 'register-container-show'}>
                    <div className="register-box">
                      <h2>Register</h2>
                      <form className="register-form" onSubmit={handleRegisterSubmit}>
                        <label htmlFor="register-email">Email</label>
                        <input
                          className="input_signup"
                          type="email"
                          id="register-email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required />
                        <label htmlFor="register-username">Username</label>
                        <input
                          className="input_signup"
                          type="text"
                          id="register-username"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required />
                        <label htmlFor="register-password">Password</label>
                        <input
                          className="input_signup"
                          type="password"
                          id="register-password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required />
                        <button type="submit" className="home_button">
                          Register
                        </button>
                        <h6>
                          New to WaterWatch?{" "}
                          <span className='switch-button' onClick={handleLoginClick}>
                            Login
                          </span>
                        </h6>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              :
              <>
                <div className="col-lg-6 col-12 data-page">
                  <div className="login-data">Logged in as {loginData}</div>
                  <div className="logout-button" onClick={() => handleLogout()}>Logout</div>
                </div>
              </>
          }

        </div>
      </div>
     
    </>
  );
};

export default Homepage;
