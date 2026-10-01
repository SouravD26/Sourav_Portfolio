import React from "react";
import { skills } from "../data";

const allSkills = skills.flatMap((s) => s.items);

const Skills = () => (
  <>
    <div className="skills-grid">
      {skills.map((s, i) => (
        <div className={`skill-card glass reveal delay-${i % 3}`} key={s.group}>
          <h3>{s.group}</h3>
          <div className="tags">
            {s.items.map((it) => (
              <span className="tag" key={it}>{it}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...allSkills, ...allSkills].map((it, k) => (
          <span key={k}>{it}</span>
        ))}
      </div>
    </div>
  </>
);

export default Skills;
