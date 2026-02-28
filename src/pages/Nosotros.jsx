// src/pages/Nosotros.jsx
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, Container } from "react-bootstrap";

export default function Nosotros() {


  return (
    <div className="nosotros-page">
      <NavbarComponent />

      {/* Hero Section */}
      <section className="hero-product-detail">
        <div className="hero-overlay-glass">
          <Container>
            <div className="text-center" data-aos="fade-up">
              <h1 className="display-3 fw-extrabold text-white mb-3">
                Nuestra <span>Historia</span>
              </h1>
              <p className="lead text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
                Más de una década liderando soluciones de seguridad y tecnología en la región.
                Comprometidos con la excelencia y la protección de su tranquilidad.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Contenido con Glassmorphism */}
      <Container className="py-5 product-container">
        {/* QUIÉNES SOMOS */}
        <Card className="glass-card-info mb-5" data-aos="fade-up">
          <Card.Body className="p-4 p-md-5">
            <h2 className="section-title-premium mb-4">
              Quiénes <span>Somos</span>
            </h2>
            <div className="text-white-50 lead-custom">
              <p>
                <strong>CERDYCOM JF SAS</strong> es una organización líder en el sector de la seguridad electrónica,
                especializada en la protección inteligente de hogares y complejos empresariales.
                Nuestra trayectoria se define por la integración de sistemas de vanguardia, desde alarmas inteligentes
                hasta redes de rastreo satelital de alta precisión.
              </p>
              <p>
                No solo instalamos equipos; diseñamos ecosistemas de seguridad física y digital con personal técnico
                altamente calificado, actuando como el aliado estratégico que su proyecto necesita.
              </p>
            </div>
          </Card.Body>
        </Card>

        {/* QUÉ HACEMOS & DIFERENCIALES */}
        <div className="row g-4 mb-5">
          <div className="col-lg-7" data-aos="fade-right">
            <Card className="glass-card-info h-100">
              <Card.Body className="p-4 p-md-5">
                <h3 className="section-title-premium fs-2 mb-4">Qué <span>Hacemos</span></h3>
                <p className="text-white-50">Nuestro objeto social, certificado por la Cámara de Comercio de Cartagena, nos faculta para ofrecer un espectro integral de servicios:</p>
                <ul className="premium-list">
                  <li>Procesamiento y gestión de datos críticos en red.</li>
                  <li>Sistemas avanzados de Control de Acceso Biométrico.</li>
                  <li>Importación y distribución de hardware de seguridad premium.</li>
                  <li>Coordinación de ecosistemas de comunicaciones industriales.</li>
                  <li>Gestión de datos vía GPRS, Radio y Redes Digitales.</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-5" data-aos="fade-left">
            <Card className="glass-card-info h-100 bg-gradient-success">
              <Card.Body className="p-4 p-md-5">
                <h3 className="text-white fw-bold mb-4">Nuestros Diferenciales</h3>
                <ul className="premium-checklist">
                  <li>Respaldo de marcas líderes globales.</li>
                  <li>Más de 10 años de experiencia comprobada.</li>
                  <li>Tecnología CCTV de última generación.</li>
                  <li>Personal técnico certificado y constante.</li>
                  <li>Soporte y mantenimiento garantizado.</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* VISIÓN Y MISIÓN */}
        <div className="row g-4 mb-5">
          <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <Card className="glass-card-info h-100 text-center">
              <Card.Body className="p-4 p-md-5">
                <div className="icon-wrap-premium mb-3 mx-auto">👁️</div>
                <h3 className="text-white fw-bold mb-3">Visión</h3>
                <p className="text-white-50">
                  Consolidarnos como la opción preferente en seguridad tecnológica a nivel nacional,
                  impulsando la innovación sostenible y la confianza absoluta en cada uno de nuestros sistemas integrados.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <Card className="glass-card-info h-100 text-center">
              <Card.Body className="p-4 p-md-5">
                <div className="icon-wrap-premium mb-3 mx-auto">✅</div>
                <h3 className="text-white fw-bold mb-3">Misión</h3>
                <p className="text-white-50">
                  Brindar tranquilidad a través de soluciones robustas de seguridad electrónica y física,
                  apoyados en un equipo humano resiliente y asesoría técnica de primer nivel que supere
                  los estándares del mercado.
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* POLÍTICA DE CALIDAD & VALORES */}
        <div className="row g-4">
          <div className="col-lg-8" data-aos="fade-up">
            <Card className="glass-card-info h-100">
              <Card.Body className="p-4 p-md-5 text-center">
                <h3 className="text-white fw-bold mb-4">Política de Calidad</h3>
                <p className="text-white-50 lead">
                  "Nuestro compromiso es la excelencia operativa. Entregamos productos y servicios oportunos
                  mediante la mejora continua de nuestros procesos y el estricto cumplimiento legal,
                  siempre bajo un marco de responsabilidad social empresarial."
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <Card className="glass-card-info h-100">
              <Card.Body className="p-4 p-md-5">
                <h3 className="text-white fw-bold mb-4">Valores</h3>
                <div className="d-flex flex-wrap gap-2">
                  {['Responsabilidad', 'Compromiso', 'Honestidad', 'Innovación', 'Transparencia', 'Sinergia'].map((val, i) => (
                    <span key={i} className="value-badge">{val}</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      <Footer />

      <style>{`
        .nosotros-page {
          background: url('/media/ui/Fondo.webp') center/cover no-repeat fixed;
          min-height: 100vh;
          color: #fff;
        }

        .hero-product-detail {
          min-height: 50vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-overlay-glass {
          width: 100%;
          min-height: 50vh;
          display: flex;
          align-items: center;
          background: linear-gradient(0deg, rgba(5, 5, 5, 0.9) 0%, rgba(5, 5, 5, 0.4) 100%);
        }

        .fw-extrabold { font-weight: 800; }

        .display-3 span {
          color: #4CAF50;
          text-shadow: 0 0 20px rgba(76, 175, 80, 0.3);
        }

        .section-title-premium {
          color: #fff;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .section-title-premium span {
          color: #4CAF50;
        }

        .glass-card-info {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 35px !important;
          backdrop-filter: blur(20px);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .glass-card-info:hover {
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(76, 175, 80, 0.3) !important;
        }

        .lead-custom p {
          margin-bottom: 20px;
          line-height: 1.8;
        }

        .premium-list {
          list-style: none;
          padding: 0;
        }

        .premium-list li {
          margin-bottom: 15px;
          padding-left: 30px;
          position: relative;
          color: rgba(255, 255, 255, 0.7);
        }

        .premium-list li::before {
          content: '◆';
          position: absolute;
          left: 0;
          color: #4CAF50;
        }

        .premium-checklist {
          list-style: none;
          padding: 0;
        }

        .premium-checklist li {
          margin-bottom: 12px;
          padding-left: 30px;
          position: relative;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
        }

        .premium-checklist li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #4CAF50;
          font-weight: 400;
        }

        .bg-gradient-success {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(46, 125, 50, 0.2) 100%) !important;
        }

        .icon-wrap-premium {
          width: 70px;
          height: 70px;
          background: rgba(76, 175, 80, 0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          border: 1px solid rgba(76, 175, 80, 0.2);
        }

        .value-badge {
          background: rgba(76, 175, 80, 0.15);
          color: #fff;
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid rgba(76, 175, 80, 0.3);
          display: inline-block;
        }

        @media (max-width: 768px) {
          .display-3 { font-size: 2.5rem; }
          .hero-product-detail { min-height: 40vh; }
        }
      `}</style>
    </div>
  );
}
