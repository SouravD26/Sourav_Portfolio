import React from "react";
import { social } from "../data";

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <p>© {new Date().getFullYear()} Sourav Dutta. All rights reserved.</p>
      <div className="footer-links">
        <a href={social.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${social.email}`}>Email</a>
        <a href="#home">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
