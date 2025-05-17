'use client';
import Image from "next/image";
import { ChangeEvent, memo } from "react";

interface propsFrom {
  image: string | null;
  handleInput: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlerClickSend: () => void;
  handlerClick: () => void;
}

const FormProduct = ({
  image,
  handleInput,
  handleImageChange,
  handlerClickSend,
  handlerClick
}: propsFrom) => {
  return (
    <div className='add_container'>
      <div className='add_content'>
        <div className='body_add_product'>
          <div className="form-container">
            <h3 className="form-title">Agregar Producto</h3>

            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required onChange={handleInput} />
            </div>

            <div className="form-group">
                <label htmlFor="price">Precio:</label>
                <input type="number" id="price" name="price" required onChange={handleInput} />
            </div>

            <div className="form-group--image">
            {image?.startsWith('data:') && (
                <Image src={image} alt="Vista previa" width={180} height={170} style={{ display: "block", width: "100%" }} />
            )}
            <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
            />
            </div>

            <div className="form-group">
                <label htmlFor="size">Tamaño:</label>
                <input type="text" id="size" name="size" onChange={handleInput} />
            </div>

            <div className="form-group">
                <label htmlFor="category">Categoría:</label>
                <select id="category" name="category" onChange={handleInput}>
                    <option value="">Selecciona una</option>
                    <option value="comedor">Comedores</option>
                    <option value="dormitorio">Dormitorios</option>
                    <option value="multimueble">Multimuebles</option>
                    <option value="sofa">Sofás</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="description">Descripción:</label>
                <textarea id="description" name="description" onChange={handleInput}></textarea>
            </div>

            <div className="form-group--env">
              <button type="button" onClick={handlerClickSend}>Enviar</button>
              <button type="button" onClick={handlerClick}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FormProduct);
