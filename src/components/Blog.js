import React from "react";
import { blogs } from "../data";
import TiltCard from "./TiltCard";

const Blog = () => (
  <div className="games-grid">
    {blogs.map((b) => (
      <TiltCard key={b.id} href={b.link} className="project-card reveal">
        <div className="project-img">
          <img src={b.img} alt={b.title} loading="lazy" />
          <span className="project-cat">{b.date}</span>
        </div>
        <div className="project-body">
          <h3>{b.title}</h3>
          <p>{b.excerpt}</p>
          <span className="project-link">Play Now ↗</span>
        </div>
      </TiltCard>
    ))}
  </div>
);

export default Blog;
