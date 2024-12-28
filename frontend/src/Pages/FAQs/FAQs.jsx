import React, { useState } from "react";
import "./FAQs.css";

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is HireMe?",
            answer: "HireMe is an AI-powered platform that simplifies and enhances the recruitment process, offering tools like resume screening, candidate evaluation, and detailed hiring analytics.",
        },
        {
            question: "How does the AI resume screening work?",
            answer: "Our AI uses advanced algorithms to analyze resumes and match candidates based on job requirements, saving you time and effort.",
        },
        {
            question: "Can I integrate HireMe with other tools?",
            answer: "Yes, HireMe integrates with various applicant tracking systems and HR tools for seamless workflow management.",
        },
        {
            question: "Is HireMe suitable for small businesses?",
            answer: "Absolutely! HireMe is designed to cater to businesses of all sizes, providing scalable solutions for different recruitment needs.",
        },
        {
            question: "How can I get started with HireMe?",
            answer: "You can start by signing up for a free demo or contacting our support team for more information.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div><section className="hero-section small_banner">
            <h1 className="hero-title">Frequently Asked Questions (FAQs)</h1>
            <p className="hero-description">
            Find answers to all your questions and get the support you need.
            </p>
        </section>
            <div className="faqs-page">
            <h1 className="contact-heading">Common Inquiries and Solutions</h1>

                <div className="faqs-container">
                    
                    {/* Left Section */}
                    <div className="faqs-left">
                        <h1>Frequently Asked Questions</h1>
                        <p>
                            Got questions? We’ve got answers! Explore our FAQs to learn more
                            about HireMe and how it can transform your hiring process.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="faqs-right">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <span className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}>
                                        &#x25BC;
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
