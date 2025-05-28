"use client";

import Image from 'next/image';
import { useState, ChangeEvent, useEffect } from "react";
import { FormPriceGlobal } from './FormPriceGlobal';

interface FormState {
  [key: string]: string | File;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PriceGlobal = ({info}:any) => {
    const [formState, setFormState] = useState<FormState>({
        name: "none",
        size: "none",
        category: "global",
        description: "none"
    });
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

            const response = await fetch(`${backApi}/api/v1/products/34`, {
                method: 'PATCH',
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

    const handlerClick = () => {
        setFlat(!flat);
        console.log("HELLO")
    };

    if (token && !flat) {
        return (
            <div className='global--button' onClick={handlerClick}>
                <Image src="/global.png" alt="" width={30} height={30} />
            </div>
        );
    } else if (flat) {
        return (
            <FormPriceGlobal
                handleInput={handleInput}
                handlerClick={handlerClick}
                handlerClickSend={handlerClickSend}
                info={info}
            />
        );
    }
};

export default PriceGlobal;