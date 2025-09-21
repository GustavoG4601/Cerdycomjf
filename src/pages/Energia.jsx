// src/pages/Energia.jsx
import { Container, Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

export default function Energia() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const energia = [
    // 🚀 Productos del catálogo
    {
      nombre: "Ventilador Solar Portátil con Luz LED",
      img: "ventilador.webp",
      descripcion:
        "Ventilador de emergencia con batería recargable, radio FM y carga solar.",
      beneficios: [
        "Ventilador de 8 pulgadas con 2 velocidades",
        "Batería recargable LiFePO4 3.2V / 5.8Ah",
        "Incluye radio FM, bocina Bluetooth y lector USB/TF",
        "16 luces LED nocturnas integradas",
        "Carga mediante puerto USB-C o panel solar",
      ],
    },
    {
      nombre: "Kit Solar Portátil con Bombillos",
      img: "bombillo.webp",
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
      img: "panel1.png",
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
      img: "panel2.jpg",
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
      img: "panel3.jpg",
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
      img: "panel4.png",
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

      {/* Hero con imagen de fondo */}
      <section
        className="hero-energia"
        style={{ backgroundImage: "url('Fondo.png')" }}
      >
        <div className="overlay">
          <h1 className="fw-bold text-white text-center display-5">
            Energía Fotovoltaica
          </h1>
          <p className="text-light text-center mb-0">
            Soluciones solares portátiles, residenciales e industriales
          </p>
        </div>
      </section>

      {/* Listado de Energía */}
      <Container className="py-5">
        <h2 className="text-center fw-bold text-success mb-4">
          Nuestros Productos y Servicios en Energía
        </h2>

        <div className="row">
          {energia.map((item, idx) => (
            <div className="col-md-4 col-sm-6 mb-4" key={idx}>
              <Card
                className="h-100 shadow-sm energia-card"
                onClick={() => handleShow(item)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={item.img}
                  alt={item.nombre}
                  style={{ height: "220px", objectFit: "contain" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{item.nombre}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      <Footer />

      {/* Modal con detalles */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        {selected && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selected.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selected.img}
                alt={selected.nombre}
                className="img-fluid mb-3 d-block mx-auto"
                style={{ maxHeight: "250px", objectFit: "contain" }}
              />
              <p><strong>Descripción:</strong> {selected.descripcion}</p>
              <p><strong>Beneficios:</strong></p>
              <ul>
                {selected.beneficios.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button
                variant="success"
                as="a"
                href={`https://wa.me/573177374434?text=Hola, estoy interesado en ${selected.nombre}`}
                target="_blank"
              >
                Solicitar Información
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Estilos locales */}
      <style>{`
        .hero-energia {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 45vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-energia .overlay {
          background: rgba(0, 0, 0, 0.55);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .energia-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .energia-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .energia-card:active {
          transform: scale(0.97);
        }
      `}</style>
    </div>
  );
}
