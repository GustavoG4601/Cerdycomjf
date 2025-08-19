import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // 👈 importamos useNavigate
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const navigate = useNavigate(); // 👈 hook para navegación

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="about-section py-5 text-light">
      <Container>
        <Row className="align-items-center">
          {/* Texto */}
<Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
  <h3 className="fw-bold text-gradient mb-3">¿Quiénes Somos?</h3>
  <p>
    En <span className="fw-bold">CERDYCOMJF</span> somos especialistas en{" "}
    <strong>seguridad electrónica</strong> y{" "}
    <strong>rastreo satelital</strong>, con una trayectoria de más de{" "}
    <strong>siete años</strong> protegiendo lo que más valoran nuestros clientes.
  </p>
  <p>
    Contamos con cobertura nacional e internacional, ofreciendo{" "}
    <strong>tecnología de vanguardia</strong>,{" "}
    <strong>equipos certificados</strong> y una{" "}
    <strong>plataforma inteligente</strong> diseñada para el monitoreo en tiempo
    real de vehículos, personas, mascotas, mercancías y contenedores.
  </p>
  <p>
    Nuestro compromiso es brindar{" "}
    <strong>soluciones integrales</strong> que combinan eficiencia, confianza y
    control, al servicio de empresas y usuarios que buscan proteger sus activos
    con tecnología confiable y soporte permanente.
  </p>
  


            <h5 className="fw-bold text-gradient mt-4">
              Certificados y avalados por:
            </h5>
            <div className="d-flex flex-wrap gap-4 mt-3 cert-logos">
              <img src="pol.jpg" alt="MinTIC" height="50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Logo_del_Ministerio_de_Tecnolog%C3%ADas_de_la_Informaci%C3%B3n_y_las_Comunicaciones_de_Colombia_2022-2026.png" alt="Fedetec" height="50" />
              <img src="https://fedetec.org/wp-content/uploads/2023/02/cropped-Imagotipo_Slogan_Dos_Tintas-1-e1735956926429.png" alt="Google Cloud" height="50" />
              
            </div>

            {/* 👇 Botón actualizado */}
            <Button
              onClick={() => navigate("/nosotros")}
              className="about-btn mt-4"
            >
              Conócenos más
            </Button>
          </Col>

          {/* Imagen / mapa */}
          <Col md={6} className="text-center" data-aos="fade-left">
            <img
              src="https://websaas.net/wp-content/uploads/2021/11/mapa-colombia-soporte.png"
              alt="Cobertura en Colombia"
              className="img-fluid rounded shadow-lg map-img"
              style={{ maxHeight: "400px" }}
            />
          </Col>
        </Row>
      </Container>

      <style>{`
        .about-section {
          position: relative;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          border-top: 3px solid rgba(76, 175, 80, 0.5);
          border-bottom: 3px solid rgba(76, 175, 80, 0.5);
        }
        .about-section::before, .about-section::after {
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          height: 40px;
        }
        .about-section::before {
          top: -40px;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.75));
        }
        .about-section::after {
          bottom: -40px;
          background: linear-gradient(to top, transparent, rgba(0,0,0,0.75));
        }
        .text-gradient {
          background: linear-gradient(45deg, #1B5E20, #4CAF50);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .about-section p {
          color: #f5f5f5;
        }
        .cert-logos img {
          filter: grayscale(100%);
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .cert-logos img:hover {
          transform: scale(1.1);
          filter: grayscale(0%) drop-shadow(0 0 8px #4CAF50);
        }
        .map-img {
          transition: all 0.4s ease;
          border: 3px solid transparent;
        }
        .map-img:hover {
          transform: scale(1.05);
          border: 3px solid #4CAF50;
          box-shadow: 0 0 25px rgba(76,175,80,0.6);
        }
        .about-btn {
          background: linear-gradient(45deg, #1B5E20, #4CAF50);
          border: none;
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 30px;
          transition: all 0.3s ease;
          color: #fff;
        }
        .about-btn:hover {
          background: linear-gradient(45deg, #43A047, #2E7D32);
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
