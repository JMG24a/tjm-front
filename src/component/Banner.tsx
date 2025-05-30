'use client';
import "./banner.css";
import { useEffect, useState, useRef } from "react";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, offsetWidth } = trackRef.current;
    const index = Math.round(scrollLeft / offsetWidth);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (track) {
        track.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="container_carrusel">
        {/* Carrusel Manual */}
        <div className="carousel-manual" ref={trackRef}>
          <div className="carousel-item"><img src="/zultan_1.PNG" alt="1" /></div>
          <div className="carousel-item"><img src="/zultan_3.PNG" alt="2" /></div>
        </div>

        {/* Puntos indicadores */}
        <div className="dots">
          {[0, 1].map((i) => (
            <span key={i} className={`dot ${currentIndex === i ? "active" : ""}`} />
          ))}
        </div>
      </div>
    </>
  );
}
