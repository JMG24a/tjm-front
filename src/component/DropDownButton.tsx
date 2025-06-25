'use client'
import { useState } from 'react';
import "./dropDownButton.css";
import Image from 'next/image';
import Link from 'next/link';

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className={"dropdown"}>
      <button onClick={toggleDropdown} className={"button"}>
        <Image src={"/share.png"} height={30} width={30} alt='redirect'/>
      </button>

      {isOpen && (
        <div className={"menu"}>
          <div>
            <Link href={"https://www.instagram.com/tiojaimemuebleria/"} target='_blank'>
              <Image src={"/Instagram_logo_2022.svg.webp"} height={25} width={25} alt='redirect'/>
            </Link>
          </div>
          <div>
            <Link href={"https://wa.me/584120213946"} target='_blank'>
              <Image src={"/WhatsApp.svg.webp"} height={30} width={30} alt='redirect'/>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
