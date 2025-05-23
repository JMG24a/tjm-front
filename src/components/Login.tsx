"use client"
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from "react";


const Login = () => {
    // const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    const [formState, setFormState] = useState({});
    const [flat, setFlat] = useState<boolean>(false);
    const [login, setLogin] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const savedToken = localStorage.getItem('token');
        if(savedToken != null){
            setLogin(true)
        }
        setToken(savedToken);
      }
    }, []);

    const handlerClickSend = async () => {
        const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
        try{
            const response = await fetch(`${backApi}/api/v1/auth/login`,
                {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formState),
                    credentials: 'include' // Permite enviar cookies si las hubiera
                }
            );
            const data = await response.json();
            if(data?.auth){
                localStorage.setItem("token", data.auth);
                setToken(data.auth);
                setFlat(!flat);
                setLogin(true);
            }else{
                setError("password or user incorrect");
            }
        }catch(error){
            console.log("error", error)
        }
    }

    const handlerLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setLogin(false);
    }


    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handlerClick = () => {
        setFlat(!flat);
    }
    
    if(!flat && !login){
        return (
          <div className='login--button' onClick={handlerClick}>
              <Image src="/login.svg" alt="" width={30} height={30}/>
          </div>
        );
    }else if(!login){
        return (
            <div className='login_container'>
                <div className='login_content'>
                    <p>Login</p>
                    <input type="text" className='login_content--input' name='email' onChange={handleInput}/>
                    <input type="password" className='login_content--input' name='password' onChange={handleInput}/>
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
    }else if(login && token){
        return(
            <div className='logout--button' onClick={handlerLogout}>
                <Image src="/mono-logout.png" alt="" width={30} height={30}/>
            </div>
        )
    }
};

export default Login;