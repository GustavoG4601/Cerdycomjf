// src/pages/Services1.jsx
import { useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services1() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="services1-page">
      <NavbarComponent />

      {/* Hero Seguridad Electrónica */}
      <section
        className="hero-section"
        style={{
          backgroundImage:
            "url('https://sdmntprwestus2.oaiusercontent.com/files/00000000-e45c-61f8-8d20-13a777fd55e2/raw?se=2025-08-16T20%3A18%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=3c976781-9984-5071-abd7-be45905aad48&skoid=7399a3a4-0259-4d43-bcd6-a56ceeb4c28b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-16T00%3A48%3A33Z&ske=2025-08-17T00%3A48%3A33Z&sks=b&skv=2024-08-04&sig=%2BYtY15iH7Ne3GcrWFYiwMT1siTu%2BnW7JmoRjQjozN7c%3D')",
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1
              className="fw-bold text-white mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Seguridad Electrónica
            </h1>
            <p
              className="text-white lead"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              En <strong>CERDYCOM JF</strong> entendemos que la seguridad es
              sinónimo de tranquilidad. Por eso diseñamos soluciones
              electrónicas y físicas que se adaptan a las necesidades de cada
              cliente, brindando protección confiable para personas, bienes e
              información.
            </p>
          </div>
        </div>
      </section>

      {/* Texto adicional debajo */}
      <section className="info-section">
        <div className="container">
          <p data-aos="fade-up" data-aos-delay="200">
            <strong>¿Cómo brindamos tranquilidad?</strong>
          </p>
          <ul>
            <li data-aos="fade-up" data-aos-delay="300">
              Sistemas integrales de seguridad que permiten supervisar,
              controlar y proteger en todo momento.
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              Monitoreo inteligente con tecnologías de última generación para
              prevenir riesgos.
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              Automatización e integración de dispositivos que generan
              ambientes seguros y confortables.
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              Asesoría especializada desde la planeación hasta la implementación
              de proyectos de seguridad.
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              Capacitación y entrenamiento para aprovechar al máximo cada
              sistema.
            </li>
          </ul>

          <p data-aos="fade-up" data-aos-delay="800">
            <strong>Nuestro compromiso</strong>
          </p>
          <ul>
            <li data-aos="fade-up" data-aos-delay="900">
              Garantizar confianza en cada solución entregada.
            </li>
            <li data-aos="fade-up" data-aos-delay="1000">
              Brindar soporte técnico permanente y oportuno.
            </li>
            <li data-aos="fade-up" data-aos-delay="1100">
              Adaptar cada proyecto a las necesidades reales de tu entorno.
            </li>
            <li data-aos="fade-up" data-aos-delay="1200">
              Innovar constantemente para ofrecer siempre la mejor tecnología.
            </li>
          </ul>

          <p data-aos="fade-up" data-aos-delay="1300">
            En pocas palabras: convertimos la seguridad en tranquilidad para ti,
            tu familia y tu empresa.
          </p>
        </div>
      </section>

      <Footer />

      <style>{`
        .services1-page {
          background: #f8f9fa;
        }
        .hero-section {
          position: relative;
          background-size: cover;
          background-position: right;
          min-height: 70vh;
          display: flex;
          align-items: center;
        }
        .hero-overlay {
          background: rgba(0,0,0,0.55);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .hero-content {
          max-width: 700px;
          padding: 50px;
        }
        .info-section {
          padding: 50px 20px;
          background: white;
          color: #333;
        }
        .info-section ul {
          margin-left: 20px;
        }
        .info-section li {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
}
