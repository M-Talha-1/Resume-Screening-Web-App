import React from 'react';
import './Products.css';
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import product from '../../assets/product.jpg'
import Title from '../../components/Title/Title';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'AI-Powered Resume Screening',
      description: 'Effortlessly screen resumes using advanced AI and NLP algorithms, saving time and improving accuracy.',
      img: product1,
    },
    {
      id: 2,
      title: 'Candidate Evaluation Tools',
      description: 'Assess and evaluate candidate skills with smart tools designed to match your hiring criteria.',
      img: product2,
    },
    {
      id: 3,
      title: 'Automated Candidate Ranking',
      description: 'Rank candidates automatically based on job requirements and AI analysis.',
      img: product3,
    },
    {
      id: 4,
      title: 'Detailed Hiring Analytics',
      description: 'Gain insights with powerful analytics for smarter decision-making in the hiring process.',
      img: product4,
    },
  ];

  return (
    <div>

      <div className="product-page">
        {/* Hero Section */}
        <section className="hero-section small_banner">
          <h1 className="hero-title">Our Products</h1>
          <p className="hero-description">
            Explore our AI-powered tools designed to streamline and enhance your hiring process.
          </p>
        </section><Title 
                    title="Explore Our AI-Powered Hiring Solutions" />
        <div className='about'>
          
          <div className="aboutright">
            <h3>Discover Powerful Tools for Smarter Hiring</h3>
            <h2>AI-driven solutions to streamline your recruitment process and find top talent effortlessly</h2>
            <p> At HireMe, we provide AI-powered tools to simplify and enhance your hiring process. Our advanced 
              solutions, including automated resume screening, candidate evaluation, and in-depth analytics, help 
              you identify top talent quickly and accurately. With cutting-edge AI and NLP technologies, our platform 
              streamlines recruitment workflows, reduces manual effort, and ensures data-driven decision-making.

              </p>
          </div>
          <div className="aboutleft">
            <img src={product} alt="" className='aboutimg' />

          </div>
          
        </div>
        <Title subTitle="Simplify recruitment with tools to quickly find, assess, and hire top talent"
         title="Our Cutting-Edge AI Products for Smarter Hiring" />
        {/* Product Grid */}
        <section className="product-section">
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.title} className="product-image" />
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products
