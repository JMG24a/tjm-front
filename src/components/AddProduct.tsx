"use client"
import Image from 'next/image';
import { useState } from "react";


const AddProduct = () => {

    // const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    const [image, setImage] = useState(null);
    const [formState, setFormState] = useState({});
    const [flat, setFlat] = useState<boolean>(false);
    const [login, setLogin] = useState<string|any>(()=>{
        const login = localStorage.getItem("token");
        return login;
    });
    const [token, setToken] = useState<string | null>(()=>{
        const login = localStorage.getItem("token");
        return login;
    });
    const [error, setError] = useState<string | null>(null);

    const handlerClickSend = async (e: Event) => {
        e.preventDefault();
        const secretKey = process.env.API_SECRET_KEY;
        const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
        try{
            const formData = new FormData();

            Object.keys(formState).forEach(key => {
                formData.append(key, formState[key]);
            });

            const response = await fetch(`${backApi}/api/v1/products`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    body: formData,
                    credentials: 'include' // Permite enviar cookies si las hubiera
                }
            );
            
            setFlat(!flat);
        }catch(error){
            console.log("error", error)
        }
    }

    const handleInput = (e: any) => {
      let { name, value } = e.target;
      if(e.target.name == "image"){
        value = e.target.files[0]
      }
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
            setImage(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      };

    const handlerClick = () => {
        setFlat(!flat);
    }
    
    if(login && !flat){
        return (
          <div className='login--button' onClick={handlerClick}>
              <Image src="/plus.png" alt="" width={30} height={30}/>
          </div>
        );
    }else if(flat){
        return(
            <div className='login_container'>
                <div className='login_content'>
                <div className='body_add_product'>
                    <div className="form-container">
                        <form onChange={handleInput}>
                            <div className="form-group">
                                <label>Nombre:</label>
                                <input type="text" id="name" name="name" required/>
                            </div>
                            <div className="form-group">
                                <label>Precio:</label>
                                <input type="number" id="price" name="price" required/>
                            </div>
                            <div className="form-group">
                                <label>Imagen:</label>
                                <input 
                                    type="file" 
                                    name="image" 
                                    accept="image/*" 
                                    onChange={handleImageChange}
                                    id="image"
                                />
                                <br />
                                {image && <img src={image} alt="Vista previa" style={{ maxWidth: "250px", maxHeight: "250px", display: "block" }} />}
                            </div>
                            <div className="form-group">
                                <label>Tamaño:</label>
                                <input type="text" id="size" name="size"/>
                            </div>
                            <div className="form-group">
                                <label>Categoría:</label>
                                <select id="category" name="category">
                                    <option value="">select</option>
                                    <option value="comedor">Comedores</option>
                                    <option value="dormitorio">Dormitorios</option>
                                    <option value="multimueble">Multimuebles</option>
                                    <option value="sofa">Sofas</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Descripción:</label>
                                <textarea id="description" name="description"></textarea>
                            </div>
                            <div className="form-group--env">
                                <button onClick={handlerClickSend}>Enviar</button>
                                <button onClick={handlerClick}>cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>    
            </div>
        )
    }
};

export default AddProduct;