import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate(); // Initialize navigate

  const submithandler = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous message on new submission

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        setMessageType('success');
        setMessage(data.message || 'Login successful!');
        
        // Redirect to the desired page (e.g., /dashboard)
        navigate('/dashboard');
      } else {
        setMessageType('error');
        setMessage(data.message); // Display specific error from backend
      }
    } catch (error) {
      setMessageType('error');
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='padding'>
      <form onSubmit={submithandler}>
        <div className="register-container">
          <h1 className="register-title">Login</h1>
          <p className="register-description">Please fill in this form to log into your account.</p>
          <hr className="register-divider" />

          {message && (
            <p className={`register-message ${messageType === 'success' ? 'success' : 'error'}`}>
              {message}
            </p>
          )}

          <label htmlFor="register-email" className="register-label"><b>Email</b></label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="register-email"
            required
            className="register-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label htmlFor="register-password" className="register-label"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="register-password"
            required
            className="register-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <hr className="register-divider" />
          <button type="submit" className="register-button">Login</button>
        </div>

        <div className="register-signin">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link>.</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
