import React, { useState } from "react";
import { projects } from "../data";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mb-4 text-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn btn-sm me-2 mb-2 ${
              filter === cat ? "btn-success" : "btn-outline-light"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filtered.map((p) => (
          <div key={p.id} className="col-md-4 px-3">
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="card portfolio-card h-100"
                  style={{ border: "0.2px solid red" }}
                >
                  <img src={p.img} className="card-img-top" alt={p.title} />
                  <div className="card-body d-flex flex-column px-4 py-3">
                    <h5 className="card-title mb-2">{p.title}</h5>
                    <p className="card-text small text-muted mb-2">
                      {p.category}
                    </p>
                    <p className="card-text">{p.desc}</p>
                  </div>
                </div>
              </a>
            ) : (
              <div className="card portfolio-card h-100">
                <img src={p.img} className="card-img-top" alt={p.title} />
                <div className="card-body d-flex flex-column px-4 py-3">
                  <h5 className="card-title mb-2">{p.title}</h5>
                  <p className="card-text small text-muted mb-2">
                    {p.category}
                  </p>
                  <p className="card-text">{p.desc}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
