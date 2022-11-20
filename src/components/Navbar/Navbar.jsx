import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light container">
        <div class="container-fluid">
          <div>
            <a class="navbar-brand" href="/"><img src="imgb/logo1.png" alt='Logo of BlindAid.com' className='logo'></img></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span role="img" aria-labelledby="cross" className="navbar-toggler-icon">✖️</span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/OurMotive">Our Motive</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/AboutUS">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ForHelpers">For Helpers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./ForHelpSeekers">For Help seekers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./Login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./SignUp">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar