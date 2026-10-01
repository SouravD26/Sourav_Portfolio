import React, { useEffect, useRef } from "react";

// Dot that follows the pointer exactly + a ring that trails behind it.
const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.body.classList.add("custom-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...pos };
    let raf;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      const hovering = e.target.closest("a, button, input, textarea, .tilt-card");
      ring.current.classList.toggle("hover", !!hovering);
      dot.current.classList.add("visible");
      ring.current.classList.add("visible");
    };
    const onDown = () => ring.current.classList.add("down");
    const onUp = () => ring.current.classList.remove("down");
    const onLeave = () => {
      dot.current.classList.remove("visible");
      ring.current.classList.remove("visible");
    };

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.15;
      ringPos.y += (pos.y - ringPos.y) * 0.15;
      ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true">
        <span />
      </div>
      <div ref={dot} className="cursor-dot" aria-hidden="true">
        <span />
      </div>
    </>
  );
};

export default Cursor;
