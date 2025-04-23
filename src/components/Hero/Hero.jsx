import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1> AI-Powered Talent Evaluation for Recruiters Committed to Quality</h1>
                <p className='hero-description'> Efficiently screen and manage resumes</p>
                <Link to="/contact" className='btn-trans'>Learn More</Link>
                <Link to="/signin" className='btn'>Get Started</Link>
            </div>
        </div>
    );
}

export default Hero;
