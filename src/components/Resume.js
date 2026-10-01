import React from "react";
import { education, experience, certificates } from "../data";

const Item = ({ title, date, sub, children }) => (
  <div className="tl-item reveal">
    <span className="tl-dot" />
    <div className="glass tl-card">
      <div className="tl-head">
        <h4>{title}</h4>
        <span className="tl-date">{date}</span>
      </div>
      <p className="tl-sub">{sub}</p>
      {children}
    </div>
  </div>
);

const Resume = () => (
  <div className="resume-grid">
    <div>
      <h3 className="col-title reveal">Experience</h3>
      <div className="timeline">
        {experience.map((exp) => (
          <Item key={exp.company} title={exp.role} date={exp.period} sub={`${exp.company} — ${exp.location}`}>
            <ul>
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Item>
        ))}
      </div>
    </div>

    <div>
      <h3 className="col-title reveal">Education</h3>
      <div className="timeline">
        {education.map((ed) => (
          <Item key={ed.degree} title={ed.degree} date={ed.year} sub={ed.school} />
        ))}
      </div>

      <h3 className="col-title reveal mt-big">Certifications</h3>
      <div className="timeline">
        {certificates.map((c) => (
          <Item key={c.name} title={c.name} date={c.period} sub={`${c.issuer} — ${c.skill}`} />
        ))}
      </div>

      <a className="btn-neon mt-big" href="/SouravDutta_Resume.pdf" target="_blank" rel="noreferrer">
        View Full Resume ↗
      </a>
    </div>
  </div>
);

export default Resume;
