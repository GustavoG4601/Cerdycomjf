import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaSun, FaArrowRight, FaVideo, FaCogs, FaSignal, FaLock } from "react-icons/fa";

export default function Productos() {
  const categorias = [
    {
      titulo: "Cámaras de Seguridad",
      desc: "Vigilancia de alta definición con visión nocturna y detección inteligente.",
      img: "/media/videos/camara.mp4",
      link: "/Camara",
      icon: <FaVideo />,
      badge: "BEST SELLER"
    },
    {
      titulo: "Rastreo Vehicular",
      desc: "Localización precisa en tiempo real for flotas y vehículos particulares.",
      img: "/media/videos/rastre.mp4",
      link: "/Rastreo1",
      icon: <FaShieldAlt />,
      badge: "Gps"
    },
    {
      titulo: "Energía Fotovoltaica",
      desc: "Paneles solares de alta eficiencia para un ahorro energético garantizado.",
      img: "/media/videos/fotovoltaica.mp4",
      link: "/energia",
      icon: <FaSun />,
      badge: "ECO"
    },
    {
      titulo: "Antenas e Internet",
      desc: "Enlaces de alto desempeño y conectividad total en zonas rurales y urbanas.",
      img: "/media/videos/antenaa.mp4",
      link: "/internet",
      icon: <FaSignal />,
      badge: "ROBUSTA"
    },
    {
      titulo: "Acceso y Seguridad",
      desc: "Control biométrico y barreras físicas para máxima protección de perímetros.",
      img: "/media/videos/accesoo.mp4",
      link: "/Acceso",
      icon: <FaLock />,
      badge: "PREMIUM"
    },
  ];

  return (
    <div className="productos-page">
      <NavbarComponent />

      {/* 🚀 Hero Section */}
      <section className="hero-catalog">
        <div className="catalog-overlay-glass">
          <Container>
            <div className="text-center hero-content-wrap">
              <h6 className="badge-premium mb-3" data-aos="fade-down">SOLUCIONES TECNOLÓGICAS</h6>
              <h1 className="display-3 fw-extrabold text-white mb-4" data-aos="fade-up">
                Catálogo de <span>Productos</span>
              </h1>
              <p className="lead text-white-50 mx-auto" data-aos="fade-up" data-aos-delay="200" style={{ maxWidth: "800px" }}>
                Explora nuestra selección premium de equipos y sistemas diseñados para llevar la seguridad, energía y conectividad de tu proyecto al siguiente nivel.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* 🛠 Products Grid Section */}
      <section className="catalog-grid-section py-5">
        <Container className="py-lg-5">
          <div className="text-center mb-5 pb-3">
            <h2 className="section-title text-white fw-bold" data-aos="fade-up">
              Nuestras <span>Categorías</span>
            </h2>
            <div className="divider-glow mx-auto"></div>
          </div>

          <Row className="g-5 justify-content-center">
            {categorias.map((cat, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <Card className="product-card-premium h-100">
                  <div className="catalog-image-wrapper">
                    {cat.img.endsWith(".mp4") ? (
                      <video
                        className="catalog-video"
                        src={cat.img}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img src={cat.img} alt={cat.titulo} className="catalog-img" />
                    )}
                    <div className="catalog-overlay">
                      <div className="catalog-badge-top">{cat.badge}</div>
                      <div className="catalog-icon-badge">{cat.icon}</div>
                    </div>
                  </div>
                  <Card.Body className="p-4 d-flex flex-column">
                    <h4 className="text-white fw-bold mb-3">{cat.titulo}</h4>
                    <p className="text-white-50 mb-4 flex-grow-1 small">
                      {cat.desc}
                    </p>
                    <Link to={cat.link} className="catalog-action-btn">
                      <span>Ver Catálogo</span>
                      <FaArrowRight className="ms-2" />
                    </Link>
                  </Card.Body>
                  <div className="card-bottom-glow"></div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />

      <style>{`
        .productos-page {
          background: url('/media/ui/Fondo.webp') center/cover no-repeat fixed;
          color: #fff;
          min-height: 100vh;
        }

        .hero-catalog {
          position: relative;
          min-height: 50vh;
          display: flex;
          align-items: center;
        }

        .catalog-overlay-glass {
          width: 100%;
          min-height: 50vh;
          display: flex;
          align-items: center;
          padding: 80px 0;
          background: linear-gradient(0deg, rgba(5, 5, 5, 0.7) 0%, rgba(5, 5, 5, 0.2) 100%);
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

        .fw-extrabold { font-weight: 800; }

        .display-3 span {
          color: #4CAF50;
          text-shadow: 0 0 20px rgba(76, 175, 80, 0.3);
        }

        .catalog-grid-section {
          position: relative;
          background: linear-gradient(180deg, rgba(5, 5, 5, 0.7) 0%, rgba(10, 10, 10, 0.4) 100%);
        }

        .section-title span { color: #4CAF50; }

        .divider-glow {
          width: 80px;
          height: 4px;
          background: #4CAF50;
          border-radius: 10px;
          margin-top: 15px;
          box-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
        }

        .product-card-premium {
          background: rgba(255, 255, 255, 0.12) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-radius: 30px !important;
          backdrop-filter: blur(15px);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          position: relative;
        }

        .product-card-premium:hover {
          transform: translateY(-15px);
          background: rgba(255, 255, 255, 0.07) !important;
          border-color: rgba(76, 175, 80, 0.5) !important;
          box-shadow: 0 30px 60px rgba(0,0,0,0.7);
        }

        .catalog-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .catalog-video, .catalog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .product-card-premium:hover .catalog-video,
        .product-card-premium:hover .catalog-img {
          transform: scale(1.15);
        }

        .catalog-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, transparent 100%);
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        .catalog-badge-top {
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(5px);
          color: #fff;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 6px 14px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.1);
          letter-spacing: 1.5px;
        }

        .catalog-icon-badge {
          width: 50px;
          height: 50px;
          background: #4CAF50;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          font-size: 1.4rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          transition: 0.4s;
        }

        .product-card-premium:hover .catalog-icon-badge {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 0 25px rgba(76, 175, 80, 0.6);
        }

        .catalog-action-btn {
          background: rgba(255,255,255,0.05);
          color: #fff;
          text-decoration: none;
          padding: 14px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .catalog-action-btn:hover {
          background: #4CAF50;
          color: #fff;
          border-color: #4CAF50;
          box-shadow: 0 10px 20px rgba(76, 175, 80, 0.3);
        }

        .card-bottom-glow {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 100px;
          background: #4CAF50;
          filter: blur(50px);
          opacity: 0;
          transition: 0.5s;
          pointer-events: none;
        }

        .product-card-premium:hover .card-bottom-glow {
          opacity: 0.15;
        }

        @media (max-width: 991px) {
          .hero-catalog { height: auto; }
          .hero-catalog h1 { font-size: 2.5rem; }
          .catalog-image-wrapper { height: 180px; }
        }
      `}</style>
    </div>
  );
}
