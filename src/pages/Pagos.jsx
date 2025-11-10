// src/pages/Pagos.jsx
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

export default function Pagos() {


  return (
    <div className="pagos-page">
      <NavbarComponent />

      {/* HERO */}
      <section
        className="hero-pagos"
        style={{
          backgroundImage: "url('/Fondo.png')",
        }}
      >
        <div className="overlay">
          <div
            className="hero-content text-center text-white px-3"
            style={{ maxWidth: "700px" }}
          >
            <h1
              className="fw-bold mb-4 display-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <span className="highlight">Medios de Pago</span>
            </h1>
            <p className="lead" data-aos="fade-up" data-aos-delay="300">
              En <strong>CERDYCOM JF</strong> te ofrecemos diferentes opciones
              para que realices tus pagos de manera fácil, rápida y segura.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            Pago en Línea
          </h2>
          <p data-aos="fade-up">
            Realiza tu pago en línea de forma segura a través de nuestra
            plataforma habilitada:
          </p>
          <div className="text-center my-4" data-aos="zoom-in">
            {/* 🔗 AQUI VA TU LINK DE PAGO */}
            <a
              href="https://checkout.bold.co/payment/LNK_TFIM6OAGN8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg px-5"
            >
              Pagar Aquí
            </a>
          </div>

          <h2 className="fw-bold text-success mb-4" data-aos="fade-up">
            Soporte
          </h2>
          <p data-aos="fade-up">
            Enviar soporte vía Whatsapp:
          </p>
          <div className="text-center my-4 d-flex gap-3 justify-content-center" data-aos="zoom-in">
            <a
              href="https://wa.me/573016465632?text=Hola!%20Necesito%20ayuda%20con%20mi%20pago."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg px-4"
            >
              Enviar Soporte
            </a>
            <a
              href="https://wa.me/573016465632?text=Hola!%20Quiero%20hablar%20con%20un%20asesor."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success btn-lg px-4"
            >
              Asesor en línea
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .hero-pagos {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-pagos .overlay {
          background: rgba(0,0,0,0.55);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
        }

        /* Título principal */
        .hero-content h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          text-shadow: 0 4px 16px rgba(0,0,0,0.6);
        }
        .hero-content .highlight {
          color: #28a745; /* Verde */
          text-shadow: 0 0 12px rgba(40,167,69,0.7);
        }

        h2 {
          border-left: 5px solid #28a745;
          padding-left: 15px;
        }
        .custom-list {
          list-style: none;
          padding-left: 0;
        }
        .custom-list li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 12px;
          font-size: 1rem;
        }
        .custom-list li::before {
          content: "◈";
          position: absolute;
          left: 0;
          color: #28a745;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
