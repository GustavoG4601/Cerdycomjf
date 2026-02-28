import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaBars } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

export default function NavBarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      variant="dark"
    >
      <Container>
        {/* 🔹 Logo Restaurado y Mejorado */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-premium">
          <img
            src="/media/ui/logo.webp"
            alt="CerdycomJF"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" style={{ border: 'none', color: '#ffffff', zIndex: 99999 }}>
          <FaBars size={30} style={{ color: '#ffffff' }} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link-premium ${isActive("/") ? "active" : ""}`}
            >
              Inicio
            </Nav.Link>

            <NavDropdown
              title="Servicios"
              id="services-dropdown"
              className={`nav-link-premium dropdown-premium ${location.pathname.startsWith("/services1") ? "active" : ""
                }`}
            >
              <NavDropdown.Item as={Link} to="/services1/seguridad">
                Seguridad Electrónica
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services1/rastreo">
                Rastreo Vehicular
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services1/solar">
                Energía Fotovoltaica
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services1/antenas">
                Antenas e Internet
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/services1/capacitacion">
                Consejería y Servicios
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/productos"
              className={`nav-link-premium ${isActive("/productos") ? "active" : ""}`}
            >
              Productos
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/nosotros"
              className={`nav-link-premium ${isActive("/nosotros") ? "active" : ""}`}
            >
              Nosotros
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/pagos"
              className={`nav-link-premium ${isActive("/pagos") ? "active" : ""}`}
            >
              Pagos
            </Nav.Link>

            {/* 🔹 Separador y Extras */}
            <div className="navbar-divider d-none d-lg-block"></div>

            <div className="nav-extras-group">
              <Button
                href="https://plataformagps.cerdycomjf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gps-glow"
              >
                Dónde está mi vehículo
              </Button>

              <div className="social-links-nav">
                <a href="https://www.facebook.com/share/1K4E2ZNvN2/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/cerdycom?igsh=MWpodjgwbGxpYjUy" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/cerdycomjf-s-a-s/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .custom-navbar {
          transition: 
            background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
            backdrop-filter 0.6s cubic-bezier(0.4, 0, 0.2, 1),
            padding 0.6s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1),
            border-bottom 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 22px 0;
          background-color: rgba(5, 10, 6, 0);
          backdrop-filter: blur(0px);
          z-index: 99998 !important;
          border-bottom: 1px solid rgba(76, 175, 80, 0);
        }

        .custom-navbar.scrolled {
          padding: 12px 0;
          background-color: rgba(4, 12, 6, 0.9) !important;
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(76, 175, 80, 0.25);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
        }

        .navbar-logo {
          height: 52px;
          transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: height;
        }
        .custom-navbar.scrolled .navbar-logo {
          height: 42px;
        }

        .nav-link-premium {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 10px 18px !important;
          margin: 0 5px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link-premium:hover, .nav-link-premium.active {
          color: #4CAF50 !important;
        }

        .nav-link-premium.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 18px;
          right: 18px;
          height: 2px;
          background: #4CAF50;
          border-radius: 10px;
          box-shadow: 0 0 10px #4CAF50;
        }

        /* 🔹 Dropdown Stylings */
        .dropdown-premium .dropdown-menu {
          background: rgba(8, 20, 10, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(76, 175, 80, 0.2);
          border-radius: 15px;
          padding: 10px;
          margin-top: 15px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }

        .dropdown-premium .dropdown-item {
          color: rgba(255, 255, 255, 0.8);
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .dropdown-premium .dropdown-item:hover {
          background: rgba(76, 175, 80, 0.15);
          color: #4CAF50;
          transform: translateX(5px);
        }

        /* 🔹 GPS Button Glow */
        .btn-gps-glow {
          background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%);
          border: 1px solid rgba(76, 175, 80, 0.3);
          border-radius: 50px;
          padding: 10px 25px;
          font-weight: 700;
          font-size: 0.9rem;
          color: #fff;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(27, 94, 32, 0.3);
        }

        .btn-gps-glow:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(76, 175, 80, 0.5);
          border-color: #4CAF50;
        }

        .navbar-divider {
          width: 1px;
          height: 30px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0 15px;
        }

        .nav-extras-group {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .social-links-nav {
          display: flex;
          gap: 15px;
        }

        .social-links-nav a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-links-nav a:hover {
          color: #4CAF50;
          transform: translateY(-3px);
        }

        /* 🔹 Mobile Styling Fixes */
        .custom-toggler {
          border: none !important;
          color: #ffffff !important;
          font-size: 2rem;
          padding: 8px !important;
          outline: none !important;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999 !important;
        }

        .custom-toggler:focus {
          box-shadow: none !important;
        }

        .custom-toggler:active { transform: scale(0.9); }

        @media (max-width: 991px) {
          .custom-navbar {
            background: rgba(4, 12, 6, 0.98) !important;
            backdrop-filter: blur(25px);
            padding: 12px 0;
            z-index: 9998 !important;
          }

          .navbar-collapse {
            background: transparent;
            margin-top: 15px;
            padding: 20px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
          }

          .nav-link-premium {
            margin: 5px 0;
            padding: 12px 0 !important;
            text-align: center;
          }

          .nav-link-premium.active::after {
            bottom: 5px;
            left: 40%;
            right: 40%;
          }

          .nav-extras-group {
            flex-direction: column;
            margin-top: 20px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 20px;
          }

          .btn-gps-glow {
            width: 100%;
            text-align: center;
          }

          .dropdown-premium .dropdown-menu {
            background: rgba(255, 255, 255, 0.05);
            border: none;
            text-align: center;
          }
        }
      `}</style>
    </Navbar>
  );
}
