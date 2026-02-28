import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaSolarPanel, FaSun, FaLightbulb, FaWhatsapp, FaCheckCircle, FaChargingStation, FaGlobe } from "react-icons/fa";

export default function Solar() {
  const benefits = [
    {
      icon: <FaSolarPanel />,
      title: "Autoconsumo",
      desc: "Genera tu propia energía y reduce drásticamente el costo de tu factura eléctrica mensual."
    },
    {
      icon: <FaGlobe />,
      title: "Energía Limpia",
      desc: "Sistemas sostenibles que no emiten CO2, protegiendo el planeta para futuras generaciones."
    },
    {
      icon: <FaChargingStation />,
      title: "Rendimiento",
      desc: "Equipos de alta eficiencia diseñados para maximizar la captación solar en cualquier entorno."
    },
    {
      icon: <FaLightbulb />,
      title: "Ahorro Real",
      desc: "Retorno de inversión garantizado con soluciones adaptadas a hogares y grandes industrias."
    }
  ];

  const commitments = [
    "Proyectos con altos estándares de eficiencia.",
    "Soluciones adaptadas a cada necesidad energética.",
    "Generar valor cuidando el medio ambiente.",
    "Innovación constante en tecnologías renovables."
  ];

  return (
    <div className="solar-page">
      <NavbarComponent />

      {/* 🚀 Hero Section */}
      <section className="hero-detail">
        <div className="hero-overlay-glass">
          <Container>
            <div className="hero-text-wrapper text-center">
              <h6 className="badge-premium mb-3" data-aos="fade-down">ENERGÍA SUSTENTABLE</h6>
              <h1 className="display-4 fw-bold text-white mb-4" data-aos="fade-up">
                El Poder del Sol en <span>Tus Manos</span>
              </h1>
              <p className="hero-desc text-white-50 mx-auto" data-aos="fade-up" data-aos-delay="200" style={{ maxWidth: "800px" }}>
                En <strong>CERDYCOM JF</strong> impulsamos la transición hacia un futuro verde. Soluciones fotovoltaicas inteligentes para un mundo más limpio.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* 🛠 Solutions Section */}
      <section className="solutions-section py-5">
        <div className="bg-glow-right"></div>
        <Container className="py-lg-5">
          <div className="text-center mb-5 pb-3">
            <h2 className="section-title text-white fw-bold h1" data-aos="fade-up">
              Energía para la <span>Vida</span>
            </h2>
            <div className="divider-glow mx-auto"></div>
          </div>

          <Row className="g-4">
            {benefits.map((item, idx) => (
              <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <Card className="glass-benefit-card h-100">
                  <div className="benefit-icon-box">{item.icon}</div>
                  <Card.Body className="p-0">
                    <h5 className="text-white fw-bold mb-3">{item.title}</h5>
                    <p className="text-white-50 mb-0 small">{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="align-items-center g-5 mt-5">
            <Col lg={6} data-aos="fade-right">
              <div className="commitment-card p-4">
                <h3 className="text-white fw-bold mb-4 h2">Sostenibilidad <span>Garantizada</span></h3>
                <div className="commitment-list">
                  {commitments.map((text, i) => (
                    <div className="commitment-item" key={i}>
                      <FaCheckCircle className="check-icon" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="cta-box-glass p-5 text-center">
                <FaSun className="cta-icon mb-4" />
                <h4 className="text-white fw-bold mb-3">¿Listo para ahorrar energía?</h4>
                <p className="text-white-50 mb-4">Calculamos tu ahorro potencial y diseñamos tu sistema sin costo inicial.</p>
                <Button
                  href="https://wa.me/573016465632?text=Hola!%20Quiero%20una%20cotización%20sobre%20Energía%20Solar."
                  target="_blank"
                  className="whatsapp-btn-modern glow-pulse"
                >
                  <FaWhatsapp className="me-2" /> Solicitar Estudio Solar
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />

      <style>{`
        .solar-page {
          background: url('/media/ui/Fondo.webp') center/cover no-repeat fixed;
          color: #fff;
          min-height: 100vh;
        }

        .hero-detail {
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

        .hero-text-wrapper {
          position: relative;
          z-index: 3;
          width: 100%;
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

        .hero-detail h1 span {
          background: linear-gradient(90deg, #4CAF50, #81C784);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-desc {
          font-size: 1.2rem;
          line-height: 1.6;
        }

        .solutions-section {
          position: relative;
          background: linear-gradient(180deg, rgba(10, 10, 10, 0.6) 0%, rgba(5, 5, 5, 0.4) 100%);
          backdrop-filter: blur(15px);
        }

        .bg-glow-right {
          position: absolute;
          top: -100px;
          right: -50px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(76, 175, 80, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .section-title span { color: #4CAF50; }

        .divider-glow {
          width: 60px;
          height: 4px;
          background: #4CAF50;
          border-radius: 10px;
          margin-top: 15px;
          box-shadow: 0 0 20px rgba(76, 175, 80, 0.6);
        }

        .glass-benefit-card {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 20px !important;
          transition: all 0.4s ease;
          padding: 30px 25px;
          backdrop-filter: blur(10px);
        }

        .glass-benefit-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(76, 175, 80, 0.5) !important;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }

        .benefit-icon-box {
          font-size: 2.5rem;
          color: #4CAF50;
          margin-bottom: 20px;
          transition: 0.3s;
        }

        .glass-benefit-card:hover .benefit-icon-box { transform: scale(1.1) rotate(5deg); }

        .commitment-card h3 span { color: #4CAF50; }
        .commitment-list { display: grid; gap: 18px; }
        .commitment-item {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.85);
        }
        .check-icon { color: #4CAF50; font-size: 1.3rem; flex-shrink: 0; }

        .cta-box-glass {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          backdrop-filter: blur(10px);
        }

        .cta-icon { font-size: 3.5rem; color: #4CAF50; }

        .whatsapp-btn-modern {
          background: #25D366;
          border: none;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 1.1rem;
          color: #fff !important;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
        }
        .whatsapp-btn-modern:hover {
          background: #128C7E;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
        }

        .glow-pulse {
          animation: btnPulse 3s infinite;
        }
        @keyframes btnPulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        @media (max-width: 991px) {
          .hero-detail { min-height: 50vh; }
          .hero-overlay-glass { min-height: 50vh; }
          .hero-detail h1 { font-size: 2.8rem; }
          .cta-box-glass { padding: 40px 20px !important; }
        }
      `}</style>
    </div>
  );
}
