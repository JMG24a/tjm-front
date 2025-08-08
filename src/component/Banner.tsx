'use client';
import Image from "next/image";
import "./banner.css";
import { useEffect, useState, useRef } from "react";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
export default function Banner({images}:any) {
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
          {images.map((item: string, key:number)=>(
            <div key={key} className="carousel-item"><Image src={`/${item}`} alt="1" width={100} height={80}/></div>
          ))}
        </div>

        {/* Puntos indicadores */}
        <div className="dots">
          {images.map((i:string, key:number) => (
            <span key={key} className={`dot ${currentIndex === key ? "active" : ""}`} />
          ))}
        </div>
      </div>
    </>
  );
}
