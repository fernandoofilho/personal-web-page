import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight">
          Fernando<span className="text-blue-500">.</span>dev
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#posts" className="hover:text-blue-400 transition-colors">
            Posts
          </a>
          {/* <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a> */}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-100 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#about" className="py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" className="py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#projects" className="py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#posts" className="py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>
              Posts
            </a>
            {/* <a href="#contact" className="py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>
              Contact
            </a> */}
          </div>
        </nav>}
    </header>;
};