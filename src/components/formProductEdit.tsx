import Image from "next/image"
import { ChangeEvent } from "react"

interface propsFrom{
    image: string | null,
    handleInput: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
    handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handlerClickSend: () => void,
    handlerClick: () => void
}

export const FormProductEdit = ({
    image,
    handleInput,
    handleImageChange,
    handlerClickSend,
    handlerClick
}:propsFrom) => {
    return(
        <div className='edit_container'>
        <div className='edit_content'>
            <div className='body_edit_product'>
                <div className="form-container">
                    <div>
                        <div className="form-group--name--price">
                            <div>
                                <label>Nombre:</label>
                                <input type="text" id="name" name="name" required onChange={handleInput}/>
                            </div>
                            <div>
                                <label>Precio:</label>
                                <input type="number" id="price" name="price" required onChange={handleInput}/>
                            </div>
                        </div>
                        <div className="form-group--image">
                            {image && <Image src={image} alt="Vista previa" width={180} height={170}  style={{ display: "block", width: "100%" }} />}
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                id="image"
                            />
                            <br />
                        </div>
                        <div className="form-group">
                            <label>Tamaño:</label>
                            <input type="text" id="size" name="size" onChange={handleInput}/>
                        </div>
                        <div className="form-group">
                            <label>Categoría:</label>
                            <select id="category" name="category" onChange={handleInput}>
                                <option value="">select</option>
                                <option value="comedor">Comedores</option>
                                <option value="dormitorio">Dormitorios</option>
                                <option value="multimueble">Multimuebles</option>
                                <option value="sofa">Sofas</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Descripción:</label>
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
    </div>
    )
}

