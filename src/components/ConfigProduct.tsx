"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FormProduct } from "./formProduct";


interface propsBack{
  id: string,
  type: string
} 

interface FormState {
  [key: string]: string | File;
}

const ExpandableButton = ({id, type}:propsBack) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editConfirm, setEditConfirm] = useState(false);
  const [pictureConfirm, setPictureConfirm] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>({});
  

  const router = useRouter();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('token');
      setToken(savedToken);
    }
  }, []);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  const handleEditClick = () =>{
    setEditModal(!editModal)
  }

  const handleEditConfirm = () =>{
    setEditConfirm(!editConfirm)
  }

  const addPictureConfirm = () => {
    setPictureConfirm(!pictureConfirm)
  }

  const handleDeleteClick = () => {
    setDeleteModal(!deleteModal)
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      router.push(type);
    } else {
      router.push('/'); // Redirige a la página principal si no hay historial
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log("🚀 ~ handleInput ~ name:", name)

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

  const handlerAddPictureSend = async () => {
    const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
    try {
      const formData = new FormData();
      Object.keys(formState).forEach(key => {
          const value = formState[key];
          if (value !== undefined) {
              formData.append(key, value);
          }
      });
      formData.append("idProduct", id);

      await fetch(`${backApi}/api/v1/images`, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${token}`,
          },
          body: formData,
          credentials: 'include'
      });
      handleBack()
    } catch (error) {
        console.error("Error:", error);
    }
  };

  const handleDeleteAction = async () => {
    const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
    
    try {
        await fetch(`${backApi}/api/v1/products/${id}`, {
          method: 'DELETE',
          headers: {
              'Authorization': `Bearer ${token}`,
          },
          credentials: 'include'
        });

        handleBack()
    } catch (error) {
        console.error("Error:", error);
    }
  }

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
    } catch (error) {
        console.error("Error:", error);
    }
};

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
          <button className="buttons--config" onClick={handleDeleteClick}>
            <Image src={"/dash.png"} alt="button config" width={25} height={25}/>
          </button>
        </div>
      )}

      {editModal && (
        <div className="product_menu--edit">
          <div>
            <h3>Editar Producto</h3>

              <div className="product_menu_button--option">
                <label htmlFor="">Agregar otra imagen</label>
                <button className="buttons_edit_menu--config" onClick={addPictureConfirm}>
                  <Image src={"/plus.png"} alt="button config" width={25} height={25}/>
                </button>
              </div>

              {pictureConfirm && (
                <div className="form_edit_product">
                  <div className="image_container">
                    {image && <Image src={image} alt="Vista previa" width={400} height={300}  style={{ display: "block", width: "100%" }} />}
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        id="image"
                    />
                  </div>
                  <div className="form_edit_product--actions">
                    <button onClick={handlerAddPictureSend}>Enviar</button>
                    <button onClick={addPictureConfirm}>Cancelar</button>
                  </div>
                </div>
              )}

            <div className="product_menu_button--option">
                <label htmlFor="">Editar producto</label>
                <button className="buttons_edit_menu--config" onClick={handleEditConfirm}> 
                  <Image src={"/edit.webp"} alt="button config" width={25} height={25}/>
                </button>
            </div>
            {editConfirm && (
              <div className="container_form_edit">
                <FormProduct
                    image={image}
                    handleInput={handleInput}
                    handleImageChange={handleImageChange}
                    handlerClick={handleEditConfirm}
                    handlerClickSend={handlerClickSend}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {deleteModal && (
        <div className="product_menu--edit">
          <div>
            <h3>Estas seguro que quieres eliminar el Producto?</h3>

            <div className="product_menu_button--option">
              <button className="buttons_edit_menu--config" onClick={handleDeleteAction}>
                <Image src={"/dash.png"} alt="button config" width={25} height={25}/>
              </button>
            </div>

            <div className="product_menu_button--option" onClick={handleDeleteClick}>
              <label htmlFor="">Cancelar</label>
              <button className="buttons_edit_menu--config">
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ExpandableButton;
