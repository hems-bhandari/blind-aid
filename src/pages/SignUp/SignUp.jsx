import React from 'react'
import './SignUp.css'
import SignUpContainer from '../../components/SignUpContainer/SignUpContainer'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const SignUp = () => {
  return (
    <div>
      <Navbar />
        <SignUpContainer />
        <Footer />
    </div>
  )
}

export default SignUp