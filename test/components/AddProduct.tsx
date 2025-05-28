// app/components/AddProduct.tsx
'use client';

import Image from 'next/image';
import { useState, useEffect, ChangeEvent } from 'react';
import dynamic from 'next/dynamic';

// Lazy-load del Formulario
const FormProduct = dynamic(() => import('./formProduct'), { ssr: false });

interface FormState {
  [key: string]: string | File;
}

const AddProduct = () => {
  const [flat, setFlat] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>({});
  const [mounted, setMounted] = useState(false);

  // ⚠️ Leer token solo en el cliente
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    setMounted(true);
    setToken(localStorage.getItem('token'));
  }, []);

  // 👇 Eventos
  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const fileInput = e.target;
      if (fileInput.files?.length) {
        const file = fileInput.files[0];
        setFormState(prev => ({ ...prev, [name]: file }));
      }
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
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
    handleInput(e);
  };

  const handlerClickSend = async () => {
    const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
    const token = localStorage.getItem('token');
    try {
      const formData = new FormData();
      Object.entries(formState).forEach(([key, value]) => {
        if (value !== undefined) {
          formData.append(key, value);
        }
      });

      const response = await fetch(`${backApi}/api/v1/products`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData,
        credentials: 'include',
      });

      const data = await response.json();
      console.log(data);
      setFlat(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlerClick = () => setFlat(prev => !prev);

  // ✅ Seguridad: no renderizar hasta que haya montado y tenga token
  if (!mounted || !token) return null;

  return flat ? (
    <FormProduct
      image={image}
      handleInput={handleInput}
      handleImageChange={handleImageChange}
      handlerClickSend={handlerClickSend}
      handlerClick={handlerClick}
    />
  ) : (
    <div className='add--button' onClick={handlerClick}>
      <Image src="/plus.png" alt="Agregar producto" width={30} height={30} />
    </div>
  );
};

export default AddProduct;
