import React from "react";
import NavbarComp from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-dark">
      <NavbarComp />
      <main>
        <Hero />
        <section id="portfolio" className="py-5">
          <div className="container">
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
            <Portfolio />
          </div>
        </section>

        <section id="about" className="py-5">
          <div className="container">
            <h2 className="section-title">
              About <span>Me</span>
            </h2>
            <About />
          </div>
        </section>

        <section id="resume" className="py-5">
          <div className="container">
            <h2 className="section-title">
              My <span>Resume</span>
            </h2>
            <Resume />
          </div>
        </section>

        <section id="blog" className="py-5">
          <div className="container">
            <h2 className="section-title">
              Personal <span>Games</span>
            </h2>
            <Blog />
          </div>
        </section>

        <section id="contact" className="py-5">
          <div className="container">
            <h2 className="section-title">
              Get <span>In Touch</span>
            </h2>
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
