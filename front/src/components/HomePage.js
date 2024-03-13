import React, { useEffect } from "react";
import Home from "./Home";
import Userpage from "./Userpage";

const HomePage = () => {
  const auth = null;
  console.log("first")
  useEffect(() => {
    auth = localStorage.getItem("auth");
    console.log(auth);
  });
  return <>{auth === 1 ? <Home /> : <Userpage />}</>;
};

export default HomePage;
