import NavbarComponent from "../components/Navbar";
import { Card, Container } from "react-bootstrap";
import Footer from "../components/Footer";

export default function Pagos() {


  return (
    <div className="pagos-page">
      <NavbarComponent />

      {/* Hero Section */}
      <section className="hero-product-detail">
        <div className="hero-overlay-glass">
          <Container>
            <div className="text-center" data-aos="fade-up">
              <h1 className="display-3 fw-extrabold text-white mb-3">
                Gestión de <span>Pagos</span>
              </h1>
              <p className="lead text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
                Realice sus transacciones de forma segura y sencilla a través de nuestras plataformas integradas.
                Soporte inmediato y total transparencia en cada proceso.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Contenido con Glassmorphism */}
      <Container className="py-5 product-container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Card className="glass-card-info mb-5" data-aos="fade-up">
              <Card.Body className="p-4 p-md-5">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <h2 className="section-title-premium mb-4">
                      Pago en <span>Línea</span>
                    </h2>
                    <p className="text-white-50 mb-4 fs-5">
                      Utilizamos tecnología de cifrado avanzada para garantizar la seguridad de su información.
                      Haga clic en el botón para ser redirigido a nuestra pasarela de pagos oficial habilitada por <strong>Bold</strong>.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                      <a
                        href="https://checkout.bold.co/payment/LNK_TFIM6OAGN8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium-action btn-pay"
                      >
                        <span className="btn-icon">💳</span>
                        Pagar Ahora con Bold
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 d-none d-md-block text-center">
                    <div className="payment-visual-wrap">
                      <div className="payment-card-visual"></div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="glass-card-info" data-aos="fade-up" data-aos-delay="100">
              <Card.Body className="p-4 p-md-5">
                <h2 className="section-title-premium mb-4">
                  Centro de <span>Soporte</span>
                </h2>
                <p className="text-white-50 mb-4">
                  ¿Tiene alguna duda sobre su factura o necesita asistencia técnica con el pago?
                  Nuestros asesores están disponibles para ayudarle en tiempo real.
                </p>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <a
                      href="https://wa.me/573016465632?text=Hola!%20Necesito%20ayuda%20con%20mi%20pago."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="support-card-btn"
                    >
                      <div className="s-icon">💬</div>
                      <div>
                        <h5 className="mb-1">Enviar Soporte</h5>
                        <small className="text-white-50">Reportar pago realizado</small>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="https://wa.me/573016465632?text=Hola!%20Quiero%20hablar%20con%20un%20asesor."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="support-card-btn outline"
                    >
                      <div className="s-icon">👨‍💻</div>
                      <div>
                        <h5 className="mb-1">Asesor en Línea</h5>
                        <small className="text-white-50">Dudas y consultas generales</small>
                      </div>
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      <Footer />

      <style>{`
        .pagos-page {
          background: url('/media/ui/Fondo.webp') center/cover no-repeat fixed;
          min-height: 100vh;
          color: #fff;
        }

        .hero-product-detail {
          min-height: 50vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-overlay-glass {
          width: 100%;
          min-height: 50vh;
          display: flex;
          align-items: center;
          background: linear-gradient(0deg, rgba(5, 5, 5, 0.9) 0%, rgba(5, 5, 5, 0.4) 100%);
        }

        .fw-extrabold { font-weight: 800; }

        .display-3 span {
          color: #4CAF50;
          text-shadow: 0 0 20px rgba(76, 175, 80, 0.3);
        }

        .section-title-premium {
          color: #fff;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .section-title-premium span {
          color: #4CAF50;
        }

        .glass-card-info {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 40px !important;
          backdrop-filter: blur(25px);
          overflow: hidden;
        }

        /* 🔹 Botón Premium de Pago */
        .btn-premium-action {
          display: flex;
          align-items: center;
          gap: 15px;
          background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
          color: white;
          padding: 18px 35px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(76, 175, 80, 0.3);
          border: none;
        }

        .btn-premium-action:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(76, 175, 80, 0.5);
          color: white;
          filter: brightness(1.1);
        }

        .btn-icon { font-size: 1.5rem; }

        /* 🔹 Tarjetas de Soporte */
        .support-card-btn {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.05);
          padding: 25px;
          border-radius: 25px;
          text-decoration: none;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .support-card-btn:hover {
          background: rgba(76, 175, 80, 0.1);
          border-color: rgba(76, 175, 80, 0.4);
          transform: scale(1.02);
          color: white;
        }

        .support-card-btn.outline {
          background: transparent;
          border-color: rgba(76, 175, 80, 0.5);
        }

        .s-icon {
          width: 50px;
          height: 50px;
          background: rgba(76, 175, 80, 0.2);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        /* 🔹 Visual decorativo */
        .payment-visual-wrap {
          padding: 20px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 30px;
          display: inline-block;
        }

        .payment-card-visual {
          width: 250px;
          height: 150px;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          border-radius: 20px;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .payment-card-visual::after {
          content: '';
          position: absolute;
          top: 30px;
          left: 20px;
          width: 45px;
          height: 35px;
          background: #d4af37;
          border-radius: 5px;
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .display-3 { font-size: 2.5rem; }
          .btn-premium-action { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
}
