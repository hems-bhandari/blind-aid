import React from 'react'
import './Info.css'
// import 'bootstrap/dist/css/bootstrap.css';
const Info = () => {
  return (
    <div>
      <div class="brk">
      </div>
      <br /><br />
        <div class="txt">
          <h1 class="text-2">BLINDAID.COM</h1>
          <p class="text-1">Helping Visually Impaired students attend exam</p>
        </div>
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-1">

            </div>
            <div class="col-lg-4">
              <img src="imgb/1.png" height="290px" width="100%" class="img-1" alt=''></img>
            </div>
            <div class="col-lg-2">
              {/* <img src="imgb/logo1.png" class="logo-main"> */}
            </div>
            <div class="col-lg-4">
              <img src="imgb/2.png" height="290px" width="100%" class="img-2" alt=''></img>
            </div>
            <div class="col-lg-1">

            </div>
          </div>
        </div> <br />



          <div class="intro">
            <p>BlindAid.com is a platform for connecting blind and partially sighted students with people who are willing to
              help them write their exam either voluntarily or through small payment. This project was initiated to advocate
              the right to education for everyone.</p>
          </div>
          <br /><br /><br /><br />
          </div>

            )
}
export default Info;