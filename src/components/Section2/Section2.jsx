import React from 'react'
import './Section2.css'
import Sectionimg2 from '../../assets/Sectionimg2.jpg'
const Section2 = () => {
    return (
        <div className='Section'>
            <div className="Sectionleft">
                <img src={Sectionimg2} alt="" className='Sectionimg2' />
            </div>
            <div className="Sectionright">
                <h3>Find the Perfect Candidate with AI Precision

                </h3>
                <h2>Streamline Your Hiring Process with AI-Powered Resume Screening

                </h2>
                <p> Discover top talent effortlessly with our advanced AI-driven resume screening tool. 
                    Using cutting-edge Natural Language Processing (NLP) and machine learning algorithms,
                     our platform analyzes and ranks resumes, helping HR teams identify the best candidates
                      quickly and efficiently. Say goodbye to manual filtering—our automated system ensures
                       you find the perfect match for your role, saving time and ensuring the right hire every time.</p>
            </div>


        </div>
    )
}

export default Section2