// components/ScrollAnimation.js
"use client"
import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScrollAnimation = ({ children }: any) => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-up');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const elementInView = (el: any, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) *
          (percentageScroll / 100)
      );
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const displayScrollElement = (element: any) => {
      element.classList.add('visible');
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const hideScrollElement = (element: any) => {
      element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 75)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    // Ejecutar al cargar la página
    handleScrollAnimation();

    // Cleanup para evitar memory leaks
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return <>{children}</>;
};

export default ScrollAnimation;
