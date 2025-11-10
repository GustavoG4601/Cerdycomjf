import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [openChat, setOpenChat] = useState(false);
  const [step, setStep] = useState("inicio"); // 👈 controla la conversación
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productos = {
    camaras: [
      { nombre: "Cámara Domo", descripcion: "Ideal para interiores, visión nocturna HD." },
      { nombre: "Cámara Bala", descripcion: "Perfecta para exteriores, resistente al clima." },
      { nombre: "Kit DVR + Cámaras", descripcion: "Solución completa con grabación 24/7." },
    ],
    rastreo: [
      { nombre: "GPS Vehicular", descripcion: "Rastreo en tiempo real con app móvil." },
      { nombre: "GPS Motocicletas", descripcion: "Seguro y confiable para motos." },
    ],
    energia: [
      { nombre: "Panel Solar Residencial", descripcion: "Reduce tu factura de luz hasta 70%." },
      { nombre: "Kit Solar Portátil", descripcion: "Energía limpia en cualquier lugar." },
    ],
  };

  const enviarWhatsApp = (texto) => {
    const numero = "573016465632";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="whatsapp-container">
        {openChat && (
          <div className="chat-box">
            <div className="chat-header">
              <img src="/logo.png" alt="Soporte" />
              <div>
                <strong>CerdycomJF</strong>
                <p>Soporte en línea</p>
              </div>
            </div>
            <div className="chat-body">
              {step === "inicio" && (
                <>
                  <p>👋 Hola, ¿sobre qué servicio quieres información?</p>
                  <div className="quick-questions">
                    <button onClick={() => setStep("camaras")}>📹 Cámaras de seguridad</button>
                    <button onClick={() => setStep("rastreo")}>📡 Rastreo satelital</button>
                    <button onClick={() => setStep("energia")}>☀️ Energía solar</button>
                  </div>
                </>
              )}

              {["camaras", "rastreo", "energia"].includes(step) && !selectedProduct && (
                <>
                  <p>Selecciona un producto:</p>
                  <div className="quick-questions">
                    {productos[step].map((prod, i) => (
                      <button key={i} onClick={() => setSelectedProduct(prod)}>
                        {prod.nombre}
                      </button>
                    ))}
                  </div>
                  <button className="back-btn" onClick={() => setStep("inicio")}>⬅ Volver</button>
                </>
              )}

              {selectedProduct && (
                <>
                  <p><strong>{selectedProduct.nombre}</strong></p>
                  <p>{selectedProduct.descripcion}</p>
                  <button
                    onClick={() =>
                      enviarWhatsApp(`Hola! Estoy interesado en ${selectedProduct.nombre}`)
                    }
                  >
                    💬 Preguntar por WhatsApp
                  </button>
                  <button className="back-btn" onClick={() => setSelectedProduct(null)}>
                    ⬅ Volver
                  </button>
                </>
              )}
            </div>
            <div className="chat-footer">
              <button onClick={() => setOpenChat(false)}>✖ Cerrar</button>
            </div>
          </div>
        )}

        <button
          className="whatsapp-btn"
          onClick={() => {
            setOpenChat(!openChat);
            setStep("inicio");
            setSelectedProduct(null);
          }}
        >
          <FaWhatsapp />
        </button>
      </div>

      <style>{`
        .whatsapp-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1100;
        }
        .whatsapp-btn {
          background: #078836ff;
          border: none;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          font-size: 2rem;
          color: #fff;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1);
        }
        .chat-box {
          width: 280px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          margin-bottom: 10px;
          overflow: hidden;
          animation: fadeIn 0.3s ease-in-out;
        }
        .chat-header {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #06762fff;
          color: #fff;
          padding: 10px;
        }
        .chat-header img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
        }
        .chat-body {
          padding: 15px;
          font-size: 0.9rem;
          color: #333;
        }
        .quick-questions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 10px;
        }
        .quick-questions button, .chat-body button {
          background: #f1f1f1;
          border: none;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
          text-align: left;
          font-size: 0.85rem;
          transition: background 0.2s ease;
        }
        .quick-questions button:hover, .chat-body button:hover {
          background: #d9fdd3;
        }
        .back-btn {
          margin-top: 10px;
          background: #ccc !important;
          color: black;
        }
        .chat-footer {
          display: flex;
          justify-content: flex-end;
          padding: 10px;
          border-top: 1px solid #eee;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

