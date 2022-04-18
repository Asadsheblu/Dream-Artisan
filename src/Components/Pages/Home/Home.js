import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Contact from './Contact/Contact';
import Zoom from 'react-reveal/Zoom';
const Home = () => {
    return (
        <div>
            <Banner />
            <Zoom left>
            <Services />
        </Zoom>
            
            <Contact />
           
        </div>
    );
};

export default Home;