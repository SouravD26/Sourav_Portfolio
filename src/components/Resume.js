import React from "react";
import { education, experience, certificates } from "../data";

const Resume = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h4 className="mb-3">Education</h4>
        {education.map((ed, i) => (
          <div className="card mb-3 resume-card" key={i}>
            <div className="card-body">
              <h5 className="card-title">{ed.school}</h5>
              <p className="card-subtitle mb-2">{ed.degree}</p>
              <p className="small text-muted">{ed.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="col-lg-6">
        <h4 className="mb-3">Experience</h4>
        {experience.map((exp, i) => (
          <div className="card mb-3 resume-card" key={i}>
            <div className="card-body">
              <h5 className="card-title">{exp.company}</h5>
              <p className="card-subtitle mb-2 ">
                {exp.role} • {exp.period}
              </p>
              <ul className="mb-0">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="small">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <h4 className="mb-3 mt-4">Certificates</h4>
        {certificates.map((cert, k) => (
          <div className="card mb-2 resume-card" key={k}>
            <div className="card-body">
              <h6 className="mb-1">
                {" "}
                <b>{cert.name}</b>
              </h6>
              <p className="small mb-0">{cert.issuer}</p>
              <p className="small mb-0">{cert.period}</p>
              <p className="small mb-0">Skills: {cert.skill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
