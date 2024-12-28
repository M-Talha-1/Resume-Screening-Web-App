import React from 'react';
import resources1 from '../../assets/resources1.jpg'
import resources2 from '../../assets/resources2.jpg'
import resources3 from '../../assets/resources3.jpg'
import Title from '../../components/Title/Title';


const Resources = () => {


    return (
        <div>

            <div className="product-page">
                {/* Hero Section */}
                <section className="hero-section small_banner">
                    <h1 className="hero-title">Explore Our Valuable Resources</h1>
                    <p className="hero-description">
                        Gain insights, guides, and tools to streamline your hiring process.
                    </p>
                </section>
                <Title 
                    title="Your Go-To Resource Hub for Smarter Hiring" />
                <div className='about'>

                    <div className="aboutright">
                        <h3>Ultimate Hiring Guide</h3>
                        <h2>A Step-by-Step Resource for Effective Recruitment</h2>
                        <p> Efficient hiring begins with a clear plan. This guide provides practical steps to
                            optimize every stage of recruitment, from job posting to candidate evaluation.
                            Learn how to write impactful job descriptions, filter applications efficiently,
                            and make confident hiring decisions. With proven strategies, you’ll attract top-tier
                            talent and reduce hiring time. Unlock tools to streamline processes and build a stronger team.

                        </p>
                    </div>
                    <div className="aboutleft">
                        <img src={resources1} alt="" className='aboutimg' />

                    </div>

                </div>
                <div className='Section'>
                    <div className="Sectionleft">
                        <img src={resources2} alt="" className='Sectionimg2' />
                    </div>
                    <div className="Sectionright">
                        <h3>AI-Powered Resume Screening Insights

                        </h3>
                        <h2> Enhance Candidate Selection with Cutting-Edge Technology

                        </h2>
                        <p> Discover how AI-powered tools revolutionize resume screening to save time and improve accuracy.
                            This section dives into the benefits of AI, including automated candidate ranking and skill-matching
                            analytics. Learn how machine learning eliminates bias while surfacing the most qualified applicants
                            for each role. Gain insights into implementing AI seamlessly into your workflow to elevate your hiring strategy.</p>
                    </div>


                </div>
                <div className='about'>

                    <div className="aboutright">
                        <h3>Retention Strategies for Modern Workforces</h3>
                        <h2> Keep Your Top Talent Engaged and Productive</h2>
                        <p> Hiring great talent is only half the battle—keeping them is key. 
                            Explore proven methods to boost employee satisfaction, engagement, and 
                            long-term retention. From creating meaningful career growth opportunities to 
                            fostering a positive work culture, this resource offers actionable advice. Build trust, 
                            reduce turnover, and ensure employees thrive in their roles, driving business success.

                        </p>
                    </div>
                    <div className="aboutleft">
                        <img src={resources3} alt="" className='aboutimg' />

                    </div>

                </div>
                {/* Product Grid */}

            </div>
        </div>
    );
};

export default Resources
