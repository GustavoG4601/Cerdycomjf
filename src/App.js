// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // 👈 importar

import Home from "./pages/Home";
import Services1 from "./pages/Services1";
import Seguridad from "./pages/Seguridad";
import Rastreo from "./pages/Rastreo";
import Solar from "./pages/Solar";
import Antenas from "./pages/Antenas";
import Capacitacion from "./pages/Capacitacion";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Camara from "./pages/Camara";
import Rastreo1 from "./pages/Rastreo1";
import Energia from "./pages/Energia";
import Internet from "./pages/Internet";
import Acceso from "./pages/Acceso";

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 esto asegura que siempre empiece arriba */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services1" element={<Services1 />} />
        <Route path="/services1/seguridad" element={<Seguridad />} />
        <Route path="/services1/rastreo" element={<Rastreo />} />
        <Route path="/services1/solar" element={<Solar />} />
        <Route path="/services1/antenas" element={<Antenas />} />
        <Route path="/services1/capacitacion" element={<Capacitacion />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/camara" element={<Camara />} />
        <Route path="/rastreo1" element={<Rastreo1 />} />
        <Route path="/energia" element={<Energia />} />
        <Route path="/Rastreo" element={<Rastreo1 />} />
        <Route path="/Energia" element={<Energia />} />
        <Route path="/internet" element={<Internet />} />
        <Route path="/acceso" element={<Acceso />} />
      </Routes>
    </Router>
  );
}
