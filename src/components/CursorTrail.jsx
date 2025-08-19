import React, { useEffect, useState } from "react";

export default function CursorTrail() {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newDot = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrail((prev) => [...prev.slice(-10), newDot]); // máximo 15 puntitos
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {trail.map((dot, index) => (
        <span
          key={dot.id}
          className="cursor-dot"
          style={{
            top: dot.y + "px",
            left: dot.x + "px",
            opacity: (index + 1) / trail.length, // los últimos más visibles
          }}
        />
      ))}

      <style>{`
        .cursor-dot {
          position: fixed;
          width: 12px;
          height: 12px;
          background: #00e5ff;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          filter: blur(4px); /* difuminado brillante */
          z-index: 1000;
        }
      `}</style>
    </>
  );
}
