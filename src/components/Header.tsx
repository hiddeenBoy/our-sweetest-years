
import React, { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Story", href: "#timeline" },
    { name: "Gallery", href: "#gallery" },
    { name: "Love Letter", href: "#letter" },
    { name: "Memory Jar", href: "#memories" }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-3"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl md:text-2xl font-playfair font-semibold text-romance-pink transition-colors"
        >
          <Heart className={`h-5 w-5 ${isScrolled ? "" : "text-white"}`} fill="#FFDEE2" />
          <span className={isScrolled ? "" : "text-white"}>Our Love Story</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-romance-pink transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? 
            <X size={20} className={isScrolled ? "text-foreground" : "text-white"} /> : 
            <Menu size={20} className={isScrolled ? "text-foreground" : "text-white"} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-md z-40 animate-fade-in">
          <div className="container-custom flex flex-col space-y-6 pt-10 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-playfair font-medium text-foreground hover:text-romance-pink transition-colors flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart size={16} className={link.name === "Love Letter" ? "text-romance-pink" : "text-gray-400"} />
                {link.name}
              </a>
            ))}
            <div className="pt-6 mt-4 border-t border-gray-100 flex justify-center">
              <div className="flex items-center justify-center px-6 py-3 border border-romance-pink rounded-full bg-white/80 font-medium">
                <span>3 Years of Love ❤️</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
