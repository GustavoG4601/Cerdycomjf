import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaAward, FaCheckCircle, FaGlobeAmericas, FaArrowRight } from "react-icons/fa";

export default function About() {
  const navigate = useNavigate();

  const achievements = [
    { icon: <FaAward />, text: "10+ Años de Experiencia" },
    { icon: <FaCheckCircle />, text: "Equipos Certificados" },
    { icon: <FaGlobeAmericas />, text: "Cobertura Internacional" }
  ];

  return (
    <section id="about" className="about-section py-5">
      {/* Elementos Decorativos de Fondo */}
      <div className="about-bg-glow"></div>

      <Container className="position-relative">
        <Row className="align-items-center g-5">
          {/* Texto / Contenido */}
          <Col lg={7} data-aos="fade-right">
            <div className="about-content-card">
              <h6 className="about-subtitle">LO QUE SOMOS</h6>
              <h2 className="about-main-title mb-4">
                ¿Quiénes <span>Somos?</span>
              </h2>

              <div className="about-description">
                <p className="lead-text">
                  En <span className="brand-highlight">CERDYCOMJF</span> somos especialistas en
                  <strong> seguridad electrónica</strong> y <strong>rastreo satelital</strong>.
                </p>

                <p className="main-paragraph">
                  Con más de <strong>siete años</strong> de trayectoria, protegemos lo que más valoras
                  mediante tecnología de vanguardia y equipos certificados. Nuestra plataforma inteligente
                  ofrece monitoreo en tiempo real para vehículos, personas y activos globales.
                </p>

                <div className="achievements-grid mt-4">
                  {achievements.map((item, idx) => (
                    <div className="achievement-item" key={idx}>
                      <span className="achievement-icon">{item.icon}</span>
                      <span className="achievement-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="certification-zone mt-5">
                <p className="cert-title">CERTIFICACIONES Y AVALES</p>
                <div className="d-flex flex-wrap gap-4 align-items-center cert-logos">
                  <div className="cert-img-wrapper">
                    <img src="/media/brands/pol.webp" alt="Policía Nacional" />
                  </div>
                  <div className="cert-img-wrapper">
                    <img src="/media/brands/ministerio.webp" alt="MinTIC" />
                  </div>
                  <div className="cert-img-wrapper">
                    <img src="/media/brands/fede.webp" alt="Fedetec" />
                  </div>
                </div>
              </div>

              <Button
                onClick={() => navigate("/nosotros")}
                className="about-action-btn glow-pulse mt-5"
              >
                Conocer nuestra historia <FaArrowRight className="ms-2" />
              </Button>
            </div>
          </Col>

          {/* Imagen / Mapa */}
          <Col lg={5} className="text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="map-creative-wrapper">
              <div className="map-glow"></div>
              <img
                src="/media/brands/mapa.webp"
                alt="Cobertura Geográfica"
                className="img-fluid main-map-img"
              />
              <div className="map-badge">
                <span className="pulse-dot"></span>
                COBERTURA TOTAL
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .about-section {
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .about-bg-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
          height: 100%;
          background: radial-gradient(circle at 70% 50%, rgba(76, 175, 80, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-subtitle {
          color: #4CAF50;
          letter-spacing: 4px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 12px;
          display: block;
        }

        .about-main-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
        }
        .about-main-title span {
          background: linear-gradient(90deg, #4CAF50, #81C784);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-content-card {
          position: relative;
          z-index: 2;
        }

        .lead-text {
          font-size: 1.3rem;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .brand-highlight {
          color: #4CAF50;
          font-weight: 800;
          text-shadow: 0 0 15px rgba(76,175,80,0.3);
        }

        .main-paragraph {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 600px;
        }

        /* 🔹 Achievements Grid */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
        }
        .achievement-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.03);
          padding: 12px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: 0.3s;
        }
        .achievement-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: #4CAF50;
          transform: translateY(-3px);
        }
        .achievement-icon {
          color: #4CAF50;
          font-size: 1.2rem;
        }

        /* 🔹 Certifications */
        .cert-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 2px;
          margin-bottom: 20px;
        }
        .cert-img-wrapper {
          background: rgba(255, 255, 255, 0.05);
          padding: 12px;
          border-radius: 12px;
          transition: 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .cert-img-wrapper img {
          height: 40px;
          filter: brightness(0) invert(1) opacity(0.6);
          transition: 0.3s;
        }
        .cert-img-wrapper:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
          border-color: #4CAF50;
        }
        .cert-img-wrapper:hover img {
          filter: brightness(1) invert(0) opacity(1);
        }

        /* 🔹 Action Button */
        .about-action-btn {
          background: #4CAF50;
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          font-weight: 700;
          color: white;
          transition: 0.3s;
        }
        .about-action-btn:hover {
          background: #2E7D32;
          transform: scale(1.05);
        }

        .glow-pulse {
          animation: btnPulse 3s infinite;
        }
        @keyframes btnPulse {
          0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.6); }
          70% { box-shadow: 0 0 0 15px rgba(76, 175, 80, 0); }
          100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
        }

        /* 🔹 Map Creative */
        .map-creative-wrapper {
          position: relative;
          padding: 30px;
        }
        .map-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(76, 175, 80, 0.2) 0%, transparent 70%);
          filter: blur(40px);
          z-index: 1;
        }
        .main-map-img {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 0 20px rgba(0,0,0,0.4));
          transition: 0.5s;
        }
        .map-creative-wrapper:hover .main-map-img {
          transform: scale(1.05) rotate(2deg);
        }

        .map-badge {
          position: absolute;
          bottom: 20px;
          right: 40px;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 40px;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.9rem;
          border: 1px solid #4CAF50;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #4CAF50;
          border-radius: 50%;
          box-shadow: 0 0 0 rgba(76, 175, 80, 0.4);
          animation: dotPulse 2s infinite;
        }
        @keyframes dotPulse {
          0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
          100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
        }

        @media (max-width: 991px) {
          .about-section { padding: 60px 0; text-align: center; }
          .main-paragraph { margin-left: auto; margin-right: auto; }
          .achievements-grid { justify-content: center; }
          .cert-logos { justify-content: center; }
          .map-badge { right: 50%; transform: translateX(50%); bottom: 0; }
          .about-main-title { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
}
