// src/pages/Solar.jsx
import { useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Solar() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="solar-page">
      <NavbarComponent />

      {/* HERO Energía Fotovoltaica */}
      <section
        className="hero-solar"
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
              Energía <span className="highlight">Fotovoltaica</span>
            </h1>
            <p
              className="lead"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              En <strong>CERDYCOM JF</strong> creemos en el poder de la
              tecnología como camino para lograr una vida sostenible. La energía
              solar fotovoltaica es hoy la fuente más limpia, renovable y
              económica de la historia, capaz de transformar hogares, empresas y
              comunidades.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            ¿Cómo brindamos tranquilidad y sostenibilidad?
          </h2>
          <ul className="custom-list mb-4">
            <li data-aos="fade-up">
              Sistemas solares para autoconsumo, que reducen tus costos de
              energía.
            </li>
            <li data-aos="fade-up">
              Parques solares para proyectos a gran escala, confiables y
              sostenibles.
            </li>
            <li data-aos="fade-up">
              Eficiencia energética: optimizamos recursos para un mejor
              rendimiento.
            </li>
            <li data-aos="fade-up">
              Energía solar para copropiedades: soluciones compartidas para
              comunidades y edificios.
            </li>
          </ul>

          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            Nuestro compromiso
          </h2>
          <ul className="custom-checklist text-success fw-semibold">
            <li data-aos="fade-up">
              Ofrecer proyectos con altos estándares de eficiencia,
              confiabilidad y sostenibilidad.
            </li>
            <li data-aos="fade-up">
              Brindar soluciones adaptadas a necesidades particulares,
              empresariales e industriales.
            </li>
            <li data-aos="fade-up">
              Generar valor cuidando el medio ambiente y mejorando la calidad de
              vida.
            </li>
            <li data-aos="fade-up">
              Innovar en tecnologías limpias para un futuro más verde.
            </li>
          </ul>

          {/* ✅ Botón WhatsApp */}
          <div className="text-center mt-5" data-aos="zoom-in">
            <a
              href="https://wa.me/573177374434?text=Hola!%20Quiero%20más%20información%20sobre%20energía%20solar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg px-4"
            >
              Solicítalo Aquí
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .hero-solar {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-solar .overlay {
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
