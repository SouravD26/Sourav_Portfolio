import React from "react";
import { social } from "../data";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="row align-items-center">
      <div className="col-md-4 text-center">
        <img
          src={profile}
          alt="Sourav"
          className="img-fluid rounded profile-img"
        />
      </div>
      <div className="col-md-8">
        <p className="lead ">
          Web Developer with hands-on experience in front-end and full-stack
          development. Skilled in HTML, CSS, JavaScript, Bootstrap, React.js,
          Node.js, MongoDB, and WordPress. Experienced in building responsive
          UIs, upgrading internal systems, and delivering clean, scalable code.
        </p>

        <div className="mt-3">
          <a
            className="btn btn-outline-light me-2"
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-outline-light me-2"
            href={social.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn-outline-light me-2"
            href={social.Netlify}
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          <a
            className="btn btn-outline-light"
            href={social.Vercel}
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
