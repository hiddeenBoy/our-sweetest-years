
import React from "react";
import { loveLetter } from "../data/memories";
import { Heart } from "lucide-react";

const LoveLetter: React.FC = () => {
  return (
    <section id="letter" className="bg-romance-pink/5 py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-romance-pink/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-5 right-5 text-romance-pink/20">
              <Heart size={60} />
            </div>
            <div className="absolute bottom-5 left-5 text-romance-pink/20">
              <Heart size={40} />
            </div>
            
            <div className="text-center mb-8">
              <h2 className="mb-2 text-pretty text-romance-pink">{loveLetter.title}</h2>
              <div className="h-px w-40 bg-romance-pink/50 mx-auto"></div>
            </div>
            
            <div className="prose max-w-none">
              {loveLetter.content.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="mb-4 text-gray-700 leading-relaxed font-poppins"
                  style={{
                    opacity: 0,
                    animation: 'fade-in 0.8s ease-out forwards',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="text-right mt-8 italic text-gray-600">
              <p>Forever yours,</p>
              <p>Your Love</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
