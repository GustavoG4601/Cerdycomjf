// src/pages/Internet.jsx
import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

export default function Internet() {
  const servicios = [
    {
      nombre: "Antena Internet CerdycomJF",
      img: "https://m.media-amazon.com/images/I/81HMw4W-V8L.jpg", // 👈 cambia por tus imágenes
      descripcion:
        "Antena de alto rendimiento diseñada para ofrecer conectividad estable en entornos urbanos y rurales.",
      alcance: "Cobertura amplia con conexión estable.",
      beneficios: [
        "Instalación rápida y eficiente",
        "Diseño compacto y resistente",
        "Soporte técnico especializado",
      ],
    },
    {
      nombre: "Conexión POE hasta 100mts",
      img: "https://media.startech.com/cms/products/gallery_large/poeext1gat.main.jpg",
      descripcion:
        "Sistema de conexión mediante Power Over Ethernet para largas distancias sin pérdida de señal.",
      alcance: "Alcance garantizado hasta 100 metros.",
      beneficios: [
        "Menor consumo energético",
        "Compatible con múltiples dispositivos",
        "Transmisión de datos y energía en un solo cable",
      ],
    },
    {
      nombre: "Cobertura en zonas rurales",
      img: "https://www.internet-satelite.eu/wp-content/uploads/2015/01/wifi-rural1.jpg",
      descripcion:
        "Tecnología optimizada para ampliar la señal en hogares, negocios y fincas en zonas alejadas.",
      alcance: "Cobertura extendida en áreas rurales.",
      beneficios: [
        "Conexión estable en condiciones adversas",
        "Mayor alcance de red",
        "Ideal para áreas remotas",
      ],
    },
    {
      nombre: "Integración con routers",
      img: "https://lh3.googleusercontent.com/proxy/UFsq4cjgZs_yYzX2Xqjb93DSX_Mev6uTMBaUlsu9eKQOhipGejms4DHb8-Q8jhq8mX1Zlvk8_u_p1i68pZQWCYSKDfBfejT74SKIY4Y2MgR7xg",
      descripcion:
        "Compatibilidad total con routers modernos para garantizar una experiencia de internet sin interrupciones.",
      alcance: "Compatible con cualquier router estándar.",
      beneficios: [
        "Fácil integración con routers Wi-Fi",
        "Ideal para hogares y oficinas",
        "Mejora la distribución de señal",
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
    const mensaje = `Hola, quiero más información sobre ${servicioSeleccionado.nombre}`;
    const url = `https://wa.me/573177374434?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="internet-page">
      <NavbarComponent />

      {/* Hero con imagen de fondo */}
      <section
        className="hero-internet"
        style={{ backgroundImage: "url('Fondo.png')" }} // 👈 cámbiala por tu fondo
      >
        <div className="overlay">
          <h1 className="fw-bold text-white text-center display-5">
            Antenas e Internet
          </h1>
          <p className="text-light text-center mb-0">
            Conectividad estable para hogares, negocios y zonas rurales.
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
        .hero-internet {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 45vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-internet .overlay {
          background: rgba(0, 0, 0, 0.55);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .internet-page .card:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
