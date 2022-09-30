import React from 'react';
import './Home.css';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer'
import Collaborations from '../../components/Collaborations/Collaborations';
import Navbar from '../../components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => {
    return(
        
       <div className="main">
              
        <Navbar />      
        <Info />
        <Collaborations />
        <Footer />
       </div>
    );
}

export default Home