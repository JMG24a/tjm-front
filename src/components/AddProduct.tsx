"use client";

import Image from 'next/image';
import { useState, ChangeEvent, useEffect } from "react";

interface FormState {
  [key: string]: string | File;
}

const AddProduct = () => {
    const [image, setImage] = useState<string | null>(null);
    const [formState, setFormState] = useState<FormState>({});
    const [flat, setFlat] = useState<boolean>(false);
    
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const savedToken = localStorage.getItem('token');
        setToken(savedToken);
      }
    }, []);

    // const [error, setError] = useState<string | null>(null);

    const handlerClickSend = async () => {
        const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
        try {
            const formData = new FormData();
            Object.keys(formState).forEach(key => {
                const value = formState[key];
                if (value !== undefined) {
                    formData.append(key, value);
                }
            });

            const response = await fetch(`${backApi}/api/v1/products`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
                credentials: 'include'
            });

            const data = await response.json();
            console.log(data)

            setFlat(!flat);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (e.target instanceof HTMLInputElement && e.target.type === "file") {
            const fileInput = e.target as HTMLInputElement;
            if (fileInput.files && fileInput.files.length > 0) {
                const file = fileInput.files[0]
                setFormState(prevState => ({
                    ...prevState,
                    [name]: file,
                }));
            }
        } else {
            setFormState(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target) {
                    setImage(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }

        handleInput(e)
    };

    const handlerClick = () => {
        setFlat(!flat);
    };

    if (token && !flat) {
        return (
            <div className='add--button' onClick={handlerClick}>
                <Image src="/plus.png" alt="" width={30} height={30} />
            </div>
        );
    } else if (flat) {
        return (
            <div className='add_container'>
                <div className='add_content'>
                    <div className='body_add_product'>
                        <div className="form-container">
                            <div>
                                <div className="form-group">
                                    <label>Nombre:</label>
                                    <input type="text" id="name" name="name" required onChange={handleInput}/>
                                </div>
                                <div className="form-group">
                                    <label>Precio:</label>
                                    <input type="number" id="price" name="price" required onChange={handleInput}/>
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
        );
    }
};

export default AddProduct;