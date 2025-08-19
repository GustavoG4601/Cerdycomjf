// src/pages/Rastreo.jsx
import { useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "react-bootstrap";

export default function Rastreo() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="rastreo-page">
      <NavbarComponent />

      {/* HERO Rastreo Vehicular */}
      <section
        className="hero-rastreo"
        style={{
          backgroundImage: "url('/Fondo.png')",
        }}
      >
        <div className="overlay">
          <div
            className="hero-content text-center text-white px-3"
            style={{ maxWidth: "700px" }}
          >
            <h1
              className="fw-bold mb-4 display-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Rastreo <span className="highlight">Vehicular</span>
            </h1>
            <p
              className="lead"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              En <strong>CERDYCOM JF</strong> entendemos que la seguridad en la
              movilidad es tan importante como en el hogar o la empresa. Con
              nuestras soluciones de <strong>rastreo vehicular satelital</strong>, tendrás control total de tu flota o vehículo particular, garantizando protección y localización en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            ¿Cómo brindamos tranquilidad?
          </h2>
          <ul className="custom-list mb-4">
            <li data-aos="fade-up">Localización en tiempo real mediante GPS y plataformas en línea.</li>
            <li data-aos="fade-up">Monitoreo 24/7 desde cualquier dispositivo conectado a internet.</li>
            <li data-aos="fade-up">Alertas inteligentes por exceso de velocidad, desvío de ruta o zonas definidas.</li>
            <li data-aos="fade-up">Historial de recorridos y reportes detallados para análisis y control.</li>
            <li data-aos="fade-up">Optimización de rutas para mayor eficiencia en transporte y logística.</li>
          </ul>

          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            Nuestro compromiso
          </h2>
          <ul className="custom-checklist text-success fw-semibold">
            <li data-aos="fade-up">Ofrecer un rastreo confiable y preciso en todo momento.</li>
            <li data-aos="fade-up">Brindar soporte técnico permanente para garantizar tu tranquilidad.</li>
            <li data-aos="fade-up">Diseñar soluciones adaptadas a particulares, empresas y flotas corporativas.</li>
            <li data-aos="fade-up">Integrar innovación y nuevas tecnologías para un control inteligente.</li>
          </ul>

          {/* ✅ Botón WhatsApp */}
          <div className="text-center mt-5" data-aos="zoom-in">
            <Button
              href="https://wa.me/573001234567?text=Hola%20quiero%20información%20sobre%20Rastreo%20Vehicular"
              target="_blank"
              rel="noopener noreferrer"
              variant="success"
              size="lg"
            >
              Solicita aquí
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .hero-rastreo {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-rastreo .overlay {
          background: rgba(0,0,0,0.55);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
        }

        /* Título principal */
        .hero-content h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          text-shadow: 0 4px 16px rgba(0,0,0,0.6);
        }
        .hero-content .highlight {
          color: #28a745; /* Verde */
          text-shadow: 0 0 12px rgba(40,167,69,0.7);
        }

        h2 {
          border-left: 5px solid #28a745;
          padding-left: 15px;
        }
        .custom-list {
          list-style: none;
          padding-left: 0;
        }
        .custom-list li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 12px;
          font-size: 1rem;
        }
        .custom-list li::before {
          content: "◈";
          position: absolute;
          left: 0;
          color: #28a745;
          font-size: 0.9rem;
        }
        .custom-checklist {
          list-style: none;
          padding-left: 0;
        }
        .custom-checklist li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 12px;
          font-size: 1rem;
        }
        .custom-checklist li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #28a745;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
