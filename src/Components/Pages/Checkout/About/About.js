import React from 'react';
import { Fade } from 'react-reveal';
import sheblu from '../../../../images/Shibu passport size (1).png'
const About = () => {
    return (
        <div className="container-fluid">
            <h1 className='text-center'>About Me</h1>
            <div className="row">
            <Fade left>
            <div className="col-md-6 ps-5 text-center">
        <img className='img-fluid h-75 w-100 ps-5' src={sheblu} alt="" />
                </div>
        </Fade>
        <Fade right>
          
        <div className="col-md-6 pt-5 text-start">
            <h1>Hi,I am Asaduz Zaman</h1>
            <p>I am from Bangladesh.My Dream is to be a Full Stack Web developer.Recently I have been joined a Complete Web Development Course with programming hero.Already I have learnt Html,css,javascript,and React...and I have finished 10+ basic website.And I want to join a reputated Software Company as a Full Stack Web Developer..I am trying to my best to Fulfill my Dream .</p>
            <button className="btn btn-info">Contact Me</button>
                </div>
            
        </Fade>
                
        </div>
        </div>
    );
};

export default About;