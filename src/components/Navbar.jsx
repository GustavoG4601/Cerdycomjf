import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

export default function NavBarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center animate__animated animate__fadeInLeft"
        >
          <img
            src="/logo.png"
            alt="CerdycomJF"
            style={{ maxHeight: "45px", marginRight: "10px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center animate__animated animate__fadeInDown">
            <Nav.Link
              href="/"
              className={`nav-custom ${isActive("/") ? "active-link" : ""}`}
            >
              Inicio
            </Nav.Link>

            <NavDropdown
              title={
                <span style={{ color: scrolled ? "#1B5E20" : "#ffffff" }}>
                  Servicios
                </span>
              }
              id="services-dropdown"
              className={`nav-custom ${
                location.pathname.startsWith("/services1") ? "active-link" : ""
              }`}
            >
              <NavDropdown.Item href="/services1/seguridad">
                Seguridad Electrónica
              </NavDropdown.Item>
              <NavDropdown.Item href="/services1/rastreo">
                Rastreo Vehicular
              </NavDropdown.Item>
              <NavDropdown.Item href="/services1/solar">
                Energía Fotovoltaica
              </NavDropdown.Item>
              <NavDropdown.Item href="/services1/antenas">
                Antenas e Internet
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services1/capacitacion">
                Consejería y Servicios Generales
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/productos"
              className={`nav-custom ${
                isActive("/productos") ? "active-link" : ""
              }`}
            >
              Productos
            </Nav.Link>

            <Nav.Link
              href="/nosotros"
              className={`nav-custom ${isActive("/nosotros") ? "active-link" : ""}`}
            >
              Nosotros
            </Nav.Link>

            {/* ✅ Ahora los botones e iconos son responsivos */}
            <div className="extras-wrapper d-flex flex-wrap align-items-center gap-3 mt-3 mt-lg-0">
              <Button
                href="http://49.13.219.255/login"
                target="_blank"
                rel="noopener noreferrer"
                className="vehicle-btn pulse"
              >
                Dónde está mi vehículo
              </Button>

              <Button
                href="https://checkout.bold.co/payment/LNK_TFIM6OAGN8"
                target="_blank"
                rel="noopener noreferrer"
                className="bill-btn pulse"
              >
                Paga aquí tu factura
              </Button>

              <div className="d-flex align-items-center gap-3">
                <a
                  href="https://www.facebook.com/share/1K4E2ZNvN2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ color: scrolled ? "#1B5E20" : "#ffffff" }}
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/cerdycom?igsh=MWpodjgwbGxpYjUy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ color: scrolled ? "#1B5E20" : "#ffffff" }}
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .custom-navbar {
          transition: all 0.4s ease;
          padding: 15px 0;
          background: transparent;
        }
        .custom-navbar.scrolled {
          background: #ffffff !important;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
        }

        .custom-navbar, 
        .custom-navbar * {
          font-family: 'Montserrat', sans-serif !important;
        }

        .nav-custom {
          font-weight: 500;
          margin-left: 18px;
          position: relative;
          color: ${scrolled ? "#1B5E20" : "#ffffff"} !important;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }
        .nav-custom:hover {
          color: #2E7D32 !important;
        }
        .active-link {
          color: #ffffff !important;
          background: rgba(76, 175, 80, 0.55);
          border-radius: 6px;
          padding: 6px 12px;
          font-weight: 600;
          box-shadow: 0 0 6px rgba(76, 175, 80, 0.4);
        }

        #services-dropdown.nav-custom > .dropdown-toggle {
          background: none !important;
          border: none !important;
          color: ${scrolled ? "#1B5E20" : "#ffffff"} !important;
          padding: 0 !important;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
        }
        #services-dropdown.nav-custom > .dropdown-toggle::after {
          border-top-color: ${scrolled ? "#1B5E20" : "#ffffff"} !important;
        }
        #services-dropdown.nav-custom > .dropdown-toggle:hover {
          color: #2E7D32 !important;
        }
        #services-dropdown.nav-custom.active-link > .dropdown-toggle {
          color: #ffffff !important;
          background: rgba(76, 175, 80, 0.55);
          border-radius: 6px;
          padding: 6px 12px !important;
        }

        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(27, 94, 32, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 15px 8px rgba(255, 255, 255, 1); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 1); }
        }
        .pulse { animation: pulse 5s infinite; }

        .vehicle-btn, .bill-btn {
          background: linear-gradient(45deg, #1B5E20, #1B5E20);
          border: none;
          font-weight: bold;
          padding: 8px 18px;
          border-radius: 30px;
          color: #fff !important;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .vehicle-btn:hover, .bill-btn:hover {
          background: linear-gradient(45deg, #BDBDBD, #2E7D32);
          transform: scale(1.05);
        }

        .social-icon {
          font-size: 1.5rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .social-icon:hover {
          color: #4CAF50;
          transform: scale(1.2);
        }

        /* ✅ Ajustes responsivos */
        @media (max-width: 991px) {
          .extras-wrapper {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .vehicle-btn, .bill-btn {
            width: 100%;
            text-align: center;
          }
          .social-icon {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </Navbar>
  );
}
