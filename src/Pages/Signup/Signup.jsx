import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const submithandler = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous message on new submission

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        setMessageType('success');
        setMessage(data.message || 'Registration successful!'); // Success message
      } else {
        setMessageType('error');
        setMessage(data.message || 'Registration failed. Please try again.');
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
          <h1 className="register-title">Register</h1>
          <p className="register-description">Please fill in this form to create an account.</p>
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
          <p className="register-agreement">
            By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.
          </p>
          <button type="submit" className="register-button">Register</button>
        </div>

        <div className="register-signin">
          <p>Already have an account <Link to="/signin">Sign in</Link>.</p> 
        </div>
      </form>
    </div>
  );
};

export default Signup;
