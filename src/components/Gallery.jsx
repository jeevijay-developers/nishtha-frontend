"use client";
import React, { useState } from 'react';
import { FaImages, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dummy images for now - replace with API call later
  const dummyImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=center",
      title: "Web Development Project",
      description: "Full-stack web application development"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=800&fit=crop&crop=center",
      title: "Coding Workshop",
      description: "JavaScript and React training session"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=800&fit=crop&crop=center",
      title: "UI/UX Design",
      description: "Modern interface design and prototyping"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&crop=center",
      title: "Team Collaboration",
      description: "Working with development team"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=800&fit=crop&crop=center",
      title: "Programming Challenge",
      description: "Competitive programming session"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop&crop=center",
      title: "Tech Conference",
      description: "Speaking at technology conference"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=800&fit=crop&crop=center",
      title: "Code Review",
      description: "Reviewing and optimizing code"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&crop=center",
      title: "Data Analysis",
      description: "Working with data visualization"
    }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % dummyImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(dummyImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + dummyImages.length) % dummyImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(dummyImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Matching your Projects component style */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My{' '}
            <span className="bg-[#424874] bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#424874] to-[#A6B1E1] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual journey through my work, achievements, and memorable moments. 
            Each image tells a story of growth, creativity, and passion for technology.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dummyImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-[#A6B1E1] transform hover:-translate-y-2"
              onClick={() => openLightbox(image, index)}
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              
              {/* Enhanced Overlay with Better Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
                    <FaImages className="w-8 h-8 text-[#424874]" />
                  </div>
                  <p className="text-white text-center mt-3 font-medium text-sm px-4">
                    View Image
                  </p>
                </div>
              </div>

              {/* Enhanced Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-bold mb-1">{image.title}</h3>
                <p className="text-gray-200 text-sm opacity-90">{image.description}</p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#424874] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Gallery Stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <FaImages className="w-5 h-5 text-[#424874] mr-3" />
            <p className="text-gray-700 font-medium">
              Showcasing <span className="font-bold text-[#424874]">{dummyImages.length}</span> memorable moments
            </p>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
              {/* Enhanced Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-200 group"
                aria-label="Close gallery"
              >
                <FaTimes className="w-6 h-6 text-white group-hover:text-gray-200" />
              </button>

              {/* Enhanced Navigation Buttons */}
              {dummyImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-200 z-20 group"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="w-7 h-7 text-white group-hover:text-gray-200" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-200 z-20 group"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="w-7 h-7 text-white group-hover:text-gray-200" />
                  </button>
                </>
              )}

              {/* Enhanced Image Container */}
              <div 
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                />

                {/* Enhanced Image Info */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/25 backdrop-blur-md rounded-2xl px-8 py-4 min-w-80">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="bg-[#424874] text-white text-sm font-bold px-3 py-1 rounded-full">
                        {currentIndex + 1} / {dummyImages.length}
                      </span>
                    </div>
                    <h3 className="text-white text-lg font-bold mb-1">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-200 text-sm opacity-90">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;