import Image from "next/image"
import { ChangeEvent, useEffect, useState } from "react"

interface propsFrom{
    image: string | null,
    handleInput: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
    handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handlerClickSend: () => void,
    handlerClick: () => void,
    info: {
        name: string,
        price: string,
        description: string,
        size: string
        category: string,
        image: string | File
      }
}

export const FormProductEdit = ({
    image,
    handleInput,
    handleImageChange,
    handlerClickSend,
    handlerClick,
    info
}:propsFrom) => {

    const [imageState, setImageState] = useState<string | null>(null);

    useEffect(() => {
        if(image){
            setImageState(image)
        }
    },[image])

    return(
        <div className='edit_container'>
        <div className='edit_content'>
            <div className='body_edit_product'>
                <div className="form-container">
                    <div>
                        <div className="form-group--name--price">
                            <div>
                                <label>Nombre:</label>
                                <input type="text" id="name" name="name" required onChange={handleInput} placeholder={info.name}/>
                            </div>
                            <div>
                                <label>Precio:</label>
                                <input type="number" id="price" name="price" required onChange={handleInput} placeholder={info.price}/>
                            </div>
                        </div>
                        <div className="form-group--image">
                            {imageState && <Image src={imageState} alt="Vista previa" width={180} height={170}  style={{ display: "block", width: "100%" }} />}
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
                            <input type="text" id="size" name="size" onChange={handleInput} placeholder={info.size}/>
                        </div>
                        <div className="form-group">
                            <label>Categoría:</label>
                            <select id="category" name="category" onChange={handleInput}>
                                <option value={info.category}>{info.category}</option>
                                <option value="comedor">Comedores</option>
                                <option value="dormitorio">Dormitorios</option>
                                <option value="multimueble">Multimuebles</option>
                                <option value="sofa">Sofas</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Descripción:</label>
                            <textarea id="description" name="description" onChange={handleInput} placeholder={info.description}></textarea>
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

