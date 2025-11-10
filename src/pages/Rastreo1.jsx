// src/pages/Rastreo1.jsx
import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

export default function Rastreo1() {
  const dispositivos = [
    {
      nombre: "Box Track con Control",
      img: "gps1.webp",
      descripcion: "GPS vehicular compacto con alarmas y control remoto.",
      alcance: "Compatible con 2G y 4G. Voltaje de trabajo 9-90V.",
      beneficios: [
        "Alarmas ACC, geocerca y exceso de velocidad",
        "Memoria en áreas sin señal",
        "Función de corte de combustible (requiere relé)"
      ],
    },
    {
      nombre: "GPS EC33 4G/2G",
      img: "gps2.webp",
      descripcion: "Rastreador avanzado con soporte a múltiples bandas LTE.",
      alcance: "Soporta protocolos GT06 y JT808. Voltaje 9-95V.",
      beneficios: [
        "Alarmas: vibración, desconexión, exceso de velocidad",
        "Historial de rutas reproducible",
        "Ligero y de fácil instalación"
      ],
    },
    {
      nombre: "Plataforma de Rastreo Satelital",
      img: "gps3.jpg",
      descripcion: "Sistema profesional de gestión de flotas y rastreo global.",
      alcance: "Compatible con proveedores telemáticos a nivel mundial.",
      beneficios: [
        "Monitoreo en tiempo real de vehículos y cargas",
        "Optimización de operaciones logísticas",
        "Historial de recorridos y reportes avanzados"
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
    const numero = "573177374434";
    const mensaje = `Hola, quiero más información sobre el ${dispositivoSeleccionado.nombre}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
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
            Rastreo Vehicular y Satelital
          </h1>
          <p className="text-light text-center mb-0">
            Dispositivos GPS y plataformas para el control total de tu flota.
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
              className="col-md-4 col-sm-6 mb-4"
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
