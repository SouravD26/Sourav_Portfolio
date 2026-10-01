import React, { useRef } from "react";

// Card with 3D tilt + spotlight following the cursor.
const TiltCard = ({ href, className = "", style, children }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 10}deg) rotateX(${(0.5 - y) * 10}deg) translateY(-6px)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onLeave = () => {
    ref.current.style.transform = "";
  };

  const props = {
    ref,
    style,
    className: `tilt-card ${className}`,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
  };
  return href ? (
    <a {...props} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <div {...props}>{children}</div>
  );
};

export default TiltCard;
