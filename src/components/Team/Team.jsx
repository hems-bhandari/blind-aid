import React from 'react'
import './Team.css'
const Team = () => {
  return (
    <div>
      <h1 class="dev">MEET THE DEVELOPERS</h1>
      <br/>

        <div class="container m-auto">
          <div class="row about">

            <div class="col-lg-3 p-0 anu  try1">
              <div class="overlay">
                <p class="text-light">ANURAG ARYAL</p>
              </div>
            </div>

            <div class="col-lg-3 p-0 pra try1">
              <div class="overlay">
                <p class="text-light">PRATISTHA GHIMIRE</p>
              </div>
            </div>

            <div class="col-lg-3 p-0 hems try1">
              <div class="overlay">
                <p class="text-light">HEMS BHANDARI </p>
              </div>
            </div>

            <div class="col-lg-3 p-0 sam try1">
              <div class="overlay">
                <p class="text-light">SAMRID PANDIT</p>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Team