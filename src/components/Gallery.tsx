
import React, { useState } from "react";
import { galleryPhotos } from "../data/memories";
import { X } from "lucide-react";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="bg-romance-pink/10 py-20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4 text-pretty">Beautiful Moments Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of our favorite memories captured over the years. Each photo tells a story of our love and adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="gallery-item cursor-pointer"
              onClick={() => openLightbox(photo.id)}
              style={{
                opacity: 0,
                animation: 'fade-in 0.8s ease-out forwards',
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-100">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full text-white bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <p className="font-medium">{photo.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <div 
              className="max-w-4xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryPhotos.find(photo => photo.id === selectedImage) && (
                <img
                  src={galleryPhotos.find(photo => photo.id === selectedImage)?.url}
                  alt={galleryPhotos.find(photo => photo.id === selectedImage)?.alt}
                  className="max-h-[90vh] max-w-full object-contain"
                />
              )}
              
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
                <p>{galleryPhotos.find(photo => photo.id === selectedImage)?.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
