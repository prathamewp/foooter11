import React from 'react';
import './App.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Registered office</h4>
          <p>Bombay House, 24, Homi Mody Street,</p>
          <p>Mumbai 400 001, India</p>
          <p>+91 - 22 - 6665 8282</p>
          <p>+91 - 22 - 6665 8013</p>
          <p>talktous@tatatrusts.org</p>
        </div>
        <div className="footer-contact">
          <h4>Support office</h4>
          <p>World Trade Center-1, 26th floor,</p>
          <p>Cuffe Parade, Mumbai 400 005, India</p>
          <p>+91 - 22 - 6135 8282</p>
          <p>+91 - 22 - 6135 8369</p>
          <p>talktous@tatatrusts.org</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
