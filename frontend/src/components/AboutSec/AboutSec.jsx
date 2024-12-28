import React from 'react'
import './AboutSec.css'
import AboutSection from '../../assets/AboutSection.jpg'
import playicon from '../../assets/playicon.png'
const AboutSec = () => {
    return (
        <div className='about'>
            
            <div className="aboutright">
                <h3>Empowering Young Professionals</h3>
                <h2>We connect young
                    professionals to
                    internships and  early
                    career opportunities</h2>
                <p> We understand that starting a career can be
                    daunting, which is why we strive to simplify
                    the process and ensure a smooth transition
                    into the professional world.</p>
            </div>
            <div className="aboutleft">
                <img src={AboutSection} alt="" className='aboutimg'/>
                <img src={playicon} alt="" className='playicon'/>
            </div>
        </div>
    )
}

export default AboutSec