// src/pages/Camara.jsx
import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

export default function Camara() {
  const camaras = [
    {
      nombre: "Cámara WiFi Exterior Ezviz H8c 1080p",
      img: "/media/products/camara 1.webp",
      descripcion: "Cámara IP 360° para exteriores con resolución Full HD.",
      alcance: "Visión 360° y almacenamiento en microSD hasta 512GB.",
      beneficios: [
        "Control desde app móvil",
        "Conectividad WiFi fácil de instalar",
        "Almacenamiento local y en la nube"
      ],
    },
    {
      nombre: "Cámara Domo 5MP CS-H6C",
      img: "/media/products/camara 2.webp",
      descripcion: "Cámara de vigilancia domo con excelente calidad de imagen.",
      alcance: "Lente de 4mm con ángulo de visión 82° horizontal.",
      beneficios: [
        "Alta resolución de 5MP",
        "Soporta microSD hasta 512GB",
        "Red cableada RJ45"
      ],
    },
    {
      nombre: "Cámara Bala TurboHD 5MP",
      img: "/media/products/camara 3.png",
      descripcion: "Cámara bala con luz blanca integrada para visión a color.",
      alcance: "Alcance de 40 metros con iluminación LED.",
      beneficios: [
        "Resolución 3K (2960x1665)",
        "Micrófono integrado",
        "Soporta 4 tecnologías (HD-TVI, HD-CVI, AHD, CVBS)"
      ],
    },
    {
      nombre: "Cámara Domo PTZ TurboHD 1080P",
      img: "/media/products/camara 4.jpg",
      descripcion: "Cámara PTZ con zoom óptico y visión nocturna de largo alcance.",
      alcance: "Zoom óptico 15X y visión nocturna hasta 100 metros.",
      beneficios: [
        "Resolución Full HD 1080p",
        "WDR 120dB y reducción de ruido 3D-DNR",
        "Soporta TVI/AHD/CVI y control por RS-485"
      ],
    },
    {
      nombre: "DVR 2MP Lite // 8 Canales",
      img: "/media/products/grabadora.webp",
      descripcion: "Grabador de video digital con múltiples tecnologías.",
      alcance: "4 canales analógicos + 2 IP (6 en total).",
      beneficios: [
        "Compatible con Hik-Connect P2P",
        "Compresión H.265 Pro+",
        "Soporta HD-TVI, HD-CVI, AHD y CVBS"
      ],
    },
    {
      nombre: "DVR 2MP Lite // 16 Canales",
      img: "/media/products/grabadora 2.png",
      descripcion: "Grabador de video digital con soporte para hasta 18 canales.",
      alcance: "16 canales TurboHD + 2 IP.",
      beneficios: [
        "Software cliente iVMS-4200",
        "Soporta DynDNS // NO-IP",
        "Compresión H.265 Pro+"
      ],
    },
  ];

  // Estado para abrir el modal
  const [show, setShow] = useState(false);
  const [camaraSeleccionada, setCamaraSeleccionada] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (cam) => {
    setCamaraSeleccionada(cam);
    setShow(true);
  };

  // 👉 Función para enviar WhatsApp
  const enviarWhatsApp = () => {
    if (!camaraSeleccionada) return;
    const numero = "573016465632"; // 👈 tu número en formato internacional sin "+"
    const mensaje = `Hola, quiero más información sobre la ${camaraSeleccionada.nombre}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="camara-page">
      <NavbarComponent />

      {/* Hero Section */}
      <section className="hero-product-detail">
        <div className="hero-overlay-glass">
          <Container>
            <div className="text-center" data-aos="fade-up">
              <h1 className="display-3 fw-extrabold text-white mb-3">
                Cámaras de <span>Seguridad</span>
              </h1>
              <p className="lead text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
                Vigilancia inteligente de alta definición para proteger lo que más importa.
                Tecnología IP, WiFi y sistemas CCTV profesionales.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Contenido con Glassmorphism */}
      <Container className="py-5 product-container">
        <div className="text-center mb-5">
          <h2 className="section-title-premium" data-aos="fade-up">
            Catálogo <span>Especializado</span>
          </h2>
          <div className="divider-glow mx-auto" style={{ width: "80px", height: "4px", background: "#4CAF50", borderRadius: "10px", boxShadow: "0 0 15px rgba(76, 175, 80, 0.5)" }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {camaras.map((cam, idx) => (
            <div
              className="col-lg-4 col-md-6"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <Card className="glass-card-product h-100" onClick={() => handleShow(cam)}>
                <div className="product-img-wrapper">
                  <ImageWithSkeleton
                    src={cam.img}
                    alt={cam.nombre}
                    className="product-img-zoom"
                    loading="lazy"
                  />
                </div>
                <Card.Body className="d-flex flex-column text-center p-4">
                  <h5 className="text-white fw-bold mb-3">{cam.nombre}</h5>
                  <p className="text-white-50 small mb-4">{cam.descripcion}</p>
                  <Button variant="outline-success" className="mt-auto glass-btn">
                    Ver Detalles
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal con la info de la cámara */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{camaraSeleccionada?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {camaraSeleccionada && (
            <>
              <div className="modal-img-container mb-4">
                <img
                  src={camaraSeleccionada.img}
                  alt={camaraSeleccionada.nombre}
                  className="img-fluid d-block mx-auto"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                  loading="lazy"
                />
              </div>
              <div className="modal-details p-3">
                <p className="mb-2"><strong className="text-success">Descripción:</strong> <span className="text-white-50">{camaraSeleccionada.descripcion}</span></p>
                <p className="mb-2"><strong className="text-success">Alcance:</strong> <span className="text-white-50">{camaraSeleccionada.alcance}</span></p>
                <p className="mb-2"><strong className="text-success">Beneficios:</strong></p>
                <ul className="text-white-50">
                  {camaraSeleccionada.beneficios.map((b, i) => (
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
        .camara-page {
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
          background: rgba(255, 255, 255, 0.05); /* Ligeramente más claro para fotos de fondo blanco */
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
