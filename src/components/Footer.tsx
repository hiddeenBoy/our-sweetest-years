
import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-romance-pink/10 py-8 mt-auto">
      <div className="container-custom">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-romance-pink" size={20} />
            <h3 className="font-playfair text-lg">Our Love Story</h3>
          </div>
          
          <p className="text-gray-500 text-sm mb-6">
            Created with love to celebrate our 3 years together
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="#hero"
              className="text-sm text-gray-600 hover:text-romance-pink"
            >
              Home
            </a>
            <a
              href="#timeline"
              className="text-sm text-gray-600 hover:text-romance-pink"
            >
              Timeline
            </a>
            <a
              href="#gallery"
              className="text-sm text-gray-600 hover:text-romance-pink"
            >
              Gallery
            </a>
          </div>
          
          <div className="mt-6 pt-6 border-t border-romance-pink/10">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} | With all my love ♥
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
