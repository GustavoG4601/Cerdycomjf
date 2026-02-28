// src/pages/Energia.jsx
import { Container, Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

export default function Energia() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const energia = [
    // 🚀 Productos del catálogo
    {
      nombre: "Ventilador Solar Portátil con Luz LED",
      img: "/media/products/Ventilador.webp",
      descripcion:
        "Ventilador de emergencia con batería recargable, radio FM y carga solar.",
      beneficios: [
        "Ventilador de 8 pulgadas con 2 velocidades",
        "Batería recargable LiFePO4 3.2V // 5.8Ah",
        "Incluye radio FM, bocina Bluetooth y lector USB/TF",
        "16 luces LED nocturnas integradas",
        "Carga mediante puerto USB-C o panel solar",
      ],
    },
    {
      nombre: "Kit Solar Portátil con Bombillos",
      img: "/media/products/bombillo.webp",
      descripcion:
        "Sistema de iluminación solar portátil, ideal para hogares rurales y emergencias.",
      beneficios: [
        "Panel solar de 9V 3.5W",
        "Batería de 6V 4.5Ah",
        "Incluye 3 bombillos LED de 3W",
        "Autonomía aproximada de hasta 20 horas",
        "Carga por panel solar (12-15h) o adaptador de corriente (8-10h)",
        "Incluye puerto USB para carga de dispositivos",
      ],
    },

    // ⚡ Servicios generales de energía solar (los que ya tenías)
    {
      nombre: "Paneles Solares",
      img: "/media/products/panel1.webp",
      descripcion:
        "Paneles solares de alta eficiencia para hogares, negocios y proyectos personalizados.",
      beneficios: [
        "Ahorro significativo en la factura de energía",
        "Durabilidad superior a 25 años",
        "Reducción de huella de carbono",
      ],
    },
    {
      nombre: "Parques Solares",
      img: "/media/products/panel2.webp",
      descripcion:
        "Soluciones a gran escala con parques solares para empresas, fincas y comunidades.",
      beneficios: [
        "Generación de energía a nivel industrial",
        "Escalabilidad según la demanda",
        "Inversión rentable a largo plazo",
      ],
    },
    {
      nombre: "Sistemas Solares para Copropiedades",
      img: "/media/products/panel3.webp",
      descripcion:
        "Energía solar compartida para edificios residenciales, conjuntos y condominios.",
      beneficios: [
        "Distribución equitativa de energía",
        "Reducción de costos comunitarios",
        "Gestión eficiente de consumo",
      ],
    },
    {
      nombre: "Eficiencia Energética",
      img: "/media/products/panel4.webp",
      descripcion:
        "Estudios y soluciones para optimizar el consumo energético en tu empresa u hogar.",
      beneficios: [
        "Menor consumo eléctrico",
        "Tecnología LED y automatización",
        "Cumplimiento con normativas ambientales",
      ],
    },
  ];

  const handleShow = (item) => {
    setSelected(item);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="energia-page">
      <NavbarComponent />

      {/* Hero Section */}
      <section className="hero-product-detail">
        <div className="hero-overlay-glass">
          <Container>
            <div className="text-center" data-aos="fade-up">
              <h1 className="display-3 fw-extrabold text-white mb-3">
                Energía <span>Fotovoltaica</span>
              </h1>
              <p className="lead text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
                Aprovecha el poder del sol con soluciones portátiles, residenciales e industriales.
                Sostenibilidad, ahorro y autonomía energética para tu futuro.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Contenido con Glassmorphism */}
      <Container className="py-5 product-container">
        <div className="text-center mb-5">
          <h2 className="section-title-premium" data-aos="fade-up">
            Nuestros <span>Sistemas</span>
          </h2>
          <div className="divider-glow mx-auto" style={{ width: "80px", height: "4px", background: "#4CAF50", borderRadius: "10px", boxShadow: "0 0 15px rgba(76, 175, 80, 0.5)" }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {energia.map((item, idx) => (
            <div
              className="col-lg-4 col-md-6"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <Card className="glass-card-product h-100" onClick={() => handleShow(item)}>
                <div className="product-img-wrapper">
                  <ImageWithSkeleton
                    src={item.img}
                    alt={item.nombre}
                    className="product-img-zoom"
                    loading="lazy"
                  />
                </div>
                <Card.Body className="d-flex flex-column text-center p-4">
                  <h5 className="text-white fw-bold mb-3">{item.nombre}</h5>
                  <p className="text-white-50 small mb-4">{item.descripcion}</p>
                  <Button variant="outline-success" className="mt-auto glass-btn">
                    Ver Detalles
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal con detalles */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        {selected && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selected.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-img-container mb-4">
                <img
                  src={selected.img}
                  alt={selected.nombre}
                  className="img-fluid d-block mx-auto"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                  loading="lazy"
                />
              </div>
              <div className="modal-details p-3">
                <p className="mb-2"><strong className="text-success">Descripción:</strong> <span className="text-white-50">{selected.descripcion}</span></p>
                <p className="mb-2"><strong className="text-success">Beneficios:</strong></p>
                <ul className="text-white-50">
                  {selected.beneficios.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="link" className="text-white-50 text-decoration-none" onClick={handleClose}>
                Cerrar
              </Button>
              <Button
                variant="success"
                as="a"
                href={`https://wa.me/573016465632?text=Hola, estoy interesado en ${selected.nombre}`}
                target="_blank"
                className="px-4 py-2 fw-bold"
              >
                Solicitar Información
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <Footer />

      <style>{`
        .energia-page {
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
