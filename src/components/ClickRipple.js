import { useEffect } from "react";

const SPARKS = 8;

// Spawns an expanding ring + sparks wherever the user clicks or taps.
const ClickRipple = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onDown = (e) => {
      const burst = document.createElement("div");
      burst.className = "click-burst";
      burst.style.left = `${e.clientX}px`;
      burst.style.top = `${e.clientY}px`;
      const hue = Math.floor(Math.random() * 360);
      burst.style.setProperty("--h", hue);

      burst.innerHTML = '<span class="burst-ring"></span><span class="burst-ring delay"></span>';
      for (let i = 0; i < SPARKS; i++) {
        const s = document.createElement("span");
        s.className = "burst-spark";
        const angle = (i / SPARKS) * Math.PI * 2;
        const dist = 28 + Math.random() * 14;
        s.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
        s.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
        s.style.setProperty("--sh", hue + i * (360 / SPARKS));
        burst.appendChild(s);
      }

      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 800);
    };

    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);

  return null;
};

export default ClickRipple;
