import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer py-5 text-light">
      <Container>
        <Row className="gy-4">
          {/* Logo */}
          <Col md={3} className="text-center text-md-start">
            <img
              src="/logo.png"
              alt="CerdycomJF"
              style={{ maxHeight: "80px", marginBottom: "15px" }}
            />
            <p className="small">
              Innovación y seguridad para tu tranquilidad.  
              Soluciones en rastreo vehicular, energía fotovoltaica y más.
            </p>
          </Col>

          {/* Contacto */}
<Col md={3} className="px-4 px-md-5">
  <h5 className="fw-bold mb-3 text-white">Contáctanos</h5>
  <p><FaPhone className="me-2 text-success" /> +57 3177374434</p>
  <p><FaEnvelope className="me-2 text-success" /> ventas@cerdyconjf.com</p>
  <p><FaMapMarkerAlt className="me-2 text-success" /> Cartagena, Colombia</p>
</Col>


          {/* Redes sociales */}
          <Col md={3}>
            <h5 className="fw-bold mb-3 text-white">Síguenos</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a 
                href="https://www.facebook.com/share/1K4E2ZNvN2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.instagram.com/cerdycom?igsh=MWpodjgwbGxpYjUy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/573177374434" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                <FaWhatsapp />
              </a>
            </div>
          </Col>

          {/* Descarga nuestra app */}
          <Col md={3}>
            <h5 className="fw-bold mb-3 text-white">Descarga nuestra App</h5>
            <div className="d-flex flex-column gap-2">
              <a 
                href="https://play.google.com/store/apps/details?id=com.cerdycomjf.app" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" 
                  alt="Google Play" 
                  style={{ maxHeight: "40px" }}
                />
              </a>
              <a 
                href="https://apps.apple.com/co/app/cerdycomjf-gps/id1621271265" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png" 
                  alt="App Store" 
                  style={{ maxHeight: "40px" }}
                />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-4 text-white" />

        <Row>
          <Col className="text-center">
            <small>© {new Date().getFullYear()} CerdycomJF - Todos los derechos reservados</small>
          </Col>
        </Row>
      </Container>

      <style>{`
        .footer {
          position: relative;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(5px);
        }

        .footer::before {
          content: "";
          position: absolute;
          top: -40px;
          left: 0;
          width: 100%;
          height: 40px;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.85));
        }

        .footer::after {
          content: "";
          position: absolute;
          bottom: -40px;
          left: 0;
          width: 100%;
          height: 40px;
          background: linear-gradient(to top, transparent, rgba(0,0,0,0.85));
        }

        .footer a, .footer-link {
          color: #c8e6c9;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer a:hover, .footer-link:hover {
          color: #81c784;
        }
        .social-icon {
          font-size: 1.5rem;
          color: #fff;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .social-icon:hover {
          color: #4CAF50;
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  );
}
