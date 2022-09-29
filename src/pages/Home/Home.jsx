import React from 'react';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer'
import Collaborations from '../../components/Collaborations/Collaborations';
import Navbar from '../../components/Navbar/Navbar';


const Home = () => {
    return(
        
       <div className="home">
              
        <Navbar />      
        <Info />
        <Collaborations />
        <Footer />

       </div>
    );
}

export default Home