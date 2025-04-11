"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FormProductEdit } from "./formProductEdit";


interface propsBack{
  id: string,
  type: string,
  info: {
    name: string,
    price: string,
    description: string,
    size: string
    category: string,
    image: string
  },
  images: []
}

interface FormState {
  [key: string]: string | File;
}

const ExpandableButton = ({id, type, info, images}:propsBack) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editConfirm, setEditConfirm] = useState(false);
  const [pictureConfirm, setPictureConfirm] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [addImageId, setAddImageId] = useState<string>("null");
  const [token, setToken] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>({});


  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('token');
      setToken(savedToken);
    }

    setImage(info.image)
    setFormState({
      name: info.name,
      price: info.price,
      description: info.description,
      size: info.size,
      category: info.category,
    })
  }, []);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  const handleEditClick = () =>{
    setEditModal(!editModal)
  }

  const handleEditConfirm = () =>{
    setEditConfirm(!editConfirm);
    setImage(info.image);
  }

  const addPictureConfirm = () => {
    setPictureConfirm(!pictureConfirm)
    setImage(null)
  }

  const handleDeleteClick = () => {
    setDeleteModal(!deleteModal)
  }

  const handleDeleteConfirm = (id:string) =>{
    setDeleteConfirm(!deleteConfirm);
    setAddImageId(id);
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

  const deleteAddAction = async () => {
    const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
    try {
        const response = await fetch(`${backApi}/api/v1/images/${addImageId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include'
        });

        await response.json();
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

        const response = await fetch(`${backApi}/api/v1/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
            credentials: 'include'
        });

        await response.json();
        handleBack()
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
                    <div className="details_carousel-inner">
                      {!image && images.map((item: any, count: number) => (
                        <div className="container_add_image" key={count}>
                          <Image
                            src={item.image}
                            alt="Imagen personalizada"
                            width={400}
                            height={300}
                            style={{
                              width: '100%',
                              height: 'auto',
                              objectFit: 'cover',
                              flex: '1 0 100%',
                              scrollSnapAlign: 'start',
                            }}
                          />
                          <button
                            onClick={()=>handleDeleteConfirm(item.id)}
                            className="config_button--cancel"
                          >
                            <Image src={"/dash.png"} alt="button config" width={25} height={25}/>
                          </button>
                          {deleteConfirm && (
                            <div className="add_delete_image_container">
                                <h4>Quieres eliminar la imagen?</h4>
                                <button onClick={deleteAddAction}>Si</button>
                                <button onClick={()=>handleDeleteConfirm("null")}>No</button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
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
              <FormProductEdit
                  image={image}
                  handleInput={handleInput}
                  handleImageChange={handleImageChange}
                  handlerClick={handleEditConfirm}
                  handlerClickSend={handlerClickSend}
                  info={info}
              />
            )}
          </div>

          <button
            onClick={handleEditClick}
            className="config_button--cancel"
          >
            <Image src={"/cancel.png"} alt="button config" width={25} height={25}/>
          </button>
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
