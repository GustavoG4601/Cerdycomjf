import { useState, useEffect } from "react";
import { FaWhatsapp, FaCamera, FaMapMarkerAlt, FaSun, FaArrowLeft, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [openChat, setOpenChat] = useState(false);
  const [step, setStep] = useState("inicio");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const productos = {
    camaras: [
      { nombre: "Cámara Domo", descripcion: "Ideal para interiores, visión nocturna HD.", icon: <FaCamera /> },
      { nombre: "Cámara Bala", descripcion: "Perfecta para exteriores, resistente al clima.", icon: <FaCamera /> },
      { nombre: "Kit DVR + Cámaras", descripcion: "Solución completa con grabación 24/7.", icon: <FaCamera /> },
    ],
    rastreo: [
      { nombre: "GPS Vehicular", descripcion: "Rastreo en tiempo real con app móvil.", icon: <FaMapMarkerAlt /> },
      { nombre: "GPS Motocicletas", descripcion: "Control total desde tu celular.", icon: <FaMapMarkerAlt /> },
      { nombre: "Ecosistema Flotas", descripcion: "Gestión avanzada para empresas.", icon: <FaMapMarkerAlt /> },
    ],
    energia: [
      { nombre: "Panel Residencial", descripcion: "Energía solar para tu hogar.", icon: <FaSun /> },
      { nombre: "Luminarias Solares", descripcion: "Iluminación sin cables ni facturas.", icon: <FaSun /> },
    ],
  };

  useEffect(() => {
    if (openChat) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 800);
      return () => clearTimeout(timer);
    }
  }, [step, openChat]);

  const enviarWhatsApp = (producto) => {
    const numero = "573016465632";
    const texto = `¡Hola CerdycomJF! 👋 Estoy interesado en recibir información sobre: ${producto.nombre}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  const handleStepChange = (newStep) => {
    setIsTyping(true);
    setTimeout(() => {
      setStep(newStep);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="wa-fixed-container">
      <AnimatePresence>
        {openChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="wa-chat-window shadow-lg"
          >
            <div className="wa-header">
              <div className="wa-header-info">
                <div className="wa-avatar-container">
                  <img src="/media/ui/logo.webp" alt="Cerdycom" />
                  <span className="wa-online-status"></span>
                </div>
                <div>
                  <h6 className="m-0 fw-bold">CerdycomJF</h6>
                  <small className="wa-status-text">En línea ahora</small>
                </div>
              </div>
              <button className="wa-close-btn" onClick={() => setOpenChat(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="wa-body">
              <div className="wa-bubble-container">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="wa-bubble bot"
                >
                  {isTyping ? (
                    <div className="wa-typing">
                      <span></span><span></span><span></span>
                    </div>
                  ) : (
                    <>
                      {step === "inicio" && "👋 ¡Hola! Soy el asesor virtual de CerdycomJF. ¿En qué solución estás interesado hoy?"}
                      {["camaras", "rastreo", "energia"].includes(step) && !selectedProduct && "¡Excelente elección! Mira lo que tenemos para ofrecerte en esta categoría:"}
                      {selectedProduct && `Has seleccionado ${selectedProduct.nombre}. ¿Deseas hablar con un asesor especializado ahora mismo?`}
                    </>
                  )}
                </motion.div>

                {!isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="wa-options-grid mt-3"
                  >
                    {step === "inicio" && (
                      <>
                        <button onClick={() => handleStepChange("camaras")} className="wa-option-card">
                          <FaCamera className="wa-icon" /> <span>Seguridad</span>
                        </button>
                        <button onClick={() => handleStepChange("rastreo")} className="wa-option-card">
                          <FaMapMarkerAlt className="wa-icon" /> <span>Rastreo</span>
                        </button>
                        <button onClick={() => handleStepChange("energia")} className="wa-option-card">
                          <FaSun className="wa-icon" /> <span>Energía</span>
                        </button>
                      </>
                    )}

                    {["camaras", "rastreo", "energia"].includes(step) && !selectedProduct && (
                      <>
                        {productos[step].map((p, i) => (
                          <button key={i} onClick={() => setSelectedProduct(p)} className="wa-option-pill">
                            {p.nombre}
                          </button>
                        ))}
                        <button onClick={() => setStep("inicio")} className="wa-back-pill">
                          <FaArrowLeft /> Volver al Inicio
                        </button>
                      </>
                    )}

                    {selectedProduct && (
                      <div className="wa-product-detail">
                        <p className="small text-muted mb-2">{selectedProduct.descripcion}</p>
                        <button onClick={() => enviarWhatsApp(selectedProduct)} className="wa-confirm-btn">
                          <FaWhatsapp /> Hablar con Asesor
                        </button>
                        <button onClick={() => setSelectedProduct(null)} className="wa-back-link">
                          Elegir otro producto
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="wa-main-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setOpenChat(!openChat);
          if (!openChat) {
            setStep("inicio");
            setSelectedProduct(null);
          }
        }}
      >
        <div className="wa-pulse"></div>
        <FaWhatsapp />
      </motion.button>

      <style>{`
        .wa-fixed-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 2000;
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }
        .wa-chat-window {
          width: 320px;
          background: #e5ddd5;
          background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
          background-repeat: repeat;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0,0,0,0.1);
        }
        .wa-header {
          background: #075e54;
          padding: 12px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .wa-header-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .wa-avatar-container {
          position: relative;
        }
        .wa-avatar-container img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          object-fit: contain;
          padding: 2px;
        }
        .wa-online-status {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 8px;
          height: 8px;
          background: #43d854;
          border: 2px solid #075e54;
          border-radius: 50%;
        }
        .wa-status-text {
          opacity: 0.9;
          font-size: 0.7rem;
        }
        .wa-close-btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 1rem;
          cursor: pointer;
        }
        .wa-body {
          padding: 15px;
          max-height: 380px;
          overflow-y: auto;
        }
        .wa-bubble {
          background: white;
          padding: 10px 12px;
          border-radius: 0 12px 12px 12px;
          max-width: 90%;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          font-size: 0.85rem;
          line-height: 1.4;
          color: #303030;
          position: relative;
        }
        .wa-bubble::before {
          content: "";
          position: absolute;
          left: -8px;
          top: 0;
          width: 12px;
          height: 12px;
          background: white;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
        .wa-typing {
          display: flex;
          gap: 3px;
          padding: 3px 0;
        }
        .wa-typing span {
          width: 5px;
          height: 5px;
          background: #90a4ae;
          border-radius: 50%;
          animation: wa-bounce 1.3s infinite alternate;
        }
        .wa-typing span:nth-child(2) { animation-delay: 0.2s; }
        .wa-typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes wa-bounce { to { transform: translateY(-3px); opacity: 0.3; } }
        .wa-options-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .wa-option-card {
          background: rgba(255,255,255,0.95);
          border: none;
          padding: 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: 600;
          color: #075e54;
          text-align: left;
        }
        .wa-option-pill {
          background: #dcf8c6;
          border: 1px solid #c8e6c9;
          padding: 7px 12px;
          border-radius: 18px;
          font-size: 0.8rem;
          color: #2e7d32;
          cursor: pointer;
          font-weight: 500;
        }
        .wa-back-pill {
          background: #f1f1f1;
          border: none;
          padding: 5px 10px;
          border-radius: 12px;
          font-size: 0.7rem;
          color: #666;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          width: fit-content;
        }
        .wa-product-detail {
          background: white;
          padding: 12px;
          border-radius: 12px;
        }
        .wa-confirm-btn {
          background: #25d366;
          color: white;
          border: none;
          width: 100%;
          padding: 8px;
          border-radius: 8px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 8px;
        }
        .wa-back-link {
          background: transparent;
          border: none;
          color: #0d6efd;
          font-size: 0.75rem;
          margin-top: 5px;
          cursor: pointer;
          width: 100%;
          text-decoration: underline;
        }
        .wa-main-btn {
          width: 60px;
          height: 60px;
          background: #25d366;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .wa-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid #25d366;
          animation: wa-ripple 2s infinite;
        }
        @keyframes wa-ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

