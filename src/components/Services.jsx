import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaShieldAlt,
  FaRoute,
  FaSolarPanel,
  FaSatelliteDish,
  FaUserGraduate,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Services() {
  const [isExpanded, setIsExpanded] = useState(false);

  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Seguridad Electrónica",
      desc: "Cámaras, alarmas y control de acceso para proteger lo que más te importa.",
      color: "#4CAF50",
      link: "/services1/seguridad",
      delay: 100
    },
    {
      icon: <FaRoute />,
      title: "Rastreo Vehicular",
      desc: "Monitorea en tiempo real la ubicación y seguridad de tu flota o vehículo personal.",
      color: "#4CAF50",
      link: "/services1/rastreo",
      delay: 200
    },
    {
      icon: <FaSolarPanel />,
      title: "Energía Fotovoltaica",
      desc: "Soluciones de energía limpia y renovable para hogares, empresas y comunidades.",
      color: "#4CAF50",
      link: "/services1/solar",
      delay: 300
    },
    {
      icon: <FaSatelliteDish />,
      title: "Antenas e Internet",
      desc: "Instalación de antenas de largo alcance y soluciones de conectividad rural.",
      color: "#4CAF50",
      link: "/services1/antenas",
      delay: 400
    },
    {
      icon: <FaUserGraduate />,
      title: "Asesoría & Capacitación",
      desc: "Entrenamiento y soporte técnico especializado para el uso óptimo de nuestros productos.",
      color: "#4CAF50",
      link: "/services1/capacitacion",
      delay: 500
    },
  ];

  return (
    <section id="services" className="services-section py-5">
      {/* Elementos Decorativos de Fondo */}
      <div className="services-bg-glow"></div>

      <Container className="position-relative">
        <div className="text-center mb-5">
          <h6 className="services-subtitle" data-aos="fade-up">LO QUE HACEMOS</h6>
          <h2 className="services-main-title mx-auto" data-aos="fade-up" data-aos-delay="100">
            Nuestros <span>Servicios</span>
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Row className="g-3 justify-content-center services-grid">
          {services.map((s, idx) => (
            <Col
              key={idx}
              className={`service-col ${!isExpanded && idx > 1 ? 'd-none d-lg-block' : ''}`}
              data-aos="fade-up"
              data-aos-delay={s.delay}
            >
              <Card className="service-card-new h-100">
                <div className="card-inner">
                  <div className="icon-box" style={{ "--service-color": s.color }}>
                    {s.icon}
                  </div>
                  <Card.Body className="p-3">
                    <Card.Title className="h6 fw-bold mb-2">{s.title}</Card.Title>
                    <Card.Text className="text-muted-custom mb-3 small">
                      {s.desc}
                    </Card.Text>
                    <Link to={s.link} className="service-link">
                      Saber más <FaArrowRight className="ms-2 arrow-icon" />
                    </Link>
                  </Card.Body>
                </div>
                {/* Glow effect on card bottom */}
                <div className="card-glow" style={{ "--service-color": s.color }}></div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Botón Desplegable para Móvil */}
        <div className="text-center d-lg-none mt-4">
          <Button
            variant="outline-light"
            className="toggle-services-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>Ver menos <FaChevronUp className="ms-2" /></>
            ) : (
              <>Ver más servicios <FaChevronDown className="ms-2" /></>
            )}
          </Button>
        </div>

        <div className="mt-5 text-center" data-aos="fade-up" data-aos-delay="500">
          <Button
            as={Link}
            to="/productos"
            className="explore-btn glow-pulse"
          >
            Explorar Todos los Productos
          </Button>
        </div>
      </Container>

      <style>{`
        .services-section {
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          padding: 60px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .services-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(76, 175, 80, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .services-subtitle {
          color: #4CAF50;
          letter-spacing: 3px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 10px;
        }

        .services-main-title {
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          max-width: 600px;
        }
        .services-main-title span {
          background: linear-gradient(90deg, #4CAF50, #81C784);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-underline {
          width: 60px;
          height: 4px;
          background: #4CAF50;
          border-radius: 2px;
          margin-top: 15px;
        }

        /* 🔹 Grid de 5 Columnas para Desktop */
        @media (min-width: 992px) {
          .services-grid {
            display: flex;
            flex-wrap: nowrap;
            gap: 15px;
          }
          .service-col {
            flex: 1;
            min-width: 0;
          }
        }

        /* 🔹 Service Cards */
        .service-card-new {
          background: rgba(255, 255, 255, 0.04) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 20px !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(15px);
          overflow: hidden;
          position: relative;
          margin: 0 auto;
        }

        .service-card-new:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 15px 30px rgba(0,0,0,0.5);
        }

        .icon-box {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          color: var(--service-color);
          border-radius: 12px;
          margin: 15px 15px 5px 15px;
          transition: 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .service-card-new:hover .icon-box {
          background: var(--service-color);
          color: white;
          transform: rotate(5deg);
        }

        .text-muted-custom {
          color: rgba(255, 255, 255, 0.9) !important;
          line-height: 1.4;
          font-weight: 400;
        }

        .service-card-new .h6 {
          color: #ffffff !important;
          font-weight: 700 !important;
        }

        .service-link {
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          transition: 0.3s;
        }
        .service-link:hover { color: #4CAF50; }
        .arrow-icon { transition: 0.3s; }
        .service-link:hover .arrow-icon { transform: translateX(3px); }

        .card-glow {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--service-color);
          filter: blur(35px);
          opacity: 0;
          transition: 0.4s;
          pointer-events: none;
        }
        .service-card-new:hover .card-glow { opacity: 0.2; }

        .toggle-services-btn {
          border-radius: 30px;
          padding: 8px 25px;
          font-size: 0.9rem;
          border-color: rgba(255, 255, 255, 0.3);
          transition: 0.3s;
        }
        .toggle-services-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #4CAF50;
          color: #4CAF50;
        }

        /* 🔹 Explore Button */
        .explore-btn {
          background: #4CAF50;
          border: none;
          border-radius: 50px;
          padding: 12px 30px;
          font-weight: 700;
          color: #fff !important;
          transition: 0.3s;
        }
        .explore-btn:hover {
          background: #2E7D32;
          transform: scale(1.05);
        }

        .glow-pulse {
          animation: btnPulse 3s infinite;
        }
        @keyframes btnPulse {
          0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.6); }
          70% { box-shadow: 0 0 0 12px rgba(76, 175, 80, 0); }
          100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
        }

        @media (max-width: 991px) {
          .service-col {
            width: 100%;
            max-width: 400px;
          }
          .services-main-title { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}
