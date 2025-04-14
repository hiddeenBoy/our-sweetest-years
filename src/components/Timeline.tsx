
import React from "react";
import { timelineMemories } from "../data/memories";
import { CalendarDays, Heart } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

const Timeline: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="timeline" className="bg-white py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-pretty mb-4 text-2xl md:text-3xl lg:text-4xl">
            Our <span className="text-romance-pink">Journey</span> Together
          </h2>
          <div className="flex justify-center mb-4">
            <Heart className="text-romance-pink h-6 w-6 animate-pulse-gentle" fill="#FFDEE2" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
            From the moment we met to where we are now, each memory we've created has brought us closer together. Here's a glimpse into our beautiful journey of love.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {timelineMemories.map((memory, index) => (
            <div 
              key={memory.id} 
              className={`timeline-item grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-16 last:mb-0 opacity-0`}
              style={{
                animationFillMode: 'forwards',
                animation: 'fade-in 0.8s ease-out forwards',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className={`${isMobile ? 'order-2' : 'md:col-span-2 order-2 md:order-1'}`}>
                <div className="bg-romance-offWhite p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full border-l-4 border-romance-pink">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <CalendarDays size={16} className="text-romance-pink" />
                    <span>{memory.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">{memory.title}</h3>
                  <p className="text-gray-600">{memory.description}</p>
                </div>
              </div>
              
              <div className={`${isMobile ? 'order-1 mb-4' : 'md:col-span-3 order-1 md:order-2'}`}>
                {memory.imageUrl && (
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-romance-pink/20 to-transparent pointer-events-none z-10"></div>
                    <img
                      src={memory.imageUrl}
                      alt={memory.title}
                      className="w-full h-48 md:h-60 lg:h-80 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full">
                      <Heart size={16} className="text-romance-pink" fill="#FFDEE2" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
