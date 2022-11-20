import React from 'react';
import Home from '../Home/Home';
import OurMotive from '../OurMotive/OurMotive'
import AboutUS from '../AboutUS/AboutUS'
import ForHelpers from '../ForHelpers/ForHelpers'
import ForHelpSeekers from '../ForHelpSeekers/ForHelpSeekers'
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

import { BrowserRouter, Route,Routes} from 'react-router-dom';


const Layout = () => {


    return(
        <BrowserRouter>
       <div className="layout">
        
        
         <Routes>
         <Route exact path='/' element={<Home />} />
         <Route exact path='/OurMotive' element={<OurMotive />} />
         <Route exact path='/AboutUS' element={<AboutUS />} />
         <Route exact path='/ForHelpers' element={<ForHelpers />} />
         <Route exact path='/ForHelpSeekers' element={<ForHelpSeekers />} />
         <Route exact path='/Login' element={<Login />} />
         <Route exact path='/SignUp' element={<SignUp />} />
        </Routes>
            

          
       </div>
       </BrowserRouter>
    );
}


export default Layout
