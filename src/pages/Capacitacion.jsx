// src/pages/Capacitacion.jsx
import { useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Capacitacion() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="capacitacion-page">
      <NavbarComponent />

      {/* HERO Consejería y Servicios Generales */}
      <section
        className="hero-capacitacion"
        style={{
          backgroundImage: "url('/Fondo.png')", // imagen en /public
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
            >
              Consejería y <span className="highlight">Servicios Generales</span>
            </h1>
            <p
              className="lead"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              En <strong>CERDYCOM JF</strong> ofrecemos personal idóneo y
              capacitado en consejería, servicios generales y mantenimiento,
              garantizando orden, limpieza y apoyo integral en empresas,
              conjuntos residenciales e instituciones.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            Nuestros Servicios
          </h2>
          <ul className="custom-list mb-4">
            <li data-aos="fade-up">
              Consejería y manejo integral de portería en lugares que no requieren
              seguridad armada, con un enfoque administrativo y de servicio.
            </li>
            <li data-aos="fade-up">
              Aseo general en oficinas, hospitales, plantas industriales, casas,
              almacenes, centros comerciales, locales, bodegas y conjuntos.
            </li>
            <li data-aos="fade-up">
              Jardinería básica: corte de prados, setos, uso de podadoras y
              guadañadoras, entre otros.
            </li>
            <li data-aos="fade-up">
              Mantenimiento de aguas en piscinas y fuentes ornamentales con
              asesoría técnica y mecánica especializada.
            </li>
            <li data-aos="fade-up">
              Manejo integral de zonas comunes en empresas y conjuntos
              residenciales (pisos, jardines y sistemas de agua).
            </li>
          </ul>

          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            Compromiso CERDYCOM JF
          </h2>
          <ul className="custom-checklist text-success fw-semibold">
            <li data-aos="fade-up">Personal altamente capacitado y comprometido.</li>
            <li data-aos="fade-up">
              Cumplimiento estricto de protocolos de higiene y seguridad.
            </li>
            <li data-aos="fade-up">
              Asesoría constante para optimizar la calidad de los servicios.
            </li>
            <li data-aos="fade-up">
              Adaptación de soluciones a las necesidades de cada cliente.
            </li>
          </ul>

          {/* ✅ Botón WhatsApp */}
          <div className="text-center mt-5">
            <a
              href="https://wa.me/573177374434?text=Hola!%20Quiero%20más%20información%20sobre%20consejería%20y%20servicios%20generales."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solicita"
              data-aos="zoom-in"
            >
              Solicítalo Aquí
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .hero-capacitacion {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-capacitacion .overlay {
          background: rgba(0,0,0,0.55);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .hero-content h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          text-shadow: 0 4px 16px rgba(0,0,0,0.6);
        }
        .hero-content .highlight {
          color: #28a745;
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
        .btn-solicita {
          display: inline-block;
          background: #186e2c;
          color: white;
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: bold;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .btn-solicita:hover {
          background: #28a745;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
