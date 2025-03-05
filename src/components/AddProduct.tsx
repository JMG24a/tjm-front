"use client"
import Image from 'next/image';
import { useState } from "react";


const AddProduct = () => {
    // const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    const [formState, setFormState] = useState({});
    const [flat, setFlat] = useState<boolean>(false);
    const [login, setLogin] = useState<boolean>(()=>{
        const login = localStorage.getItem("token")
        if(!login){
            return false;
        }
        return true
    });
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handlerClickSend = async () => {
        const secretKey = process.env.API_SECRET_KEY;
        const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
        try{
            const response = await fetch(`${backApi}/api/v1/auth/login`,
                {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...formState }),
                    credentials: 'include' // Permite enviar cookies si las hubiera
                }
            );
            const data = await response.json();
            if(data?.auth){
                localStorage.setItem("token", data.auth);
                setToken(data.auth);
                setFlat(!flat);
                setLogin(true)
            }else{
                setError("password or user incorrect");
            }
        }catch(error){
            console.log("error", error)
        }
    }


    const handleInput = (e: any) => {
      const { name, value } = e.target;
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handlerClick = () => {
        console.log("SSS")
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
                    <p>Login</p>
                    <input type="text" className='login_content--input' name='name' onChange={handleInput}/>
                    <input type="text" className='login_content--input' name='price' onChange={handleInput}/>
                    <input type="text" className='login_content--input' name='image' onChange={handleInput}/>
                    <input type="text" className='login_content--input' name='size' onChange={handleInput}/>
                    <input type="text" className='login_content--input' name='category' onChange={handleInput}/>
                    <input type="text" className='login_content--input' name='description' onChange={handleInput}/>
                    <button
                        className="close-btn--send"
                        onClick={handlerClickSend}
                    >Enviar
                    </button>
                    <button 
                        className="close-btn"
                        onClick={handlerClick}
                    >Cerrar
                    </button>
                    {error? <p> {error} </p>: <p></p>}
                </div>
            </div>
        )
    }
};

export default AddProduct;