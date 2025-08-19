import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // 👈 agregado

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      'Soluciones en Seguridad',
      'Rastreo Vehicular Inteligente',
      'Energía Fotovoltaica',
      'Tecnología a tu Alcance',
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const navigate = useNavigate(); // 👈 agregado

  return (
    <section
      id="hero"
      className="hero-section d-flex align-items-center justify-content-center text-center text-white"
    >
      <Container style={{ zIndex: 2 }}>
        {/* Logo animado */}
        <img
          src="/logo.png"
          alt="CerdycomJF"
          className="hero-logo animate__animated animate__fadeInDown"
        />

        {/* Texto dinámico */}
        <h1 className="display-4 fw-bold mb-3 hero-title">
          {text}
          <Cursor />
        </h1>

        {/* Subtítulo */}
        <p className="lead mb-4 hero-subtitle">
          Innovación, seguridad y energía sostenible para tu tranquilidad.
        </p>

        {/* Botones CTA */}
        <div className="d-flex gap-3 justify-content-center">
          <Button 
            className="hero-btn-primary"
            onClick={() => navigate("/services1/Seguridad")} // 👈 redirige a servicios
          >
            Nuestros Servicios
          </Button>

          <Button 
            className="hero-btn-outline"
            onClick={() => navigate("/productos")} // 👈 redirige a productos
          >
            Ver Productos
          </Button>
        </div>
      </Container>

      {/* Degradados para transición */}
      <div className="hero-fade-top"></div>
      <div className="hero-fade-bottom"></div>

      {/* Partículas flotantes */}
      <div className="particles"></div>

      <style>{`
        .hero-section {
          background: url("/hero-bg.jpg") center/cover no-repeat fixed;
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* Logo */
        .hero-logo {
          max-height: 110px;
          margin-bottom: 20px;
        }

        /* Texto principal */
        .hero-title {
          animation: glow 2s infinite alternate;
          text-shadow: 0 0 10px rgba(76, 175, 80, 0.8);
        }

        /* Subtítulo */
        .hero-subtitle {
          animation: fadeIn 2s ease-in-out;
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Botones */
        .hero-btn-primary {
          background: linear-gradient(45deg, #1B5E20, #4CAF50);
          border: none;
          padding: 12px 30px;
          font-weight: bold;
          border-radius: 30px;
          transition: all 0.3s ease;
        }
        .hero-btn-primary:hover {
          background: linear-gradient(45deg, #4CAF50, #1B5E20);
          box-shadow: 0 0 20px rgba(76, 175, 80, 0.8);
          transform: scale(1.05);
        }

        .hero-btn-outline {
          padding: 12px 30px;
          font-weight: bold;
          border-radius: 30px;
          border: 2px solid #fff;
          background: transparent;
          color: #fff;
          transition: all 0.3s ease;
        }
        .hero-btn-outline:hover {
          background: #fff;
          color: #1B5E20;
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255,255,255,0.6);
        }

        /* Fade superior e inferior */
        .hero-fade-top {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 40px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.85), transparent);
        }
        .hero-fade-bottom {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 40px;
          background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
        }

        /* Glow typing */
        @keyframes glow {
          from { text-shadow: 0 0 10px #4CAF50, 0 0 20px #1B5E20; }
          to { text-shadow: 0 0 20px #81C784, 0 0 40px #4CAF50; }
        }

        @keyframes fadeIn {
          0% {opacity: 0;}
          100% {opacity: 1;}
        }

        /* Partículas flotantes */
        .particles {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.05) 2px, transparent 3px);
          background-size: 40px 40px;
          animation: moveParticles 30s linear infinite;
          z-index: 0;
        }
        @keyframes moveParticles {
          from { background-position: 0 0; }
          to { background-position: 100px 200px; }
        }
      `}</style>
    </section>
  );
}
