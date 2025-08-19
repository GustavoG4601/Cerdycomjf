import React, { useState } from "react";
import { FaWifi, FaCamera, FaVideo, FaBolt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaSolarPanel } from "react-icons/fa6";

export default function FloatingIcons() {
  const [clickedIcon, setClickedIcon] = useState(null);

  const icons = [
    <FaWifi />,
    <FaCamera />,
    <FaVideo />,
    <MdSecurity />,
    <FaSolarPanel />,
    <FaBolt />,
  ];

  const handleClick = (index) => {
    setClickedIcon(index);
    setTimeout(() => setClickedIcon(null), 600); // quita el efecto después
  };

  return (
    <>
      <div className="floating-background">
        {icons.map((icon, i) => (
          <span
            key={i}
            className={`floating-icon icon-${i} ${
              clickedIcon === i ? "explode" : ""
            }`}
            onClick={() => handleClick(i)}
          >
            {icon}
          </span>
        ))}
      </div>

      <style>{`
        .floating-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none; 
          z-index: 0;
          overflow: hidden;
        }

        .floating-icon {
          position: absolute;
          font-size: 2.7rem;
          color: rgba(255, 255, 255, 0.5);
          text-shadow: 0 0 10px rgba(0, 255, 128, 0.6);
          animation: float 15s infinite ease-in-out, glow 2.5s infinite alternate;
          cursor: pointer;
          pointer-events: auto; 
          transition: transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }

        /* Hover / Touch */
        .floating-icon:hover {
          color: #4CAF50;
          transform: scale(1.5) rotate(10deg);
          box-shadow: 0 0 25px 12px rgba(76, 175, 80, 0.8);
          border-radius: 50%;
        }

        /* Posiciones iniciales */
        .icon-0 { top: 20%; left: 10%; animation-duration: 18s; }
        .icon-1 { top: 60%; left: 70%; animation-duration: 20s; }
        .icon-2 { top: 80%; left: 30%; animation-duration: 22s; }
        .icon-3 { top: 40%; left: 85%; animation-duration: 24s; }
        .icon-4 { top: 15%; left: 50%; animation-duration: 26s; }
        .icon-5 { top: 75%; left: 20%; animation-duration: 28s; }

        /* Flotando */
        @keyframes float {
          0%   { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25%  { transform: translateY(-25px) translateX(15px) rotate(15deg); }
          50%  { transform: translateY(25px) translateX(-15px) rotate(-15deg); }
          75%  { transform: translateY(-20px) translateX(20px) rotate(10deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }

        /* Glow dinámico siempre activo */
        @keyframes glow {
          0% { text-shadow: 0 0 10px #4CAF50, 0 0 20px #4CAF50; }
          50% { text-shadow: 0 0 20px #81C784, 0 0 40px #81C784; }
          100% { text-shadow: 0 0 10px #4CAF50, 0 0 20px #4CAF50; }
        }

        /* Efecto explosión al click */
        .floating-icon.explode::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          background: rgba(76, 175, 80, 0.8);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: explode 0.6s forwards;
          z-index: -1;
        }

        @keyframes explode {
          from {
            width: 0;
            height: 0;
            opacity: 1;
          }
          to {
            width: 90px;
            height: 90px;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
