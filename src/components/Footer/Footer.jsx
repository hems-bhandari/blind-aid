import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer>
      <div class="row ftr1">
        <div class="col-lg-1"></div>
        <div class="col-lg-4 c1">
          <img src="imgb/logo1.png" height="200px" width="150px"alt='' />
          <p>For noble cause</p>
        </div>
        <div class="col-lg-3 c2">
          <p>Quick Links</p>
          <span class="d1">
            <a href="/OurMotive"> Our Motive</a><br />
            <a href="/AboutUS"> About Us</a><br />
            <a href="ForHelpers"> For helpers</a><br />
            <a href="ForHelpSeekers"> For Help Seekers</a><br />
          </span>

        </div>
        <div class="col-lg-3 c3">
          <p>Contact US</p>
          <a href="linkedin.com" class="in"><i class="fab fa-linkedin"></i></a>
          <a href="mailto:test@test.com" class="gm"><i class="fa-solid fa-envelope"></i></a>
          <a href="facebook.com" class="fb"><i class="fa-brands fa-facebook-square"></i></a>
        </div>




        <div class="col-lg-12 ftr2">
          <p> Copyright 2022-All rights are reserved</p>
        </div>




      </div>
    </footer>

    </div>
  )
}

export default Footer