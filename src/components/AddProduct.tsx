"use client";

import Image from 'next/image';
import { useState, ChangeEvent, useEffect } from "react";
import { FormProduct } from './formProduct';

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
            <FormProduct
                image={image}
                handleInput={handleInput}
                handleImageChange={handleImageChange}
                handlerClick={handlerClick}
                handlerClickSend={handlerClickSend}
            />
        );
    }
};

export default AddProduct;