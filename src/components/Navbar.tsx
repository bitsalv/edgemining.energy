import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1F1F1F]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#BFDEAE] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="https://discord.gg/VQa9UY5SsS" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#BFDEAE] transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://github.com/edge-mining/docs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#BFDEAE] transition-colors">
                  Docs
                </a>
              </li>
              <li>
                <a href="https://github.com/edge-mining" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#BFDEAE] transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1F1F1F] shadow-lg">
          <ul className="px-4 pt-2 pb-4 space-y-2">
            <li>
              <a 
                href="#about" 
                className="block py-2 text-base text-gray-300 hover:text-[#BFDEAE]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="https://discord.gg/VQa9UY5SsS"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-base text-gray-300 hover:text-[#BFDEAE]"
                onClick={() => setIsMenuOpen(false)}
              >
                Discord
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/edge-mining/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-base text-gray-300 hover:text-[#BFDEAE]"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/edge-mining"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-base text-gray-300 hover:text-[#BFDEAE]"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
