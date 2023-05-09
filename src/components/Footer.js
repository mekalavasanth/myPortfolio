import React from "react";
import "./Footer.css";
import FooterLOGO from "./images/logo.png"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={FooterLOGO } alt="Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
