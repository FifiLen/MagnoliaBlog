'use client'
import React, { useState, useEffect } from 'react';

const BackgroundText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);  // Sprawdzenie wartości scrolla
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let animationClass = '';
if (isVisible) {
    animationClass = 'fade-in';
} else {
    animationClass = 'fade-out';
}

return (
    <span className={`hidden md:block fixed top-[50%] left-[120px] transform -translate-x-1/2 -translate-y-1/2 text-[60px] text-black opacity-10 z-0 select-none font-playfair rotate-90 ${animationClass}`}>
      MAGNOLIA
    </span>
);
};

export default BackgroundText;
