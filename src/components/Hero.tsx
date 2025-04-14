
import React, { useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Create floating hearts animation
  useEffect(() => {
    if (!heroRef.current) return;
    
    const createHeart = () => {
      if (!heroRef.current) return;
      
      const heart = document.createElement("div");
      heart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFDEE2" stroke="#FFDEE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
      heart.className = "heart-particle";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.opacity = (0.3 + Math.random() * 0.7).toString();
      heart.style.transform = `scale(${0.5 + Math.random() * 1})`;
      heart.style.animationDuration = 5 + Math.random() * 10 + "s";
      
      heroRef.current.appendChild(heart);
      
      setTimeout(() => {
        if (heart && heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 15000);
    };
    
    // Create initial hearts
    for (let i = 0; i < 10; i++) {
      setTimeout(createHeart, Math.random() * 3000);
    }
    
    // Continue creating hearts
    const interval = setInterval(createHeart, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Calculate days together
  const startDate = new Date("2022-04-15"); // Example start date
  const today = new Date();
  const daysTogetherDiff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const daysRounded = Math.round(daysTogetherDiff);
  
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-romance-white to-romance-pink/10 opacity-80 z-0"></div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="mb-2 text-pretty">
              <span className="block text-xl md:text-2xl font-normal mb-2">Celebrating</span>
              <span className="text-romance-pink">3 Beautiful Years</span> 
              <span className="block mt-2">Together</span>
            </h1>
            
            <p className="text-lg mt-5 text-gray-700 max-w-lg mx-auto lg:mx-0">
              Every moment with you has made my life more beautiful and meaningful. 
              Here's to our journey of love, growth, and endless adventures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <a href="#timeline" className="btn-primary flex items-center justify-center gap-2">
                <Heart className="h-5 w-5" />
                <span>Our Story</span>
              </a>
              <div className="flex items-center justify-center px-6 py-3 border border-romance-pink rounded-full bg-white/80 font-medium">
                <span>{daysRounded} Days of Love</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-slow">
            <div className="w-full aspect-square max-w-md mx-auto overflow-hidden rounded-full border-8 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1585874141813-582f0e130330?w=800&auto=format&fit=crop" 
                alt="Happy couple" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 lg:-bottom-8 lg:-right-8 bg-white p-4 rounded-full shadow-lg animate-pulse-gentle">
              <div className="bg-romance-pink rounded-full p-3 w-20 h-20 flex items-center justify-center">
                <div className="text-white font-playfair font-bold text-center">
                  <span className="block text-sm">April</span>
                  <span className="block text-xl">15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
