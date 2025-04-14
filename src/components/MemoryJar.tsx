
import React, { useState } from "react";
import { jarMemories } from "../data/memories";
import { Sparkles, X } from "lucide-react";

const MemoryJar: React.FC = () => {
  const [openMemory, setOpenMemory] = useState<number | null>(null);
  const [drawnMemories, setDrawnMemories] = useState<number[]>([]);
  const [animateJar, setAnimateJar] = useState(false);

  const drawRandomMemory = () => {
    if (jarMemories.length === drawnMemories.length) {
      return; // All memories have been drawn
    }

    // Filter out already drawn memories
    const availableMemories = jarMemories.filter(memory => !drawnMemories.includes(memory.id));
    if (availableMemories.length === 0) return;
    
    // Select a random memory
    const randomIndex = Math.floor(Math.random() * availableMemories.length);
    const selectedMemory = availableMemories[randomIndex];
    
    // Animate the jar
    setAnimateJar(true);
    setTimeout(() => setAnimateJar(false), 600);
    
    // Update state after a short delay to simulate "drawing" the note
    setTimeout(() => {
      setOpenMemory(selectedMemory.id);
      setDrawnMemories(prev => [...prev, selectedMemory.id]);
    }, 600);
  };
  
  const closeMemory = () => {
    setOpenMemory(null);
  };
  
  // Reset all memories
  const resetMemories = () => {
    setDrawnMemories([]);
    setOpenMemory(null);
  };

  return (
    <section id="memories" className="bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4 text-pretty">Our Memory Jar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on the jar to reveal sweet memories and little moments that have made our journey special.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Memory jar */}
          <div className="flex flex-col items-center justify-center">
            <div 
              className={`cursor-pointer transition-transform duration-300 ${animateJar ? 'scale-110' : ''}`}
              onClick={drawRandomMemory}
            >
              <div className="w-64 h-80 relative">
                {/* Jar image/illustration */}
                <div className="absolute inset-0 bg-gradient-to-b from-romance-peach/50 to-romance-peach/80 rounded-b-3xl rounded-t-xl overflow-hidden border border-romance-peach">
                  {/* Jar lid */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-romance-gold/70 rounded-t-xl"></div>
                  
                  {/* Jar content */}
                  <div className="absolute top-10 left-4 right-4 bottom-4 overflow-hidden">
                    {/* Small memory snippets as decoration */}
                    {jarMemories.map((memory, index) => (
                      <div 
                        key={memory.id}
                        className={`absolute w-10 h-6 bg-white rotate-${Math.floor(Math.random() * 45)} opacity-70 
                          ${drawnMemories.includes(memory.id) ? 'hidden' : ''}`}
                        style={{
                          top: `${30 + (index * 10) % 60}%`, 
                          left: `${10 + (index * 15) % 70}%`,
                          transform: `rotate(${(index * 20) % 60 - 30}deg)`
                        }}
                      ></div>
                    ))}
                    
                    {/* Sparkles when animated */}
                    {animateJar && Array(5).fill(0).map((_, i) => (
                      <Sparkles 
                        key={i}
                        className="absolute text-romance-gold"
                        size={16}
                        style={{
                          top: `${20 + Math.random() * 60}%`, 
                          left: `${20 + Math.random() * 60}%`,
                          opacity: Math.random() * 0.8 + 0.2,
                          animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white py-2 px-6 rounded-full shadow-md">
                  <span className="text-sm font-medium">
                    {jarMemories.length - drawnMemories.length} memories left
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={resetMemories}
              className="mt-12 px-5 py-2 text-sm border border-romance-pink rounded-full hover:bg-romance-pink/10 transition-colors"
              disabled={drawnMemories.length === 0}
            >
              Reset All Memories
            </button>
          </div>
          
          {/* Displayed memory */}
          {openMemory !== null && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4" onClick={closeMemory}>
              <div 
                className="bg-white p-8 max-w-md w-full rounded-lg shadow-xl animate-fade-in relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700"
                  onClick={closeMemory}
                >
                  <X size={20} />
                </button>
                
                <div className="text-center">
                  <Sparkles className="text-romance-gold h-10 w-10 mx-auto mb-4" />
                  <p className="text-xl font-playfair mb-6">A Sweet Memory</p>
                  <div className="border-t border-b border-romance-pink/20 py-6">
                    <p className="italic text-xl text-gray-700 font-poppins">
                      "{jarMemories.find(memory => memory.id === openMemory)?.text}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MemoryJar;
