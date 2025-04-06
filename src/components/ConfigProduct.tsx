"use client";
import { useState } from "react";
import Image from "next/image";

const ExpandableButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  const handleEditClick = () =>{
    setEditModal(!editModal)
  }

  return (
    <div className="container_button--config">
      <button
        onClick={toggleButtons}
        className="config--button"
      >
        <Image src={"/config.png"} alt="button config" width={25} height={25}/>
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 flex flex-col space-y-2">
          <button className="buttons--config" onClick={handleEditClick}>
            <Image src={"/edit.webp"} alt="button config" width={25} height={25}/>
          </button>
          <button className="buttons--config">
            <Image src={"/dash.png"} alt="button config" width={25} height={25}/>
          </button>
        </div>
      )}

      {editModal && (
        <div className="product_menu--edit">
          <h3>Editar Producto</h3>

          <div className="product_menu_button--option">
            <label htmlFor="">Editar producto</label>
            <button className="buttons_edit_menu--config" onClick={handleEditClick}>
              <Image src={"/edit.webp"} alt="button config" width={25} height={25}/>
            </button>
          </div>

          <div className="product_menu_button--option">
            <label htmlFor="">Agregar otra imagen</label>
            <button className="buttons_edit_menu--config">
              <Image src={"/plus.png"} alt="button config" width={25} height={25}/>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ExpandableButton;
