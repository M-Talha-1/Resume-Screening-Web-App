import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50); // Set sticky if scrolled more than 50px
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='darknav'/*{`container ${sticky ? 'darknav' : ''}`}*/>
      <div>
        <span className="Hire"><Link to="/">Hire</Link></span>
        <span className="Me"><Link to="/">Me</Link></span>
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>

      <div>
        <Link className="btn-2" to="/signin">Login</Link>
        <Link className="btn" to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
