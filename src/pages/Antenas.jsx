// src/pages/Antenas.jsx
import { useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Antenas() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="antenas-page">
      <NavbarComponent />

      {/* HERO Antenas e Internet */}
      <section
        className="hero-antenas"
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
              Antenas e <span className="highlight">Internet</span>
            </h1>
            <p className="lead" data-aos="fade-up" data-aos-delay="300">
              En <strong>CERDYCOM JF</strong> conectamos hogares, empresas y
              proyectos en zonas urbanas y rurales con enlaces estables, seguros
              y de alto rendimiento. Diseñamos, instalamos y administramos
              soluciones inalámbricas que te mantienen en línea sin
              interrupciones.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            ¿Cómo brindamos tranquilidad y conectividad?
          </h2>
          <ul className="custom-list mb-4">
            <li data-aos="fade-up">
              Enlaces inalámbricos <strong>punto a punto</strong> y{" "}
              <strong>punto a multipunto</strong> para campus, fincas y sedes
              remotas.
            </li>
            <li data-aos="fade-up">
              Distribución <strong>Wi-Fi profesional</strong> (mesh, roaming,
              control de ancho de banda y QoS) para hogares, oficinas y
              comercios.
            </li>
            <li data-aos="fade-up">
              Soluciones para <strong>zonas rurales</strong>, repetidores{" "}
              <strong>LTE/5G</strong> y antenas de alto alcance.
            </li>
            <li data-aos="fade-up">
              Rediseño e instalación de redes:{" "}
              <strong>cableado estructurado</strong>, switches <strong>PoE</strong>, UPS
              y segmentación.
            </li>
            <li data-aos="fade-up">
              <strong>Monitoreo y gestión remota</strong> con alertas para
              asegurar disponibilidad 24/7.
            </li>
          </ul>

          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            Nuestro compromiso
          </h2>
          <ul className="custom-checklist text-success fw-semibold">
            <li data-aos="fade-up">
              <strong>Cobertura, estabilidad y baja latencia</strong> verificables con
              pruebas de sitio.
            </li>
            <li data-aos="fade-up">
              Equipos de <strong>marcas líderes</strong> configurados por técnicos
              certificados.
            </li>
            <li data-aos="fade-up">
              <strong>Soporte permanente</strong>, SLA y mantenimiento preventivo.
            </li>
            <li data-aos="fade-up">
              Soluciones <strong>escalables y seguras</strong> (encriptación, VLAN,
              firewalls y control de invitados).
            </li>
          </ul>

          {/* ✅ Botón WhatsApp (lo conservamos tal cual) */}
          <div className="text-center mt-5">
            <a
              href="https://wa.me/573177374434?text=Hola!%20Quiero%20más%20información%20sobre%20antenas%20e%20internet."
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
        .hero-antenas {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-antenas .overlay {
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

        /* Título principal (igual a Services1.jsx) */
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

        /* Botón personalizado (lo dejamos igual que tenías) */
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
