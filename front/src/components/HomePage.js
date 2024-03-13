import React from 'react'
import Home from './Home'
import Userpage from './Userpage'

const HomePage = () => {
    const auth = localStorage.getItem("auth")
    console.log(auth)
  return (
    <>
        {
            auth == 1? <Home/> : <Userpage/>
        }
    </>
  )
}

export default HomePage