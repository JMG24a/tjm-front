"use client"
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    
  return (
    <div className='login'>
        <p>
            <Image src="/login.svg" alt="" width={30} height={30}/>
        </p>
    </div>
  );
};

export default Login;