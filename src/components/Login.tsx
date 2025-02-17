"use client"
import Image from 'next/image';
import { useState } from "react";


const Login = () => {
    // const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    const [flat, setFlat] = useState<boolean>(false);


    const handlerClick = () => {
        setFlat(!flat);
    }
    
    if(!flat){
        return (
          <div className='login--button' onClick={handlerClick}>
              <Image src="/login.svg" alt="" width={30} height={30}/>
          </div>
        );
    }else{
        return (
            <div className='login_container'>
                <div className='login_content'>
                    <p>Login</p>
                    <input type="text" className='login_content--input'/>
                    <input type="password" className='login_content--input'/>
                    <button
                        className="close-btn--send"
                        onClick={handlerClick}
                    >Enviar
                    </button>
                    <button 
                        className="close-btn"
                        onClick={handlerClick}
                    >Cerrar
                    </button>
                </div>
            </div>
        )
    }
};

export default Login;