import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCar, FaVideo, FaWifi, FaLock, FaArrowRight } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Products() {
  const items = [
    {
      title: "Rastreo Satelital Vehicular",
      img: "/media/products/Rastreo.webp",
      icon: <FaCar />,
      color: "#4CAF50",
      id: "rastreo",
      delay: 100
    },
    {
      title: "Grabación Digital",
      img: "/media/products/Instalacion.webp",
      icon: <FaVideo />,
      color: "#4CAF50",
      id: "videograbadora",
      delay: 200
    },
    {
      title: "Control de Accesos",
      img: "/media/products/Acceso.webp",
      icon: <MdSecurity />,
      color: "#4CAF50",
      id: "acceso",
      delay: 300
    },
    {
      title: "Servicio de Drone",
      img: "/media/products/Drone.webp",
      icon: <FaWifi />,
      color: "#4CAF50",
      id: "drone",
      delay: 400
    },
    {
      title: "Concertinas",
      img: "/media/products/Concertinas.webp",
      icon: <FaLock />,
      color: "#4CAF50",
      id: "concertinas",
      delay: 500
    },
    {
      title: "Alarmas Contra Robo",
      img: "/media/products/Alarma.webp",
      icon: <MdSecurity />,
      color: "#4CAF50",
      id: "alarmas",
      delay: 600
    },
  ];

  return (
    <section id="products" className="products-section py-5">
      {/* Elementos Decorativos de Fondo */}
      <div className="products-bg-glow"></div>

      <Container className="position-relative">
        <div className="text-center mb-5">
          <h6 className="products-subtitle" data-aos="fade-up">CONOCE MÁS</h6>
          <h2 className="products-main-title mx-auto" data-aos="fade-up" data-aos-delay="100">
            Nuestros <span>Productos</span>
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Row className="g-4 justify-content-center">
          {items.map((item, idx) => (
            <Col
              md={6}
              lg={4}
              key={idx}
              data-aos="fade-up"
              data-aos-delay={item.delay}
              id={item.id}
            >
              <Card className="product-card-new h-100">
                <div className="image-wrapper">
                  <Card.Img
                    src={item.img}
                    alt={item.title}
                    className="product-img"
                  />
                  <div className="product-overlay">
                    <div className="icon-badge" style={{ "--product-color": item.color }}>
                      {item.icon}
                    </div>
                  </div>
                </div>
                <Card.Body className="p-4 bg-glass">
                  <Card.Title className="h5 fw-bold mb-3 text-white">
                    {item.title}
                  </Card.Title>
                  <Link to="/productos" className="product-link">
                    Más información <FaArrowRight className="ms-2 arrow-icon" />
                  </Link>
                </Card.Body>
                {/* Glow effect on card bottom */}
                <div className="card-glow" style={{ "--product-color": item.color }}></div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="mt-5 text-center" data-aos="fade-up" data-aos-delay="700">
          <Button
            as={Link}
            to="/productos"
            className="catalog-btn glow-pulse"
          >
            Ver Catálogo Completo
          </Button>
        </div>
      </Container>

      <style>{`
        .products-section {
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          padding: 80px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .products-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(76, 175, 80, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .products-subtitle {
          color: #4CAF50;
          letter-spacing: 3px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 10px;
        }

        .products-main-title {
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          max-width: 600px;
        }
        .products-main-title span {
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

        /* 🔹 Product Cards New */
        .product-card-new {
          background: rgba(255, 255, 255, 0.04) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 24px !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(15px);
          overflow: hidden;
          position: relative;
        }

        .product-card-new:hover {
          transform: translateY(-12px);
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .image-wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
          border-radius: 24px 24px 0 0;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.6s;
        }

        .product-card-new:hover .product-img {
          transform: scale(1.1);
        }

        .product-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(10,10,10,0.4) 0%, transparent 100%);
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 20px;
        }

        .icon-badge {
          width: 45px;
          height: 45px;
          background: var(--product-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          font-size: 1.4rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          transition: 0.3s;
        }

        .product-card-new:hover .icon-badge {
          transform: rotate(10deg) scale(1.1);
          box-shadow: 0 0 20px var(--product-color);
        }

        .bg-glass {
          background: transparent !important;
        }

        .product-link {
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          transition: 0.3s;
        }
        .product-link:hover {
          color: #4CAF50;
        }
        .arrow-icon {
          transition: 0.3s;
        }
        .product-link:hover .arrow-icon {
          transform: translateX(5px);
        }

        .card-glow {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--product-color);
          filter: blur(40px);
          opacity: 0;
          transition: 0.4s;
          pointer-events: none;
        }
        .product-card-new:hover .card-glow {
          opacity: 0.2;
        }

        /* 🔹 Catalog Button */
        .catalog-btn {
          background: #4CAF50;
          border: none;
          border-radius: 50px;
          padding: 12px 30px;
          font-weight: 700;
          color: #fff !important;
          transition: 0.3s;
        }
        .catalog-btn:hover {
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

        @media (max-width: 768px) {
          .products-main-title { font-size: 1.8rem; }
          .image-wrapper { height: 200px; }
        }
      `}</style>
    </section>
  );
}
