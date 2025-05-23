import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const headerClasses = `bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
    isScrolled ? "shadow-md bg-white/95 backdrop-blur-sm" : ""
  }`;

  return (
    <header className={headerClasses} id="header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-accent mr-2">
              <i className="fas fa-heartbeat text-2xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Д-р Сара Джонсън</h1>
              <p className="text-sm text-neutral/70">Кардиолог специалист</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-neutral hover:text-primary font-medium transition-colors">Начало</a>
            <a href="#services" className="text-neutral hover:text-primary font-medium transition-colors">Услуги</a>
            <a href="#about" className="text-neutral hover:text-primary font-medium transition-colors">За нас</a>
            <a href="#hours" className="text-neutral hover:text-primary font-medium transition-colors">Работно време</a>
            <a href="#contact" className="text-neutral hover:text-primary font-medium transition-colors">Контакти</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="text-xl" />
            ) : (
              <Menu className="text-xl" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-3 border-t">
            <a 
              href="#home" 
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral hover:bg-primary/10 hover:text-primary"
              onClick={closeMenu}
            >
              Начало
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral hover:bg-primary/10 hover:text-primary"
              onClick={closeMenu}
            >
              Услуги
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral hover:bg-primary/10 hover:text-primary"
              onClick={closeMenu}
            >
              За нас
            </a>
            <a 
              href="#hours" 
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral hover:bg-primary/10 hover:text-primary"
              onClick={closeMenu}
            >
              Работно време
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral hover:bg-primary/10 hover:text-primary"
              onClick={closeMenu}
            >
              Контакти
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
