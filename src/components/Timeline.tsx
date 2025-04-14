
import React from "react";
import { timelineMemories } from "../data/memories";
import { CalendarDays } from "lucide-react";

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-pretty mb-4">Our Journey Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From the moment we met to where we are now, each memory we've created has brought us closer together. Here's a glimpse into our beautiful journey of love.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {timelineMemories.map((memory, index) => (
            <div 
              key={memory.id} 
              className={`timeline-item grid grid-cols-1 md:grid-cols-5 gap-6 mb-16 last:mb-0 opacity-0`}
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards',
                animation: 'fade-in 0.8s ease-out forwards',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="bg-romance-offWhite p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <CalendarDays size={16} />
                    <span>{memory.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{memory.title}</h3>
                  <p className="text-gray-600">{memory.description}</p>
                </div>
              </div>
              
              <div className="md:col-span-3 order-1 md:order-2">
                {memory.imageUrl && (
                  <img
                    src={memory.imageUrl}
                    alt={memory.title}
                    className="w-full h-60 md:h-80 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
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
