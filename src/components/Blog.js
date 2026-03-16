import React from "react";
import { blogs } from "../data";

const Blog = () => {
  return (
    <div className="row g-6">
      {blogs.map((b) => (
        <div className="col-md-6" key={b.id}>
          <a
            href={b.link || "#"}
            className="blog-link text-decoration-none"
            target={b.link ? "_blank" : undefined}
            rel={b.link ? "noreferrer" : undefined}
            aria-label={b.title}
          >
            <div className="card blog-card">
              <img src={b.img} className="card-img-top" alt={b.title} />
              <div className="card-body text-center">
                <h5 className="card-title">
                  <b>{b.title}</b>
                </h5>
                <p className="card-text small text-muted">{b.date}</p>
                <p className="card-text">{b.excerpt}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Blog;
