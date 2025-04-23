import Image from "next/image"
import { ChangeEvent } from "react"

interface propsFrom{
    handleInput: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
    handlerClickSend: () => void,
    handlerClick: () => void,
    info: [{
        name: string,
        price: string,
        description: string,
        size: string
        category: string,
        image: string | File
      }]
}

export const FormPriceGlobal = ({
    handleInput,
    handlerClickSend,
    handlerClick,
    info
}:propsFrom) => {

    return(
        <div className='add_container'>
        <div className='add_price_content'>
            <div className='body_edit_product'>
                <div className="form-container">
                    <div>
                        <div>
                            <label>Precio Global Agregado:</label>
                            <input type="number" id="price" name="price" required onChange={handleInput} placeholder={info[0].price}/>
                        </div>

                        <div className="form-group_global--env">
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

