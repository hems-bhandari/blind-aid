import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../../components/Footer/Footer';
import { BrowserRouter, Switch, Route,Routes} from 'react-router-dom';


const Layout = () => {


    return(
        <BrowserRouter>
       <div className="layout">
        
         {/* <Navbar /> */}
        
         <Routes>
         <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
            

          
       </div>
       </BrowserRouter>
    );
}


export default Layout
