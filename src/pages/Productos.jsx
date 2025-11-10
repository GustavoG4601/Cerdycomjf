// src/pages/Productos.jsx
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaSun } from "react-icons/fa"; // 👈 AÑADE ESTA LÍNEA


export default function Productos() {


  // Categorías con iconos e imágenes/videos
  const categorias = [
    {
      titulo: "Cámaras de Seguridad",
      img: "/camara.mp4",
      link: "/Camara", // 👈 ruta a la nueva página
      icon: <FaShieldAlt size={20} className="text-success me-2" />,
      tipo: "router", // 👈 este lo usamos para diferenciar
    },
    {
      titulo: "Rastreo Vehicular",
      img: "/rastre.mp4",
      link: "/Rastreo1",
      icon: <FaShieldAlt size={20} className="text-success me-2" />,
      tipo: "router", // 👈 nueva página
    },
    {
       titulo: "Energía Fotovoltaica",
      img: "/fotovoltaica.mp4",
      link: "/energia",
      icon: <FaSun size={20} className="text-success me-2" />,
      tipo: "router",
    },
    {
      titulo: "Antenas e Internet",
      img: "/Antena.mp4",
      link: "/internet",
      icon: <FaSun size={20} className="text-success me-2" />,
      tipo: "router",
    },
    {
      titulo: "Acceso y Seguridad Física",
      img: "/acceso.mp4",
      link: "/Acceso",
      icon: <FaSun size={20} className="text-success me-2" />,
      tipo: "router",
    },
  ];

  return (
    <div className="productos-page">
      {/* Barra superior */}
      <NavbarComponent />

      {/* HERO */}
      <section
        className="hero-productos"
        style={{ backgroundImage: "url('/Fondo.png')" }}
      >
        <div className="overlay">
          <div className="hero-content text-center" data-aos="zoom-in">
            <h1 className="fw-bold text-white display-4 mb-3">
              Nuestros <span className="highlight">Productos</span>
            </h1>
            <p className="text-light fs-5 mb-4">
              Innovación en seguridad, energía y conectividad para tu negocio y hogar.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de categorías */}
      <section className="bg-grid">
        <Container className="py-5">
          <h2
            className="text-center fw-bold mb-2 text-success"
            data-aos="fade-up"
          >
            Categorías principales
          </h2>
          <p
            className="text-center text-muted mb-5"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Soluciones profesionales en seguridad, energía y conectividad.
          </p>

          <Row>
            {categorias.map((cat, idx) => (
              <Col lg={4} md={6} className="mb-4" key={idx} data-aos="zoom-in">
                <div className="gradient-frame h-100">
                  <Card className="custom-card h-100 border-0">
                    <div className="card-img-wrap">
                      {/* Si es video, se muestra video, si no, imagen */}
                      {cat.img.endsWith(".mp4") ? (
                        <video
                          className="custom-img"
                          src={cat.img}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <Card.Img
                          variant="top"
                          src={cat.img}
                          alt={cat.titulo}
                          className="custom-img"
                        />
                      )}

                      {/* Etiqueta superior */}
                      <span className="chip">CerdycomJF</span>
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="fw-bold d-flex align-items-center mb-2">
                        {cat.icon} {cat.titulo}
                      </Card.Title>

                      <Card.Text className="text-muted small">
                        Calidad profesional, instalación certificada y soporte
                        especializado.
                      </Card.Text>

                      <div className="mt-auto">
                        {cat.tipo === "router" ? (
                          <Link
                            to={cat.link}
                            className="btn btn-success w-100 fw-semibold btn-modern"
                          >
                            Ver más
                          </Link>
                        ) : (
                          <Button
                            variant="success"
                            className="w-100 fw-semibold btn-modern"
                            href={cat.link}
                          >
                            Ver más
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Pie de página */}
      <Footer />

      {/* Estilos */}
      <style>{`
        /* HERO */
        .hero-productos {
          position: relative;
          background-size: cover;
          background-position: center;
          height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-productos .overlay {
          background: linear-gradient(
            rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)
          );
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
        }
        .hero-content h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          text-shadow: 0 4px 16px rgba(0,0,0,0.6);
        }
        .hero-content .highlight {
          color: #4CAF50;
          text-shadow: 0 0 10px rgba(76,175,80,0.7);
        }
        .hero-content p {
          max-width: 700px;
          margin: 0 auto;
        }

        /* SECCIÓN GRID */
        .bg-grid {
          background:
            radial-gradient(circle at 20% 20%, rgba(76, 175, 80, 0.06), transparent 40%),
            radial-gradient(circle at 80% 0%, rgba(27, 94, 32, 0.05), transparent 45%),
            linear-gradient(180deg, #ffffff 0%, #f7f9f7 100%);
        }

        .gradient-frame {
          padding: 1px;
          border-radius: 18px;
          background: linear-gradient(135deg, #4CAF50 0%, rgba(76,175,80,0.15) 35%, rgba(27,94,32,0.25) 100%);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .gradient-frame:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.15);
        }

        .custom-card {
          border-radius: 17px;
          overflow: hidden;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(6px);
        }

        .card-img-wrap {
          position: relative;
          overflow: hidden;
          height: 220px;
        }
        .custom-img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gradient-frame:hover .custom-img {
          transform: scale(1.08);
        }

        .chip {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255,255,255,0.9);
          color: #1B5E20;
          font-weight: 600;
          font-size: 0.75rem;
          padding: 6px 10px;
          border-radius: 999px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .btn-modern {
          border-radius: 999px;
          padding: 10px 14px;
          transition: transform 0.2s ease, box-shadow 0.25s ease;
        }
        .btn-modern:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(76, 175, 80, 0.45);
        }
      `}</style>
    </div>
  );
}
