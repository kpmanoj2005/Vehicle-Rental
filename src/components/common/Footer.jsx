import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h2 className="footer-logo">FAMGO</h2>
          </div>
          
          <div>
            <h3 className="footer-heading">About</h3>
            <div className="footer-links">
              <p className="footer-link">How it works</p>
              <p className="footer-link">Featured</p>
              <p className="footer-link">Partnership</p>
              <p className="footer-link">Business Relation</p>
            </div>
          </div>
          
          <div>
            <h3 className="footer-heading">Community</h3>
            <div className="footer-links">
              <p className="footer-link">Events</p>
              <p className="footer-link">Blog</p>
              <p className="footer-link">Podcast</p>
              <p className="footer-link">Invite a friend</p>
            </div>
          </div>
          
          <div>
            <h3 className="footer-heading">Socials</h3>
            <div className="footer-links">
              <p className="footer-link">Discord</p>
              <p className="footer-link">Instagram</p>
              <p className="footer-link">Twitter</p>
              <p className="footer-link">Facebook</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">©2025FAMGO. All rights reserved</p>
            <div className="footer-legal">
              <p className="footer-legal-link">Privacy & Policy</p>
              <p className="footer-legal-link">Terms & Condition</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
