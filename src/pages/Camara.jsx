// src/pages/Camara.jsx
import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

export default function Camara() {
  const camaras = [
    {
      nombre: "Cámara Bullet HD",
      img: "1.png",
      descripcion: "Cámara de alta definición ideal para exteriores.",
      alcance: "Hasta 50 metros con visión nocturna.",
      beneficios: [
        "Imagen nítida incluso de noche",
        "Resistente al agua y polvo (IP66)",
        "Ideal para perímetros y accesos"
      ],
    },
    {
      nombre: "Cámara Domo IR",
      img: "2.png",
      descripcion: "Diseño compacto para interiores y exteriores.",
      alcance: "30 metros con infrarrojo.",
      beneficios: [
        "Diseño discreto",
        "Instalación sencilla en techos y paredes",
        "Visión nocturna automática"
      ],
    },
    {
      nombre: "Cámara PTZ 360°",
      img: "3.png",
      descripcion: "Cámara de movimiento con zoom y rotación total.",
      alcance: "Zoom óptico de 30x y rotación de 360°.",
      beneficios: [
        "Cobertura total en grandes espacios",
        "Control remoto desde PC o móvil",
        "Detección y seguimiento automático"
      ],
    },
    {
      nombre: "Cámara Wi-Fi",
      img: "4.png",
      descripcion: "Cámara inalámbrica fácil de instalar.",
      alcance: "Conectividad Wi-Fi y almacenamiento en la nube.",
      beneficios: [
        "Instalación sin cables",
        "Control desde app móvil",
        "Grabación en tarjeta SD o nube"
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
    const numero = "573177374434"; // 👈 tu número en formato internacional sin "+"
    const mensaje = `Hola, quiero más información sobre la ${camaraSeleccionada.nombre}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="camara-page">
      <NavbarComponent />

      {/* Hero con imagen de fondo */}
      <section
        className="hero-camara"
        style={{ backgroundImage: "url('Fondo.png')" }}
      >
        <div className="overlay">
          <h1 className="fw-bold text-white text-center display-5">
            Cámaras de Seguridad
          </h1>
          <p className="text-light text-center mb-0">
            Soluciones profesionales en CCTV, IP, Wi-Fi y más
          </p>
        </div>
      </section>

      {/* Listado de cámaras */}
      <Container className="py-5">
        <h2 className="text-center fw-bold text-success mb-4">
          Nuestros Modelos
        </h2>

        <div className="row">
          {camaras.map((cam, idx) => (
            <div
              className="col-md-3 col-sm-6 mb-4"
              key={idx}
              onClick={() => handleShow(cam)}
              style={{ cursor: "pointer" }}
            >
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={cam.img}
                  alt={cam.nombre}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{cam.nombre}</Card.Title>
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
              <img
                src={camaraSeleccionada.img}
                alt={camaraSeleccionada.nombre}
                className="img-fluid mb-3 d-block mx-auto"
                style={{ maxHeight: "250px", objectFit: "contain" }}
              />
              <p><strong>Descripción:</strong> {camaraSeleccionada.descripcion}</p>
              <p><strong>Alcance:</strong> {camaraSeleccionada.alcance}</p>
              <p><strong>Beneficios:</strong></p>
              <ul>
                {camaraSeleccionada.beneficios.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={enviarWhatsApp}>
            Solicitar Información
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />

      {/* Estilos locales */}
      <style>{`
        .hero-camara {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 45vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-camara .overlay {
          background: rgba(0, 0, 0, 0.55);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .camara-page .card:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
