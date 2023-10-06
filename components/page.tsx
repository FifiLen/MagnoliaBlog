'use client'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [borderAnimation, setBorderAnimation] = useState("");

  const handleScroll = () => {
    const isScrolled = window.scrollY > 10;
    if (isScrolled && borderAnimation !== "slideIn") {
      setBorderAnimation("slideIn");
    } else if (!isScrolled && borderAnimation !== "slideOut") {
      setBorderAnimation("slideOut");
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [borderAnimation]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-white text-gray-800 p-4 ${borderAnimation}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">
          <a href="/" className="hover:text-[#ffae82] logo text-4xl font-playfair">Magnolia Blog<span className='italic text-[8px]'>by</span><span className=' text-[12px] text-[#921D7F]'>Poradnia Magnolia</span></a>
        </div>
        <nav>
          <ul className="menu flex space-x-4 text-sm">
            <li><a href="/" className="text-gray-500 hover:text-slate-600">Strona główna</a></li>
            <li><a href="/about" className="text-gray-500 hover:text-slate-600">O nas</a></li>
            <li><a href="/contact" className="text-gray-500 hover:text-slate-600">Kontakt</a></li>
            <li><a href="https://www.poradniamagnolia.pl" target="_blank" className="text-gray-500 hover:text-slate-600" aria-label="Przejdź na stronę poradni">Poradnia</a></li>

          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
