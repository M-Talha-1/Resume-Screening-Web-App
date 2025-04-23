import React from 'react'
import './Testimonial.css'
import nexticon from '../../assets/nexticon.png'
import backicon from '../../assets/backicon.png'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
import { useRef } from 'react'
const Testimonial = () => {
 
    const slider = useRef();
    let tx = 0;
const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

    return (
        <div className='testimonials'>
            <img src={nexticon} alt="" className='nextbtn' onClick={slideForward} />
            <img src={backicon} alt="" className='backbtn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Efficient and Accurate Candidate Selection</span>
                                </div>
                            </div>
                            <p>As an HR manager, sorting through hundreds of resumes used to be a daunting task. This platform’s
                                AI-powered resume screening has completely transformed our recruitment process. It accurately identifies
                                the best candidates for our open positions, saving us valuable time and ensuring we hire top talent.</p>
                        </div>
                    </li>
                    <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Efficient and Accurate Candidate Selection</span>
                            </div>
                        </div>
                        <p>As an HR manager, sorting through hundreds of resumes used to be a daunting task. This platform’s 
                            AI-powered resume screening has completely transformed our recruitment process. It accurately identifies
                         the best candidates for our open positions, saving us valuable time and ensuring we hire top talent.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Efficient and Accurate Candidate Selection</span>
                            </div>
                        </div>
                        <p>As an HR manager, sorting through hundreds of resumes used to be a daunting task. This platform’s 
                            AI-powered resume screening has completely transformed our recruitment process. It accurately identifies
                         the best candidates for our open positions, saving us valuable time and ensuring we hire top talent.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Efficient and Accurate Candidate Selection</span>
                            </div>
                        </div>
                        <p>As an HR manager, sorting through hundreds of resumes used to be a daunting task. This platform’s 
                            AI-powered resume screening has completely transformed our recruitment process. It accurately identifies
                         the best candidates for our open positions, saving us valuable time and ensuring we hire top talent.</p>
                    </div>
                </li>
                </ul>
            </div>


        </div>
    )
}

export default Testimonial