// src/pages/Services1.jsx
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";

export default function Services1() {
  return (
    <div className="services1-page">
      <NavbarComponent />

      {/* Hero Seguridad Electrónica */}
      <section className="hero-section">
        <div className="hero-overlay-glass">
          <Container>
            <div className="hero-content" data-aos="fade-right">
              <h6 className="badge-premium mb-3">COMPROMISO TOTAL</h6>
              <h1 className="display-4 fw-bold text-white mb-4">
                Seguridad <span>Electrónica</span>
              </h1>
              <p className="hero-desc text-white-50">
                En <strong>CERDYCOM JF</strong> entendemos que la seguridad es
                sinónimo de tranquilidad. Por eso diseñamos soluciones
                electrónicas y físicas que se adaptan a las necesidades de cada
                cliente, brindando protección confiable para personas, bienes e
                información.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Texto adicional debajo */}
      <section className="info-section py-5">
        <Container className="py-5">
          <Row className="g-5">
            <Col lg={7}>
              <div className="glass-info-card p-5" data-aos="fade-up">
                <h3 className="section-title text-white fw-bold mb-4">
                  ¿Cómo brindamos <span>Tranquilidad?</span>
                </h3>
                <ul className="premium-list">
                  <li data-aos="fade-up" data-aos-delay="100">
                    <div className="list-dot"></div>
                    Sistemas integrales de seguridad que permiten supervisar, controlar y proteger en todo momento.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="200">
                    <div className="list-dot"></div>
                    Monitoreo inteligente con tecnologías de última generación para prevenir riesgos.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <div className="list-dot"></div>
                    Automatización e integración de dispositivos que generan ambientes seguros y confortables.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="400">
                    <div className="list-dot"></div>
                    Asesoría especializada desde la planeación hasta la implementación de proyectos de seguridad.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="500">
                    <div className="list-dot"></div>
                    Capacitación y entrenamiento para aprovechar al máximo cada sistema.
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5}>
              <div className="glass-info-card p-5 h-100" data-aos="fade-left">
                <h3 className="section-title text-white fw-bold mb-4">
                  Nuestro <span>Compromiso</span>
                </h3>
                <ul className="premium-list">
                  <li data-aos="fade-up" data-aos-delay="600">
                    <div className="list-dot bg-success"></div>
                    Garantizar confianza en cada solución entregada.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="700">
                    <div className="list-dot bg-success"></div>
                    Brindar soporte técnico permanente y oportuno.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="800">
                    <div className="list-dot bg-success"></div>
                    Adaptar cada proyecto a las necesidades reales de tu entorno.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="900">
                    <div className="list-dot bg-success"></div>
                    Innovar constantemente para ofrecer siempre la mejor tecnología.
                  </li>
                </ul>
                <div className="mt-5 p-4 cta-mini-glass text-center">
                  <p className="mb-0 text-white-50 small italic">
                    "Convertimos la seguridad en tranquilidad para ti, tu familia y tu empresa."
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />

      <style>{`
        .services1-page {
          background: url('/media/ui/Fondo.webp') center/cover no-repeat fixed;
          min-height: 100vh;
        }

        .hero-section {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
        }

        .hero-overlay-glass {
          width: 100%;
          min-height: 60vh;
          display: flex;
          align-items: center;
          background: linear-gradient(0deg, rgba(5, 5, 5, 0.7) 0%, rgba(5, 5, 5, 0.3) 100%);
        }

        .hero-content {
          max-width: 800px;
        }

        .display-4 span {
          color: #4CAF50;
        }

        .hero-desc {
          font-size: 1.25rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .badge-premium {
          display: inline-block;
          background: rgba(76, 175, 80, 0.1);
          color: #4CAF50;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 0.7rem;
          letter-spacing: 2px;
          border: 1px solid rgba(76, 175, 80, 0.2);
        }

        .info-section {
          background: linear-gradient(180deg, rgba(10, 10, 10, 0.6) 0%, rgba(5, 5, 5, 0.4) 100%);
          backdrop-filter: blur(15px);
        }

        .glass-info-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 40px;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .section-title span {
          color: #4CAF50;
        }

        .premium-list {
          list-style: none;
          padding: 0;
        }

        .premium-list li {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 20px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.05rem;
          line-height: 1.5;
        }

        .list-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4CAF50;
          margin-top: 8px;
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
        }

        .cta-mini-glass {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
        }

        @media (max-width: 991px) {
          .hero-section { min-height: 50vh; }
          .hero-overlay-glass { min-height: 50vh; }
          .display-4 { font-size: 2.5rem; }
          .hero-content { padding: 30px 15px; }
        }
      `}</style>
    </div>
  );
}
