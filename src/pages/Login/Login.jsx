import React from 'react'
import './Login.css'
import LoginContainer from '../../components/LoginContainer/LoginContainer'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Login = () => {
  return (
    <div>
        <Navbar />
        <LoginContainer />
        <Footer />
    </div>
  )
}

export default Login