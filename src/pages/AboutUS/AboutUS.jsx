import React from 'react'
import './AboutUS.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import FromDevelopers from '../../components/FromDevelopers/FromDevelopers'
import Team from '../../components/Team/Team'
const AboutUS = () => {
  return (
    <div>
      <Navbar />
      <FromDevelopers />
      <Team />
      <Footer />
      AboutUS
    </div>
  )
}

export default AboutUS