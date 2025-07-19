import React from 'react'
import '../styles/Footer.css'; 
import instagramLogo from '../assets/instagram_logo.png';
import linkedinLogo from '../assets/linkedin_logo.png'; 
import facebookLogo from '../assets/facebook_logo.png';

export const Footer = () => {
  return (
    <footer className="footer-content">
        <p>We’re a small team of language lovers and native speakers on a mission to make Tamil learning accessible, modern, and fun for everyone — wherever you are in the world.</p>
        <div className="social-links">
            <img src={instagramLogo} alt="Insta" className="social-icon" />
            <img src={linkedinLogo} alt="Linkedin" className="social-icon" />
            <img src={facebookLogo} alt="Facebook" className="social-icon" />
        </div>
        <p>© 2025 Learn Tamil. All rights reserved.</p>
    </footer>
  )
}
