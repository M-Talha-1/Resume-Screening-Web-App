import React from 'react'
import './Services.css'
import Service1 from '../../assets/Service1.jpg'
import Service2 from '../../assets/Service2.jpg'
import Service3 from '../../assets/Service3.jpg'
import Sicon1 from '../../assets/Sicon1.png'
import Sicon2 from '../../assets/Sicon2.png'
import Sicon3 from '../../assets/Sicon3.png'


const Services = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src={Service1} alt="" />
                <div className='caption'>
                    <img src={Sicon1} alt="" />
                    <p>Resume Screening</p>
                </div>
            </div>
            <div className='program'>
                <img src={Service2} alt="" />
                <div className='caption'>
                    <img src={Sicon2} alt="" />
                    <p>Applicant Tracking System</p>
                </div>
            </div>
            <div className='program'>
                <img src={Service3} alt="" />
                <div className='caption'>
                    <img src={Sicon3} alt="" />
                    <p>Resume Parser</p>
                </div>
            </div>
        </div>
    )
}

export default Services