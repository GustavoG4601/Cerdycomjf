import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

export default function NavBarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 991;
      if (isMobile) {
        setScrolled(true); 
      } else {
        setScrolled(window.scrollY > 50); 
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        {/* 🔹 Logo eliminado */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto d-flex align-items-lg-center animate__animated animate__fadeInDown">
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

            {/* 🔹 Nuevo botón Pagos */}
            <Nav.Link
              href="/pagos"
              className={`nav-custom ${isActive("/pagos") ? "active-link" : ""}`}
            >
              Pagos
            </Nav.Link>
          </Nav>

          {/* 🔹 Botón y redes centrados */}
          <div className="extras-wrapper d-flex flex-wrap justify-content-center align-items-center gap-3 mt-3 mt-lg-0">
            <Button
              href="https://plataformagps.cerdycomjf.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="vehicle-btn pulse"
            >
              Dónde está mi vehículo
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

              <a
                href="https://www.linkedin.com/company/cerdycomjf-s-a-s/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ color: scrolled ? "#1B5E20" : "#ffffff" }}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
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
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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
          70% { transform: scale(1.03); box-shadow: 0 0 8px 4px rgba(27, 94, 32, 0.5); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(27, 94, 32, 0.7); }
        }
        .pulse { animation: pulse 3s infinite; }

        .vehicle-btn {
          background: linear-gradient(45deg, #1B5E20, #1B5E20);
          border: none;
          font-weight: bold;
          padding: 8px 18px;
          border-radius: 30px;
          color: #fff !important;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .vehicle-btn:hover {
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

        @media (max-width: 991px) {
          .custom-navbar {
            background: #ffffff !important;
          }
          .vehicle-btn {
            background: linear-gradient(45deg, #1B5E20, #1B5E20) !important;
            color: #fff !important;
            width: 100%;
            text-align: center;
          }
          .extras-wrapper {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
          .social-icon {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </Navbar>
  );
}
