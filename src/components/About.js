import React, { useEffect, useRef, useState } from "react";
import { social, summary, stats } from "../data";
import profile from "../assets/profile.jpg";

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / 1400, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const About = () => (
  <div className="about-grid">
    <div className="about-photo reveal">
      <div className="photo-ring" />
      <img src={profile} alt="Sourav Dutta" />
    </div>
    <div className="about-text reveal delay-1">
      <p className="lead-text">{summary}</p>
      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat glass" key={s.label}>
            <div className="stat-value">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="link-row">
        <a className="chip-link" href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a className="chip-link" href={social.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a className="chip-link" href={social.Netlify} target="_blank" rel="noreferrer">Netlify ↗</a>
        <a className="chip-link" href={social.Vercel} target="_blank" rel="noreferrer">Vercel ↗</a>
      </div>
    </div>
  </div>
);

export default About;
