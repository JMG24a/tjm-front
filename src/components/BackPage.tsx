"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface propsBack{
  src: string,
  alt: string,
  width: number,
  height: number,
  type: string
} 

const BackPage = ({
  src,
  alt,
  width,
  height,
  type
}: propsBack) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.push(type);
    } else {
      router.push('/'); // Redirige a la página principal si no hay historial
    }
  };
  

  return (
    <Image 
        src={src} 
        alt={alt}
        width={width}
        height={height}
        onClick={() => handleBack()}
    />
  );
};

export default BackPage;
