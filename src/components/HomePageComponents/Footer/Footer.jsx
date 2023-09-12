import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>Our core value is our customers' satisfication</p>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: shaojun@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Taste Place</p>
      </div>
    </footer>
  );
}

