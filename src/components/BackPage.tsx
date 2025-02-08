"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BackPage = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/'); // Redirige a la página principal si no hay historial
    }
  };
  

  return (
    <Image 
        src="/arrow-left.png" 
        alt="volver"
        width={50}
        height={50}
        onClick={() => handleBack()}
    />
  );
};

export default BackPage;
