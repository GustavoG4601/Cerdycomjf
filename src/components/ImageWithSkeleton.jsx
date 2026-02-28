import { useState, useRef, useEffect } from "react";
import { Card } from "react-bootstrap";

export default function ImageWithSkeleton({ src, alt, className, style, loading, variant }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);

    // Verificamos si la imagen ya fue cargada desde caché
    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setIsLoaded(true);
        }
    }, []);

    return (
        <div style={{ position: "relative", width: "100%", height: style?.height || "100%", overflow: "hidden", ...style }}>
            {/* SKELETON (Se oculta al cargar) */}
            {!isLoaded && (
                <div
                    className="skeleton-overlay"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, borderRadius: "inherit" }}
                />
            )}

            {/* IMAGEN REAL */}
            <Card.Img
                ref={imgRef}
                variant={variant}
                src={src}
                alt={alt}
                className={className}
                loading={loading}
                onLoad={() => setIsLoaded(true)}
                style={{
                    ...style,
                    opacity: isLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out",
                    width: "100%",
                    height: "100%",
                    display: "block"
                }}
            />

            <style>{`
        .skeleton-overlay {
          background: #e0e0e0;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s infinite linear;
        }
        @keyframes skeleton-loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
        </div>
    );
}
