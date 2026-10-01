import React, { useEffect, useState } from "react";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["portfolio", "Projects"],
  ["blog", "Games"],
  ["contact", "Contact"],
];

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "";
      for (const [id] of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav-glass ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#home">
          <span className="brand-mark">SD</span>
          <span className="brand-text">Sourav Dutta</span>
        </a>
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComp;
