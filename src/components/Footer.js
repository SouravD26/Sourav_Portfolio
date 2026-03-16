import React from "react";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container text-center">
        <p className="mb-1 small">
          © {new Date().getFullYear()} Sourav Dutta. All rights reserved.
        </p>
        <div>
          <a className="social-link me-2" href="#!">
            <i className="bi bi-facebook"></i>
          </a>
          <a className="social-link me-2" href="#!">
            <i className="bi bi-twitter"></i>
          </a>
          <a className="social-link" href="#!">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
