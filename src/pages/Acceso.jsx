// src/pages/Acceso.jsx
import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

export default function Acceso() {
  const servicios = [
    {
      nombre: "Control de acceso peatonal",
      img: "https://www.dointech.com.co/images/reconocimiento-facial-camara-termica-control-de-acceso.jpg", // 👈 cambia por imagen real
      descripcion:
        "Sistemas avanzados de control de acceso peatonal para empresas, conjuntos residenciales y oficinas.",
      alcance: "Integración con tarjetas, huellas y códigos QR.",
      beneficios: [
        "Mayor seguridad en accesos",
        "Control centralizado",
        "Registro de entradas y salidas",
      ],
    },
    {
      nombre: "Alarmas contra robo",
      img: "https://sigmixv.com/wp-content/uploads/Panel-de-alarma-contra-robos-DSC-sigmixv-1024x535.jpg",
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
      img: "https://centropuertas.net/productos/talanqueras-vehiculares/barrera-talanquera-vehicular-axis-450-t.jpg",
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
      img: "https://http2.mlstatic.com/D_NQ_NP_651817-MLA75719316132_042024-O.webp",
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
      img: "https://atyges.es/wp-content/uploads/2022/05/Mini-3-Pro-sp-600x338.png",
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
    const numero = "573177374434"; // 👈 tu número de WhatsApp
    const mensaje = `Hola, quiero más información sobre ${servicioSeleccionado.nombre}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="acceso-page">
      <NavbarComponent />

      {/* Hero con imagen de fondo */}
      <section
        className="hero-acceso"
        style={{ backgroundImage: "url('Fondo.png')" }} // 👈 cámbiala por tu fondo real
      >
        <div className="overlay">
          <h1 className="fw-bold text-white text-center display-5">
            Control de Acceso y Seguridad Física
          </h1>
          <p className="text-light text-center mb-0">
            Soluciones integrales para la protección de personas, bienes y
            espacios.
          </p>
        </div>
      </section>

      {/* Listado de servicios */}
      <Container className="py-5">
        <h2 className="text-center fw-bold text-success mb-4">
          Nuestros Servicios
        </h2>

        <div className="row">
          {servicios.map((serv, idx) => (
            <div
              className="col-md-3 col-sm-6 mb-4"
              key={idx}
              onClick={() => handleShow(serv)}
              style={{ cursor: "pointer" }}
            >
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={serv.img}
                  alt={serv.nombre}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{serv.nombre}</Card.Title>
                </Card.Body>
              </Card>
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
              <img
                src={servicioSeleccionado.img}
                alt={servicioSeleccionado.nombre}
                className="img-fluid mb-3 d-block mx-auto"
                style={{ maxHeight: "250px", objectFit: "contain" }}
              />
              <p>
                <strong>Descripción:</strong> {servicioSeleccionado.descripcion}
              </p>
              <p>
                <strong>Alcance:</strong> {servicioSeleccionado.alcance}
              </p>
              <p>
                <strong>Beneficios:</strong>
              </p>
              <ul>
                {servicioSeleccionado.beneficios.map((b, i) => (
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
        .hero-acceso {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 45vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-acceso .overlay {
          background: rgba(0, 0, 0, 0.55);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .acceso-page .card:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
