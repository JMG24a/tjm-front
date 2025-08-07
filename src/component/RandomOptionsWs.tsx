'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
//styles
import "./randomOptionsWs.css";

export function RandomOptionsWs() {
  const [status, setStatus] = useState({
    state: false,
    randomOption: ""
  });

  const options = [
    "https://wa.me/584245289999",
    "https://wa.me/584121506497",
    "https://wa.me/584129108584"
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * options.length);
    setStatus({...status, randomOption: options[randomIndex]});
  }, [status.state]);


  if(status.state){
    return (
      <div className="modalRandomOptionsWs">
        <div className="optionsRandomWs">
          <div className="optionRandomWs">
            <a href={status.randomOption} target="_blank" rel="noopener noreferrer">
              <Image src={"/WhatsApp.svg.webp"} height={30} width={30} alt='redirect' />
            </a>
            <p>WhatsApp Barquisimeto</p>
          </div>

          <div className="optionRandomWs">
            <a href={"https://wa.me/584120213946"} target="_blank" rel="noopener noreferrer">
              <Image src={"/WhatsApp.svg.webp"} height={30} width={30} alt='redirect' />
            </a>
            <p>WhatsApp San Felipe</p>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div onClick={() => setStatus({...status, state: !status.state})}>
        <Image src={"/WhatsApp.svg.webp"} height={30} width={30} alt='redirect' />
      </div>
    );
  }
}
