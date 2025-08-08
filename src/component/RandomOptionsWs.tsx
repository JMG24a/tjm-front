'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
//styles
import "./randomOptionsWs.css";

// ✅ Mover options fuera del componente
const options = [
  "https://wa.me/584245289999",
  "https://wa.me/584121506497",
  "https://wa.me/584129108584"
];

export function RandomOptionsWs() {
  const [status, setStatus] = useState({
    state: false,
    randomOption: ""
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * options.length);
    // ✅ Usar actualización funcional para evitar dependencia de `status`
    setStatus(prev => ({
      ...prev,
      randomOption: options[randomIndex]
    }));
  }, []); // ✅ Ahora el warning desaparecerá

  if (status.state) {
    return (
      <div className="modalRandomOptionsWs">
        <div className="optionsRandomWs">
          <div>
            <button
              className="closeButtonRandomWs"
              onClick={() => setStatus({ ...status, state: !status.state })}
            >
              X
            </button>
          </div>

          <div className="optionRandomWs">
            <a className="anchorRandomWs" href={"https://wa.me/584120213946"} target="_blank" rel="noopener noreferrer">
              <Image src={"/WhatsApp.svg.webp"} height={30} width={30} alt='redirect' />
              <p>WhatsApp Barquisimeto</p>
            </a>
          </div>

          <div className="optionRandomWs">
            <a className="anchorRandomWs" href={status.randomOption} target="_blank" rel="noopener noreferrer">
              <Image src={"/WhatsApp.svg.webp"} height={30} width={30} alt='redirect' />
              <p>WhatsApp San Felipe</p>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div onClick={() => setStatus({ ...status, state: !status.state })}>
        <Image src={"/WhatsApp.svg.webp"} height={30} width={30} alt='redirect' />
      </div>
    );
  }
}
