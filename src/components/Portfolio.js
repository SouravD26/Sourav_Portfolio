import React, { useState } from "react";
import { projects } from "../data";
import TiltCard from "./TiltCard";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const INITIAL = 6;
const STEP = 3;

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(INITIAL);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const shown = filtered.slice(0, visible);

  return (
    <>
      <div className="filters reveal">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisible(INITIAL);
            }}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid" key={filter}>
        {shown.map((p, i) => (
          <TiltCard
            key={p.id}
            href={p.link}
            className="project-card pop-in"
            style={{ animationDelay: `${(i % STEP) * 70}ms` }}
          >
            <div className="project-img">
              <img src={p.img} alt={p.title} loading="lazy" />
              <span className="project-cat">{p.category}</span>
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="project-link">{p.link ? "Live Demo ↗" : "Internal Project"}</span>
            </div>
          </TiltCard>
        ))}
      </div>

      {visible < filtered.length && (
        <div className="load-more">
          <button className="btn-ghost" onClick={() => setVisible((v) => v + STEP)}>
            Load More ({filtered.length - visible} more)
          </button>
        </div>
      )}
    </>
  );
};

export default Portfolio;
