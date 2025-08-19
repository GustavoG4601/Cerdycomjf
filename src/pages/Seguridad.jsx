// src/pages/Services1.jsx
import { useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services1() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="services1-page">
      <NavbarComponent />

      {/* HERO */}
      <section
        className="hero-services"
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
              Seguridad <span className="highlight">Electrónica</span>
            </h1>
            <p className="lead" data-aos="fade-up" data-aos-delay="300">
              En <strong>CERDYCOM JF</strong> entendemos que la seguridad es
              sinónimo de tranquilidad. Por eso diseñamos soluciones
              electrónicas y físicas que se adaptan a las necesidades de cada
              cliente, brindando protección confiable para personas, bienes e
              información.
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
            <li data-aos="fade-up">
              Sistemas integrales de seguridad que permiten supervisar, controlar
              y proteger en todo momento.
            </li>
            <li data-aos="fade-up">
              Monitoreo inteligente con tecnologías de última generación para
              prevenir riesgos.
            </li>
            <li data-aos="fade-up">
              Automatización e integración de dispositivos que generan ambientes
              seguros y confortables.
            </li>
            <li data-aos="fade-up">
              Asesoría especializada desde la planeación hasta la implementación
              de proyectos de seguridad.
            </li>
            <li data-aos="fade-up">
              Capacitación y entrenamiento para aprovechar al máximo cada
              sistema.
            </li>
          </ul>

          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            Nuestro compromiso
          </h2>
          <ul className="custom-checklist text-success fw-semibold">
            <li data-aos="fade-up">Garantizar confianza en cada solución entregada.</li>
            <li data-aos="fade-up">
              Brindar soporte técnico permanente y oportuno.
            </li>
            <li data-aos="fade-up">
              Adaptar cada proyecto a las necesidades reales de tu entorno.
            </li>
            <li data-aos="fade-up">
              Innovar constantemente para ofrecer siempre la mejor tecnología.
            </li>
          </ul>

          {/* Botón Solicita Aquí */}
          <div className="text-center mt-5" data-aos="zoom-in">
            <a
              href="https://wa.me/573177374434?text=Hola!%20Quiero%20más%20información%20sobre%20Seguridad%20Electrónica."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg px-4"
            >
              Solicita aquí
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .hero-services {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-services .overlay {
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
