import React from "react";
import NavbarComp from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleField from "./components/ParticleField";
import Cursor from "./components/Cursor";
import ClickRipple from "./components/ClickRipple";
import useReveal from "./hooks/useReveal";

const Section = ({ id, index, title, accent, children }) => (
  <section id={id} className="section">
    <div className="container-x">
      <h2 className="section-title reveal">
        <span className="section-index">{index}.</span> {title} <span className="accent">{accent}</span>
      </h2>
      {children}
    </div>
  </section>
);

function App() {
  useReveal();

  return (
    <div className="app">
      <Cursor />
      <ClickRipple />
      <ParticleField />
      <NavbarComp />
      <main>
        <Hero />
        <Section id="about" index="01" title="About" accent="Me">
          <About />
        </Section>
        <Section id="skills" index="02" title="Tech" accent="Stack">
          <Skills />
        </Section>
        <Section id="experience" index="03" title="Experience &" accent="Education">
          <Resume />
        </Section>
        <Section id="portfolio" index="04" title="Featured" accent="Projects">
          <Portfolio />
        </Section>
        <Section id="blog" index="05" title="Personal" accent="Games">
          <Blog />
        </Section>
        <Section id="contact" index="06" title="Get In" accent="Touch">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
