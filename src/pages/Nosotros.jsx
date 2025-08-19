// src/pages/Nosotros.jsx
import { useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "react-bootstrap";

export default function Nosotros() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="nosotros-page bg-light">
      <NavbarComponent />

      {/* HERO */}
      <section
        className="hero-nosotros"
        style={{
          backgroundImage: "url('/Fondo.png')",
        }}
      >
        <div className="overlay text-center text-white">
          <h1 data-aos="fade-up" className="fw-bold display-4">
            Nosotros
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="lead">
            Conoce más sobre quiénes somos, nuestra misión y visión
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-5">
        <div className="container">
          {/* QUIÉNES SOMOS */}
          <Card className="shadow-lg border-0 mb-5" data-aos="fade-up">
            <Card.Body>
              <h2 className="fw-bold text-success mb-3">Quiénes Somos</h2>
              <p>
                <strong>CERDYCOM JF SAS</strong> es una empresa dedicada a la
                seguridad electrónica para hogares y negocios, a través de la
                instalación de alarmas, circuito cerrado de cámaras, rastreo
                satelital vehicular y más. Ofrecemos soluciones innovadoras en
                seguridad y control de accesos, adaptándonos a las necesidades
                de cada cliente.
              </p>
              <p>
                También realizamos proyectos de seguridad física, instalación de
                personal idóneo y asesoría integral en sistemas de seguridad,
                actuando como contratista principal o subcontratista de grandes
                proyectos.
              </p>
            </Card.Body>
          </Card>

          {/* QUÉ HACEMOS */}
          <Card className="shadow-lg border-0 mb-5" data-aos="fade-up">
            <Card.Body>
              <h2 className="fw-bold text-success mb-3">Qué Hacemos</h2>
              <p>
                La cámara de comercio de Cartagena certifica que el objeto
                social de <strong>CERDYCOM JF SAS</strong> incluye:
              </p>
              <ul className="custom-list mb-4">
                <li>Recepción de todo tipo de datos en red</li>
                <li>Controles de acceso</li>
                <li>
                  Importación y exportación de equipos de seguridad y control de
                  accesos
                </li>
                <li>Coordinación de todo tipo de comunicaciones</li>
                <li>
                  Manejo de datos por sistemas como telefonía, celular, radio,
                  avantel, gprs, etc.
                </li>
              </ul>

              <h5 className="fw-bold text-success">Nuestros Diferenciales</h5>
              <ul className="custom-checklist">
                <li>Precios competitivos</li>
                <li>Más de 10 años de experiencia</li>
                <li>Lo último en tecnología CCTV y alarmas</li>
                <li>Soporte técnico especializado</li>
                <li>Respaldo de marcas reconocidas</li>
                <li>Personal altamente capacitado</li>
              </ul>
            </Card.Body>
          </Card>

          {/* VISIÓN Y MISIÓN */}
          <div className="row g-4 mb-5">
            <div className="col-md-6" data-aos="fade-right">
              <Card className="shadow-lg border-0 h-100">
                <Card.Body>
                  <h2 className="fw-bold text-success mb-3">Visión</h2>
                  <p>
                    Ser la primera opción en seguridad a nivel nacional,
                    integrando soluciones confiables, innovadoras y adaptadas a
                    las necesidades de nuestros clientes, con respaldo en la
                    tecnología y el desarrollo sostenible.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <Card className="shadow-lg border-0 h-100">
                <Card.Body>
                  <h2 className="fw-bold text-success mb-3">Misión</h2>
                  <p>
                    Brindamos servicios integrales de seguridad electrónica y
                    física, ofreciendo confianza y tranquilidad a nuestros
                    clientes, mediante soluciones innovadoras, capacitación
                    constante y asesoría técnica especializada.
                  </p>
                  <p>
                    Nos enfocamos en responsabilidad social empresarial y en
                    superar las expectativas de nuestros clientes.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* POLÍTICA DE CALIDAD */}
          <Card className="shadow-lg border-0 mb-5" data-aos="fade-up">
            <Card.Body>
              <h2 className="fw-bold text-success mb-3">Política de Calidad</h2>
              <p>
                Nuestro compromiso es ofrecer productos y servicios oportunos,
                innovadores y de alta calidad que satisfagan las necesidades de
                nuestros clientes. Basados en responsabilidad social,
                cumplimiento legal, personal capacitado y mejora continua.
              </p>
            </Card.Body>
          </Card>

          {/* VALORES */}
          <Card className="shadow-lg border-0" data-aos="fade-up">
            <Card.Body>
              <h2 className="fw-bold text-success mb-3">Valores</h2>
              <ul className="custom-list">
                <li>Responsabilidad</li>
                <li>Compromiso</li>
                <li>Honestidad</li>
                <li>Innovación</li>
                <li>Transparencia</li>
                <li>Trabajo en equipo</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </section>

      <Footer />

      {/* ESTILOS PERSONALIZADOS */}
      <style>{`
        /* ✅ Forzar Montserrat en toda la página Nosotros */
        .nosotros-page, 
        .nosotros-page * {
          font-family: 'Montserrat', sans-serif !important;
        }

        .hero-nosotros {
          position: relative;
          background-size: cover;
          background-position: center;
          height: 55vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-nosotros .overlay {
          background: rgba(0,0,0,0.6);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .custom-list {
          list-style: none;
          padding-left: 0;
        }
        .custom-list li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
        }
        .custom-list li::before {
          content: "◈";
          position: absolute;
          left: 0;
          color: #28a745;
        }
        .custom-checklist {
          list-style: none;
          padding-left: 0;
        }
        .custom-checklist li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 8px;
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
