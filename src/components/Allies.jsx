import { Container } from "react-bootstrap";

export default function Allies() {
  const logos = [
    "honey.png",
    "alhua.png",
    "han.png",
    "hik.png",
    "ez.png",
    "tp.png",
    "samsung.png",
    "pana.png",
    "sony.png",
  ];

  return (
    <section className="allies py-5">
      <Container>
        <h3 className="text-center text-white h4 fw-bold mb-4">
          Nuestros Principales Aliados
        </h3>

        <div className="slider">
          <div className="slide-track">
            {logos.concat(logos).map((logo, idx) => (
              <div className="slide" key={idx}>
                <img src={logo} alt={`Aliado ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        .allies {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(5px);
          border-top: 2px solid rgba(255,255,255,0.1);
          border-bottom: 2px solid rgba(255,255,255,0.1);
        }
        .slider {
          overflow: hidden;
          position: relative;
        }
        .slide-track {
          display: flex;
          width: calc(200px * ${logos.length * 2});
          animation: scroll 25s linear infinite;
        }
        .slide {
          height: 100px;
          width: 200px; 
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }
        .slide img {
          max-height: 80px;  
          max-width: 160px;  
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .slide img:hover {
          transform: scale(1.05);
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
