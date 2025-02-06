"use client";
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
    <img 
        src="/arrow-left.png" 
        alt="volver"
        onClick={() => handleBack()}
    />
  );
};

export default BackPage;
