// src/pages/Rastreo1.jsx
import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

export default function Rastreo1() {
  const dispositivos = [
    {
      nombre: "GPS Vehicular",
      img: "https://ubik.com.co/cdn/shop/files/WhatsAppImage2024-04-23at2.05.44PM.jpg?v=1713899612&width=1445",
      descripcion: "Dispositivo de rastreo en tiempo real para vehículos particulares y de carga.",
      alcance: "Cobertura nacional con chip de datos.",
      beneficios: [
        "Monitoreo en tiempo real desde app o PC",
        "Historial de recorridos",
        "Alertas de exceso de velocidad y desconexión"
      ],
    },
    {
      nombre: "GPS Motocicletas",
      img: "https://cdn.welayer.io/images/YXBpL2ltYWdlL0xvY2FsaXphZG9yLU1vdG8tSW50ZXJwaG9uZS1HUFMtVHJhY2tlci1BbmdlbC0xMFQtLS5qcGc=",
      descripcion: "Compacto y resistente al agua, ideal para motos.",
      alcance: "Rastreo preciso con red 4G.",
      beneficios: [
        "Instalación oculta",
        "Notificación en caso de movimiento no autorizado",
        "Geocercas de seguridad"
      ],
    },
    {
      nombre: "GPS Personal",
      img: "https://hwdb-api.gurtam.com/images/26193054/637f5ab3c8a1a.png",
      descripcion: "Rastreador portátil para personas, niños o adultos mayores.",
      alcance: "Batería de larga duración y botón SOS.",
      beneficios: [
        "Ligero y fácil de llevar",
        "Botón de emergencia con ubicación inmediata",
        "Ideal para seguridad personal"
      ],
    },
    {
      nombre: "GPS de Carga Pesada",
      img: "https://satrack.com/us/wp-content/uploads/sites/5/2023/07/Dispositivo-GPS-para-camiones.png-600x587-1.webp",
      descripcion: "Rastreo especializado para flotas y transporte pesado.",
      alcance: "Monitoreo de combustible, rutas y paradas.",
      beneficios: [
        "Optimización logística",
        "Reporte de productividad",
        "Control total de la flota"
      ],
    },
  ];

  // Estado para modal
  const [show, setShow] = useState(false);
  const [dispositivoSeleccionado, setDispositivoSeleccionado] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (disp) => {
    setDispositivoSeleccionado(disp);
    setShow(true);
  };

  // 👉 WhatsApp
  const enviarWhatsApp = () => {
    if (!dispositivoSeleccionado) return;
    const mensaje = `Hola, quiero más información sobre el ${dispositivoSeleccionado.nombre}`;
    const url = `https://wa.me/573177374434?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="rastreo-page">
      <NavbarComponent />

      {/* Hero con imagen de fondo */}
      <section
        className="hero-rastreo"
        style={{ backgroundImage: "url('Fondo.png')" }} // 👈 cambia la imagen
      >
        <div className="overlay">
          <h1 className="fw-bold text-white text-center display-5">
            Rastreo Satelital
          </h1>
          <p className="text-light text-center mb-0">
            Monitorea en tiempo real tus vehículos, motos, cargas y más.
          </p>
        </div>
      </section>

      {/* Listado de dispositivos */}
      <Container className="py-5">
        <h2 className="text-center fw-bold text-success mb-4">
          Nuestros Dispositivos
        </h2>

        <div className="row">
          {dispositivos.map((disp, idx) => (
            <div
              className="col-md-3 col-sm-6 mb-4"
              key={idx}
              onClick={() => handleShow(disp)}
              style={{ cursor: "pointer" }}
            >
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={disp.img}
                  alt={disp.nombre}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{disp.nombre}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal con la info */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{dispositivoSeleccionado?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dispositivoSeleccionado && (
            <>
              <img
                src={dispositivoSeleccionado.img}
                alt={dispositivoSeleccionado.nombre}
                className="img-fluid mb-3 d-block mx-auto"
                style={{ maxHeight: "250px", objectFit: "contain" }}
              />
              <p><strong>Descripción:</strong> {dispositivoSeleccionado.descripcion}</p>
              <p><strong>Alcance:</strong> {dispositivoSeleccionado.alcance}</p>
              <p><strong>Beneficios:</strong></p>
              <ul>
                {dispositivoSeleccionado.beneficios.map((b, i) => (
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
        .hero-rastreo {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 45vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-rastreo .overlay {
          background: rgba(0, 0, 0, 0.55);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .rastreo-page .card:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
