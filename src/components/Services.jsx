import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaShieldAlt,
  FaSatelliteDish,
  FaSolarPanel,
  FaUsers,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const services = [
    {
      icon: <FaShieldAlt size={55} className="service-icon text-success mb-3" />,
      title: "Seguridad Electrónica",
      desc: "Cámaras, alarmas y control de acceso para proteger lo que más te importa.",
    },
    {
      icon: <FaSatelliteDish size={55} className="service-icon text-success mb-3" />,
      title: "Rastreo Vehicular",
      desc: "Monitorea en tiempo real la ubicación y seguridad de tu flota o vehículo personal.",
    },
    {
      icon: <FaSolarPanel size={55} className="service-icon text-success mb-3" />,
      title: "Energía Fotovoltaica",
      desc: "Soluciones de energía limpia y renovable para hogares, empresas y comunidades.",
    },
    {
      icon: <FaUsers size={55} className="service-icon text-success mb-3" />,
      title: "Asesoría & Capacitación",
      desc: "Entrenamiento y soporte técnico especializado para el uso óptimo de nuestros productos.",
    },
  ];

  return (
    <section id="services" className="services-section py-5 text-center text-light">
      <Container>
        {/* Título */}
        <h2
          className="fw-bold mb-5 display-5 text-white display-6"
          data-aos="fade-up"
        >
          Nuestros Servicios
        </h2>

        {/* Servicios */}
        <Row className="g-4">
          {services.map((s, idx) => (
            <Col
              md={6}
              lg={3}
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150} // delay progresivo
            >
              <Card className="h-100 shadow service-card">
                <Card.Body>
                  {s.icon}
                  <Card.Title className="fw-bold">{s.title}</Card.Title>
                  <Card.Text>{s.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Botón de acción */}
<div
  className="mt-5"
  data-aos="fade-up"
  data-aos-delay={services.length * 150}
>
  <Button
    className="services-btn px-4 py-2"
    onClick={() => (window.location.href = "/services1/seguridad")}
  >
    Ver más servicios
  </Button>
</div>
</Container>


      {/* Estilos */}
      <style>{`
        .services-section {
          position: relative;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(6px);
          border-top: 2px solid rgba(255,255,255,0.1);
          border-bottom: 2px solid rgba(255,255,255,0.1);
        }
        .services-section::before,
        .services-section::after {
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          height: 40px;
        }
        .services-section::before {
          top: -40px;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7));
        }
        .services-section::after {
          bottom: -40px;
          background: linear-gradient(to top, transparent, rgba(0,0,0,0.7));
        }
        .service-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border: none;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.95);
          color: #333;
          overflow: hidden;
        }
        .service-card:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 12px 30px rgba(76, 175, 80, 0.5);
          border: 2px solid #4CAF50;
        }
        .service-icon {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .service-card:hover .service-icon {
          transform: scale(1.2) rotate(-5deg);
          color: #2E7D32;
        }
        .services-btn {
          background: linear-gradient(45deg, #1B5E20, #4CAF50);
          border: none;
          border-radius: 30px;
          font-weight: bold;
          font-size: 1.1rem;
          box-shadow: 0 0 15px rgba(76, 175, 80, 0.6);
          transition: all 0.3s ease;
          color: #fff;
        }
        .services-btn:hover {
          background: linear-gradient(45deg, #4CAF50, #1B5E20);
          transform: scale(1.08);
          box-shadow: 0 0 25px rgba(76, 175, 80, 0.9);
        }
      `}</style>
    </section>
  );
}
