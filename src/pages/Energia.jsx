// src/pages/Energia.jsx
import { Container, Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

export default function Energia() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const energia = [
    {
      nombre: "Paneles Solares",
      img: "https://static.vecteezy.com/system/resources/thumbnails/050/835/643/small/solar-panel-isolated-on-transparent-background-cut-out-png.png",
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
      img: "https://previews.123rf.com/images/enki/enki1110/enki111000019/10854307-solar-power-plant-isolated-on-white-background.jpg",
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
      img: "https://b2b.technosun.com/web/image/product.template/14206/image_1024/%5B01V4%5D%201x04%2001V4%20Soporte%20coplanar%20atornillado%2C%20cubierta%20teja%20para%204%20paneles%20%20%3C%202279x1150%20mm%20en%201%20fila%20-%20Serie%20SU?unique=004c422",
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
      img: "https://www.kin.energy/PAgina%20KINENERGY%20IMAGENES/Imagenes%20Blog/2021/Blog%202021/Eficiencia-energ%C3%A9tica-y-sus-beneficios-dentro-de-un-proyecto.png",
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
            Energía Solar
          </h1>
          <p className="text-light text-center mb-0">
            Soluciones sostenibles para un futuro más limpio
          </p>
        </div>
      </section>

      {/* Listado de Energía */}
      <Container className="py-5">
        <h2 className="text-center fw-bold text-success mb-4">
          Nuestros Servicios en Energía
        </h2>

        <div className="row">
          {energia.map((item, idx) => (
            <div className="col-md-3 col-sm-6 mb-4" key={idx}>
              <Card
                className="h-100 shadow-sm energia-card"
                onClick={() => handleShow(item)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={item.img}
                  alt={item.nombre}
                  style={{ height: "200px", objectFit: "cover" }}
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
