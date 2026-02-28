// src/pages/Acceso.jsx
import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

export default function Acceso() {
  const servicios = [
    // 🚀 Productos reales del catálogo
    {
      nombre: "Terminal de Control de Acceso y Asistencia",
      img: "/media/products/terminal.webp",
      descripcion:
        "Equipo biométrico con soporte de huellas, tarjetas y registros de eventos.",
      alcance: "Hasta 1,000 huellas y tarjetas Mifare, 100,000 registros.",
      beneficios: [
        "Pantalla LCD de 2.4”",
        "Control mediante huella, tarjeta o PIN",
        "Compatible con TCP/IP",
      ],
    },
    {
      nombre: "Electroimán 600 lbs con LED",
      img: "/media/products/iman.webp",
      descripcion:
        "Electroimán de alta seguridad con indicador LED y fuerza de sujeción de 280 kg.",
      alcance: "Puertas simples y dobles en oficinas, edificios y residencias.",
      beneficios: [
        "Incluye magneto, placa y tornillería",
        "Sensor de puerta NO/NC",
        "Fácil integración en sistemas de acceso",
      ],
    },
    {
      nombre: "Cerradura Inteligente WiFi/Bluetooth",
      img: "/media/products/iman2.webp",
      descripcion:
        "Cerradura electrónica con huella, contraseña, tag o llave mecánica.",
      alcance: "Hasta 50 huellas, 50 contraseñas y 50 tags.",
      beneficios: [
        "Generación de códigos temporales",
        "Conexión WiFi y Bluetooth (sin hub)",
        "Botón de timbre integrado",
      ],
    },
    {
      nombre: "Kit Videoportero Analógico con Pantalla LCD 7”",
      img: "/media/products/iaman3.webp",
      descripcion:
        "Sistema de videoportero con cámara pinhole y pantalla a color.",
      alcance: "Cámara 720x576 @30fps, ángulo de visión 98°.",
      beneficios: [
        "Protección IP65",
        "Audio bidireccional integrado",
        "Salida de relevador para apertura",
      ],
    },

    // 🔒 Servicios personalizados que ya tenías (sin duplicar)
    {
      nombre: "Alarmas contra robo",
      img: "/media/products/iman4.webp",
      descripcion:
        "Alarmas inteligentes con sensores de movimiento y notificación inmediata.",
      alcance: "Cobertura total en hogares, negocios y bodegas.",
      beneficios: [
        "Disuasión efectiva ante intrusos",
        "Conexión con central de monitoreo",
        "Alertas instantáneas al móvil",
      ],
    },
    {
      nombre: "Talanqueras (vehiculares)",
      img: "/media/products/iman5.jpg",
      descripcion:
        "Talanqueras automáticas para el control de acceso vehicular en parques, empresas y conjuntos.",
      alcance: "Operación 24/7 con bajo mantenimiento.",
      beneficios: [
        "Acceso rápido y seguro",
        "Compatible con sistemas RFID",
        "Alta durabilidad y resistencia",
      ],
    },
    {
      nombre: "Concertinas y cerramientos",
      img: "/media/products/iman6.webp",
      descripcion:
        "Protección física mediante concertinas, mallas y cerramientos perimetrales.",
      alcance: "Soluciones a la medida en diferentes entornos.",
      beneficios: [
        "Alta resistencia",
        "Instalación rápida",
        "Disuasión perimetral eficaz",
      ],
    },
    {
      nombre: "Servicios de drones (vigilancia aérea)",
      img: "/media/products/iman7.jpg",
      descripcion:
        "Monitoreo y vigilancia aérea mediante drones equipados con cámaras de alta resolución.",
      alcance: "Cobertura amplia en terrenos extensos y zonas de difícil acceso.",
      beneficios: [
        "Vigilancia en tiempo real",
        "Cobertura de áreas remotas",
        "Ideal para seguridad avanzada",
      ],
    },
  ];

  // Estado modal
  const [show, setShow] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (serv) => {
    setServicioSeleccionado(serv);
    setShow(true);
  };

  // 👉 WhatsApp
  const enviarWhatsApp = () => {
    if (!servicioSeleccionado) return;
    const numero = "573016465632"; // 👈 tu número de WhatsApp
    const mensaje = `Hola, quiero más información sobre ${servicioSeleccionado.nombre}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="acceso-page">
      <NavbarComponent />

      {/* Hero Section */}
      <section className="hero-product-detail">
        <div className="hero-overlay-glass">
          <Container>
            <div className="text-center" data-aos="fade-up">
              <h1 className="display-3 fw-extrabold text-white mb-3">
                Control de <span>Acceso</span>
              </h1>
              <p className="lead text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
                Soluciones integrales de seguridad física y gestión de personal.
                Protección avanzada para hogares, empresas y espacios comerciales.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Contenido con Glassmorphism */}
      <Container className="py-5 product-container">
        <div className="text-center mb-5">
          <h2 className="section-title-premium" data-aos="fade-up">
            Soluciones de <span>Seguridad</span>
          </h2>
          <div className="divider-glow mx-auto" style={{ width: "80px", height: "4px", background: "#4CAF50", borderRadius: "10px", boxShadow: "0 0 15px rgba(76, 175, 80, 0.5)" }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {servicios.map((serv, idx) => (
            <div
              className="col-lg-4 col-md-6"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <Card className="glass-card-product h-100" onClick={() => handleShow(serv)}>
                <div className="product-img-wrapper">
                  <ImageWithSkeleton
                    src={serv.img}
                    alt={serv.nombre}
                    className="product-img-zoom"
                    loading="lazy"
                  />
                </div>
                <Card.Body className="d-flex flex-column text-center p-4">
                  <h5 className="text-white fw-bold mb-3">{serv.nombre}</h5>
                  <p className="text-white-50 small mb-4">{serv.descripcion}</p>
                  <Button variant="outline-success" className="mt-auto glass-btn">
                    Ver Detalles
                  </Button>
                </Card.Body>
              </ Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal con la info */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{servicioSeleccionado?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {servicioSeleccionado && (
            <>
              <div className="modal-img-container mb-4">
                <img
                  src={servicioSeleccionado.img}
                  alt={servicioSeleccionado.nombre}
                  className="img-fluid d-block mx-auto"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                  loading="lazy"
                />
              </div>
              <div className="modal-details p-3">
                <p className="mb-2"><strong className="text-success">Descripción:</strong> <span className="text-white-50">{servicioSeleccionado.descripcion}</span></p>
                <p className="mb-2"><strong className="text-success">Alcance:</strong> <span className="text-white-50">{servicioSeleccionado.alcance}</span></p>
                <p className="mb-2"><strong className="text-success">Beneficios:</strong></p>
                <ul className="text-white-50">
                  {servicioSeleccionado.beneficios.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" className="text-white-50 text-decoration-none" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" className="px-4 py-2 fw-bold" onClick={enviarWhatsApp}>
            Solicitar Información
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />

      <style>{`
        .acceso-page {
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
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .section-title-premium span {
          color: #4CAF50;
        }

        .glass-card-product {
          background: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-radius: 30px !important;
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          cursor: pointer;
        }

        .glass-card-product:hover {
          transform: translateY(-15px);
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(76, 175, 80, 0.6) !important;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }

        .product-img-wrapper {
          padding: 30px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 280px;
          position: relative;
        }

        .product-img-zoom {
          max-height: 100%;
          width: auto;
          object-fit: contain;
          transition: transform 0.6s ease;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
        }

        .glass-card-product:hover .product-img-zoom {
          transform: scale(1.1);
        }

        .glass-btn {
          border-radius: 50px;
          border-color: rgba(76, 175, 80, 0.5);
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .glass-btn:hover {
          background: #4CAF50;
          border-color: #4CAF50;
          box-shadow: 0 0 15px rgba(76, 175, 80, 0.5);
        }

        .modal-content {
          background: linear-gradient(135deg, rgba(8, 25, 12, 0.95), rgba(5, 10, 5, 0.98)) !important;
          backdrop-filter: blur(30px);
          border: 1px solid rgba(76, 175, 80, 0.2);
          color: #fff;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.8), 0 0 20px rgba(76, 175, 80, 0.1);
        }

        .modal-header { 
          border-bottom: 1px solid rgba(76, 175, 80, 0.1); 
          padding: 25px 30px; 
        }
        
        .modal-title { font-weight: 800; color: #fff; }
        
        .modal-body { padding: 35px; }
        
        .modal-footer { 
          border-top: 1px solid rgba(76, 175, 80, 0.1); 
          padding: 25px; 
        }
        
        .modal-img-container {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 30px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .modal-details strong {
          color: #4CAF50 !important;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 991px) {
          .section-title-premium { font-size: 2rem; }
          .product-img-wrapper { height: 220px; }
        }
      `}</style>
    </div>
  );
}
