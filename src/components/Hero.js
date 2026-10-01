import React, { useEffect, useState } from "react";
import { roles, social } from "../data";

const useTypewriter = (words) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setI((n) => n + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
};

const Hero = () => {
  const role = useTypewriter(roles);

  return (
    <header id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-hello">Hello, I&apos;m</p>
        <h1 className="hero-name" data-text="Sourav Dutta">
          Sourav Dutta
        </h1>
        <p className="hero-role">
          <span className="role-prefix">&gt;</span> {role}
          <span className="caret">_</span>
        </p>
        <p className="hero-tagline">
          Crafting fast, responsive and pixel-perfect web experiences with React.js — from
          Kolkata to the world.
        </p>
        <div className="hero-cta">
          <a className="btn-neon" href="#portfolio">
            View My Work
          </a>
          <a className="btn-ghost" href="/SouravDutta_Resume.pdf" download>
            Download Resume
          </a>
        </div>
        <div className="hero-social">
          <a href={social.github} target="_blank" rel="noreferrer">GitHub</a>
          <span>/</span>
          <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span>/</span>
          <a href={`mailto:${social.email}`}>Email</a>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span />
      </a>
    </header>
  );
};

export default Hero;
