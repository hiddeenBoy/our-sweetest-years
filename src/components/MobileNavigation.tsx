
import React from "react";
import { Home, Calendar, Image, Heart, MessageCircleHeart } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const MobileNavigation: React.FC = () => {
  const navItems: NavItem[] = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "Our Story", href: "#timeline", icon: Calendar },
    { name: "Gallery", href: "#gallery", icon: Image },
    { name: "Love Letter", href: "#letter", icon: MessageCircleHeart },
    { name: "Memories", href: "#memories", icon: Heart },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.05)] py-2 z-50 border-t border-romance-pink/20">
      <div className="flex items-center justify-around">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex flex-col items-center pt-1 pb-1 px-2 group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-romance-offWhite group-hover:bg-romance-pink/20 transition-all duration-300">
              <item.icon 
                size={22} 
                className="text-gray-500 group-hover:text-romance-pink transition-colors" 
              />
            </div>
            <span className="text-[10px] font-medium mt-1 text-gray-500 group-hover:text-romance-pink transition-colors">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavigation;
