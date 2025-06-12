'use client';

import { useRouter } from 'next/navigation';

export default function BackToHomeButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/')}>
      Volver al Home
    </button>
  );
}
