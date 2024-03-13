import React, { useEffect, useState } from "react";
import Home from "./Home";
import Userpage from "./Userpage";

const HomePage = () => {
  const [auth,getAuth] = useState(0);
  console.log("first")
  useEffect(() => {
    getAuth(localStorage.getItem("auth"))
    console.log(auth);
  },[auth]);
  return <>{auth == 1 ? <Home /> : <Userpage />}</>;
};

export default HomePage;
