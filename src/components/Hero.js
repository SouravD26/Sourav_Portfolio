import React, { useEffect, useState } from "react";

const TEXT_LINES = ["Hello, I'm", "Sourav Dutta"];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    // If we've finished all lines, stop.
    if (lineIndex >= TEXT_LINES.length) return;

    const currentLine = TEXT_LINES[lineIndex] ?? "";

    // If there are remaining characters in the current line, type next char.
    if (charIndex < currentLine.length) {
      const t = setTimeout(() => {
        setCurrentText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(t);
    }

    // Current line finished: wait, then move to next line (or stop).
    const t = setTimeout(() => {
      if (lineIndex + 1 < TEXT_LINES.length) {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
        setCurrentText((prev) => prev + "\n");
      } else {
        // All lines done — you can reset here to loop, or just stop.
        // To loop, uncomment:
        // setLineIndex(0);
        // setCharIndex(0);
        // setCurrentText("");
      }
    }, 800);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex]);

  return (
    <header
      id="home"
      className="hero d-flex align-items-center"
      style={{ color: "#fff" }}
    >
      <div className="overlay" />
      <div className="container text-center hero-content">
        <pre className="typing-text text-white">{currentText}</pre>

        <p className="lead">Web Developer</p>

        <div className="mt-4">
          <a
            className="btn btn-outline-light me-2 text-white"
            href="/SouravDutta_Resume.pdf"
            download
          >
            Download Resume
          </a>
          <a className="btn btn-success text-white" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
