import NavbarComponent from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products"; 
import About from "../components/About"; 
import Allies from "../components/Allies";
import Footer from "../components/Footer";

// 👇 Importa los efectos
import FloatingIcons from "../components/FloatingIcons";
import WhatsAppButton from "../components/WhatsAppButton"; // ✅ nuevo

export default function Home() {
  return (
    <div>
      {/* Video global */}
      <video autoPlay loop muted playsInline className="video-background">
        <source src="/verde.mp4" type="video/mp4" />
      </video>

    

      {/* Contenido */}
      <NavbarComponent />
      <Hero />
      <Services />
      <Products />  
      <About />  
      <Allies />   
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />

      {/* Estilos para el video */}
      <style>{`
        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -3; /* El video va atrás de todo */
        }
      `}</style>
    </div>
  );
}
