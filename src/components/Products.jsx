import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCar, FaVideo, FaWifi, FaLock } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Products() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 700, once: true }); // Animaciones rápidas
  }, []);

  const items = [
    {
      title: "Rastreo Satelital Vehicular",
      img: "Rastreo.jpg",
      icon: <FaCar />,
      id: "rastreo", // 👈 identificador único
    },
    {
      title: "Grabación Digital en Videograbadora",
      img: "Instalacion.jpg",
      icon: <FaVideo />,
      id: "videograbadora",
    },
    {
      title: "Control de Accesos y Apertura Electrónica",
      img: "Acceso.jpg",
      icon: <MdSecurity />,
      id: "acceso",
    },
    {
      title: "Servicio de Drone",
      img: "Drone.jpg",
      icon: <FaWifi />,
      id: "drone",
    },
    {
      title: "Concertinas",
      img: "/Concertinas.jpg",
      icon: <FaLock />,
      id: "concertinas",
    },
    {
      title: "Alarmas Contra Robo",
      img: "Alarma.jpg",
      icon: <MdSecurity />,
      id: "alarmas",
    },
  ];

  // 👇 función para redirigir al mismo Products con hash
  const goToSection = (id) => {
    navigate(`/productos#${id}`);
    // Forzar el scroll al elemento
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section id="products" className="py-5 position-relative">
      <Container>
        <h2
          className="text-center fw-bold mb-5 text-white display-6"
          data-aos="fade-up"
        >
          Algunos de Nuestros Productos
        </h2>
        <Row className="g-4 justify-content-center">
          {items.map((item, idx) => (
            <Col
              md={6}
              lg={4}
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 0}
              id={item.id} // 👈 este id permite el scroll
            >
              <Card className="product-card shadow-lg border-0">
                <div className="image-container">
                  <Card.Img
                    src={item.img}
                    alt={item.title}
                    className="card-img"
                  />
                  <div className="overlay">
                    <div className="overlay-content">
                      <span className="icon">{item.icon}</span>
                      <Card.Title className="overlay-text">
                        {item.title}
                      </Card.Title>
                      <Button
                        size="sm"
                        variant="light"
                        className="overlay-btn"
                        onClick={() => goToSection(item.id)} // 👈 redirige
                      >
                        Más información
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .product-card {
          border-radius: 18px;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .product-card:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 18px 35px rgba(0,0,0,0.35);
          border: 2px solid #4CAF50;
        }
        .image-container {
          position: relative;
          height: 320px;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .product-card:hover .card-img {
          transform: scale(1.1);
        }
        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 70%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 20px;
        }
        .overlay-content {
          text-align: center;
          color: #fff;
          width: 100%;
        }
        .icon {
          font-size: 2rem;
          color: #4CAF50;
          margin-bottom: 10px;
          display: block;
        }
        .overlay-text {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .overlay-btn {
          background: #4CAF50;
          border: none;
          font-weight: bold;
          color: #fff;
          border-radius: 25px;
          padding: 6px 14px;
          transition: all 0.3s ease;
        }
        .overlay-btn:hover {
          background: #2E7D32;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
