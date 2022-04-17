import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;