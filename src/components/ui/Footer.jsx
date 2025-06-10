// src/components/Footer.jsx
import React from 'react';
import { FaDiscord, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css';

// Reusable component for links that open in new tab
const NewTabLink = ({ href, children, className = '' }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FAMGO</h3>
          <p>Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><NewTabLink href="/how-it-works">How it works</NewTabLink></li>
            <li><NewTabLink href="/featured">Featured</NewTabLink></li>
            <li><NewTabLink href="/partnership">Partnership</NewTabLink></li>
            <li><NewTabLink href="/business-relation">Business Relation</NewTabLink></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li><NewTabLink href="/event">Events</NewTabLink></li>
            <li><NewTabLink href="/blog">Blog</NewTabLink></li>
            <li><NewTabLink href="/podcast">Podcast</NewTabLink></li>
            <li><NewTabLink href="/invite-a-friend">Invite a friend</NewTabLink></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Socials</h4>
          <ul className="social-icons">
            <li>
              <NewTabLink href="https://discord.com">
                <FaDiscord className="icon" />
              </NewTabLink>
            </li>
            <li>
              <NewTabLink href="https://instagram.com">
                <FaInstagram className="icon" />
              </NewTabLink>
            </li>
            <li>
              <NewTabLink href="https://twitter.com">
                <FaTwitter className="icon" />
              </NewTabLink>
            </li>
            <li>
              <NewTabLink href="https://facebook.com">
                <FaFacebook className="icon" />
              </NewTabLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <p>©2025 FAMGO. All rights reserved</p>
        </div>
        <div className="footer-links">
          <NewTabLink href="/privacy-policy">Privacy & Policy</NewTabLink>
          <NewTabLink href="/terms">Terms & Condition</NewTabLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
