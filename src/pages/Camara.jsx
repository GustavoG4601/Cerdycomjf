// src/pages/Camara.jsx
import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

export default function Camara() {
  const camaras = [
    {
      nombre: "Cámara WiFi Exterior Ezviz H8c 1080p",
      img: "camara 1.webp",
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
      img: "camara 2.webp",
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
      img: "camara 3.png",
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
      img: "camara 4.jpg",
      descripcion: "Cámara PTZ con zoom óptico y visión nocturna de largo alcance.",
      alcance: "Zoom óptico 15X y visión nocturna hasta 100 metros.",
      beneficios: [
        "Resolución Full HD 1080p",
        "WDR 120dB y reducción de ruido 3D-DNR",
        "Soporta TVI/AHD/CVI y control por RS-485"
      ],
    },
    {
      nombre: "DVR 2MP Lite / 8 Canales",
      img: "grabadora.webp",
      descripcion: "Grabador de video digital con múltiples tecnologías.",
      alcance: "4 canales analógicos + 2 IP (6 en total).",
      beneficios: [
        "Compatible con Hik-Connect P2P",
        "Compresión H.265 Pro+",
        "Soporta HD-TVI, HD-CVI, AHD y CVBS"
      ],
    },
    {
      nombre: "DVR 2MP Lite / 16 Canales",
      img: "grabadora 2.png",
      descripcion: "Grabador de video digital con soporte para hasta 18 canales.",
      alcance: "16 canales TurboHD + 2 IP.",
      beneficios: [
        "Software cliente iVMS-4200",
        "Soporta DynDNS / NO-IP",
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
