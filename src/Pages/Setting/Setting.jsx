import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import './Setting.css';

const Setting = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="settings-page">
      <Sidebar className="settings-sidebar" />
      <div className="settings-main">
        <h2>Account Settings</h2>

        {/* Profile Section */}
        <section className="settings-section">
          <h3>Profile Information</h3>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder='Name'
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder='Email'
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              onChange={handleInputChange}
            />
          </div>

          <button className="save-button">Save Changes</button>
        </section>

        {/* Preferences Section */}
        {/* <section className="settings-section">
          <h3>Preferences</h3>

          <div className="toggle-setting">
            <label>Dark Mode</label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>

          <div className="toggle-setting">
            <label>Email Notifications</label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>

          <button className="save-button">Update Preferences</button>
        </section> */}

        {/* Account Actions */}
        <section className="settings-section">
          <h3>Account Management</h3>
          <button className="delete-btnSetting">Delete Account</button>
        </section>
      </div>
    </div>
  );
};

export default Setting;
