import React from 'react';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer'
import Collaborations from '../../components/Collaborations/Collaborations';
import Navbar from '../../components/Navbar/Navbar';


const Home = () => {
    return(
        
       <div className="home">
              
        <Navbar />      
        <About />
        <Collaborations />
        <Footer />

       </div>
    );
}

export default Home