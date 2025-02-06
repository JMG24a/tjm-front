// components/ScrollAnimation.js
"use client"
import { useEffect } from 'react';

const ScrollAnimation = ({ children }) => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-up');

    const elementInView = (el: any, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) *
          (percentageScroll / 100)
      );
    };

    const displayScrollElement = (element: any) => {
      element.classList.add('visible');
    };

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
