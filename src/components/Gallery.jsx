"use client";
import React, { useState, useEffect } from 'react';
import { FaImages, FaTimes, FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';
import { getGalleryImages } from '../server/server.js';

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const [carouselIndices, setCarouselIndices] = useState({});

  useEffect(() => {
    fetchGalleries();
  }, []);

  const fetchGalleries = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await getGalleryImages();
      console.log('Gallery data received:', data);
      
      setGalleries(data || []);
      
      // Initialize carousel indices for each gallery
      const initialIndices = {};
      data?.forEach((gallery, index) => {
        initialIndices[index] = 0;
      });
      setCarouselIndices(initialIndices);
      
    } catch (err) {
      console.error('Error fetching galleries:', err);
      setError(err.message || 'Failed to load galleries');
      
      // Fallback to dummy data in development
      if (process.env.NODE_ENV === 'development') {
        setGalleries(getFallbackGalleries());
      }
    } finally {
      setLoading(false);
    }
  };

  // Fallback dummy galleries matching your schema structure
  const getFallbackGalleries = () => [
    {
      _id: "1",
      title: "Web Development Projects",
      images: [
        {
          url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=center",
          public_id: "web1"
        },
        {
          url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=800&fit=crop&crop=center",
          public_id: "web2"
        },
        {
          url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=800&fit=crop&crop=center",
          public_id: "web3"
        }
      ]
    },
    {
      _id: "2", 
      title: "Achievements & Certifications",
      images: [
        {
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&crop=center",
          public_id: "cert1"
        },
        {
          url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=800&fit=crop&crop=center",
          public_id: "cert2"
        }
      ]
    },
    {
      _id: "3",
      title: "Tech Events & Workshops",
      images: [
        {
          url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop&crop=center",
          public_id: "event1"
        },
        {
          url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=800&fit=crop&crop=center",
          public_id: "event2"
        },
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&crop=center",
          public_id: "event3"
        }
      ]
    }
  ];

  // Carousel navigation functions
  const nextCarouselImage = (galleryIndex) => {
    setCarouselIndices(prev => ({
      ...prev,
      [galleryIndex]: (prev[galleryIndex] + 1) % galleries[galleryIndex].images.length
    }));
  };

  const prevCarouselImage = (galleryIndex) => {
    setCarouselIndices(prev => ({
      ...prev,
      [galleryIndex]: (prev[galleryIndex] - 1 + galleries[galleryIndex].images.length) % galleries[galleryIndex].images.length
    }));
  };

  // Lightbox functions
  const openLightbox = (image, galleryIndex, imageIndex) => {
    setSelectedImage(image);
    setSelectedGalleryIndex(galleryIndex);
    setCurrentIndex(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextLightboxImage = () => {
    const currentGallery = galleries[selectedGalleryIndex];
    const nextIndex = (currentIndex + 1) % currentGallery.images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(currentGallery.images[nextIndex]);
  };

  const prevLightboxImage = () => {
    const currentGallery = galleries[selectedGalleryIndex];
    const prevIndex = (currentIndex - 1 + currentGallery.images.length) % currentGallery.images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(currentGallery.images[prevIndex]);
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevLightboxImage();
          break;
        case 'ArrowRight':
          nextLightboxImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex, selectedGalleryIndex]);

  // Loading state
  if (loading) {
    return (
      <section 
        id="gallery" 
        className="py-20" 
        style={{ 
          background: "radial-gradient(ellipse at top, #DCD6F7 0%, #f8fafc 100%)" 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaSpinner className="animate-spin w-12 h-12 mx-auto mb-4 text-[#424874]" />
            <p className="text-xl text-gray-900">Loading galleries...</p>
            <p className="text-sm text-gray-600 mt-2">Fetching images from backend...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error && galleries.length === 0) {
    return (
      <section 
        id="gallery" 
        className="py-20" 
        style={{ 
          background: "radial-gradient(ellipse at top, #DCD6F7 0%, #f8fafc 100%)" 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaImages className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-red-600 mb-2">Failed to load galleries</p>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={fetchGalleries}
              className="px-6 py-2 bg-[#424874] text-white rounded-lg hover:bg-[#5d65a1] transition-colors mr-4"
            >
              Try Again
            </button>
            {process.env.NODE_ENV === 'development' && (
              <button 
                onClick={() => {
                  setGalleries(getFallbackGalleries());
                  setError(null);
                }}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Use Demo Data
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="gallery" 
      className="py-20 relative overflow-hidden" 
      style={{ 
        background: "radial-gradient(ellipse at top, #DCD6F7 0%, #f8fafc 100%)" 
      }}
    >
      {/* Decorative background elements matching hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-32 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-48 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-32 w-5 h-5 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-24 right-24 w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header matching hero section style */}
        <div className="text-center mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              My{' '}
              <span className="bg-[#1f31be] bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A visual journey through my work, achievements, and memorable moments. 
              Each collection tells a unique story of growth, creativity, and passion for technology.
            </p>
          </div>
          
          {/* Decorative line matching hero section style */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Enhanced Gallery Content */}
        {galleries.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 border border-gray-200 shadow-2xl">
              <FaImages className="w-20 h-20 text-gray-400 mx-auto mb-6" />
              <p className="text-2xl text-gray-900 font-semibold mb-2">No galleries found.</p>
              <p className="text-gray-600 text-lg">Upload some magical moments from your admin panel!</p>
            </div>
          </div>
        ) : (
          <div className="space-y-24">
            {galleries.map((gallery, galleryIndex) => (
              <div key={gallery._id || galleryIndex} className="gallery-section">
                {/* Enhanced Gallery Title */}
                <div className="text-center mb-12">
                  <div className="inline-block bg-white/80 backdrop-blur-lg rounded-2xl px-8 py-6 border border-gray-200 shadow-xl">
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      {gallery.title}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#424874] to-[#A6B1E1] mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Premium Carousel Container */}
                <div className="relative">
                  {gallery.images && gallery.images.length > 0 ? (
                    <>
                      {/* Main Carousel Display with Glass Effect */}
                      <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-white/80 backdrop-blur-lg border border-gray-200 aspect-[16/9] max-w-5xl mx-auto group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5"></div>
                        
                        <img
                          src={gallery.images[carouselIndices[galleryIndex] || 0]?.url}
                          alt={`${gallery.title} - Image ${(carouselIndices[galleryIndex] || 0) + 1}`}
                          className="w-full h-full object-cover cursor-pointer transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          loading="lazy"
                          onClick={() => openLightbox(
                            gallery.images[carouselIndices[galleryIndex] || 0], 
                            galleryIndex, 
                            carouselIndices[galleryIndex] || 0
                          )}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/800x500?text=Image+Not+Found';
                          }}
                        />

                        {/* Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Enhanced Navigation Buttons */}
                        {gallery.images.length > 1 && (
                          <>
                            <button
                              onClick={() => prevCarouselImage(galleryIndex)}
                              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-[#424874]/80 hover:bg-[#424874] backdrop-blur-lg rounded-full p-4 transition-all duration-300 shadow-xl border border-gray-200 group/btn opacity-0 group-hover:opacity-100"
                              aria-label="Previous image"
                            >
                              <FaChevronLeft className="w-7 h-7 text-white group-hover/btn:text-[#A6B1E1] transition-colors duration-200" />
                            </button>
                            <button
                              onClick={() => nextCarouselImage(galleryIndex)}
                              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#424874]/80 hover:bg-[#424874] backdrop-blur-lg rounded-full p-4 transition-all duration-300 shadow-xl border border-gray-200 group/btn opacity-0 group-hover:opacity-100"
                              aria-label="Next image"
                            >
                              <FaChevronRight className="w-7 h-7 text-white group-hover/btn:text-[#A6B1E1] transition-colors duration-200" />
                            </button>
                          </>
                        )}

                        {/* Enhanced Image Counter */}
                        <div className="absolute bottom-6 right-6 bg-gray-900/70 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-lg">
                          <span className="text-[#A6B1E1] font-bold">{(carouselIndices[galleryIndex] || 0) + 1}</span>
                          <span className="text-gray-300 mx-1">/</span>
                          <span>{gallery.images.length}</span>
                        </div>

                        {/* Enhanced View Full Size Button */}
                        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => openLightbox(
                              gallery.images[carouselIndices[galleryIndex] || 0], 
                              galleryIndex, 
                              carouselIndices[galleryIndex] || 0
                            )}
                            className="bg-[#424874] hover:bg-[#5d65a1] backdrop-blur-lg rounded-full p-4 transition-all duration-300 shadow-xl border border-gray-200 group/expand"
                            aria-label="View full size"
                          >
                            <FaImages className="w-6 h-6 text-white group-hover/expand:scale-110 transition-transform duration-200" />
                          </button>
                        </div>

                        {/* Subtle Highlight Effect */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-3 h-3 bg-[#A6B1E1] rounded-full animate-ping"></div>
                        </div>
                      </div>

                      {/* Enhanced Thumbnail Strip */}
                      {gallery.images.length > 1 && (
                        <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
                          <div className="flex space-x-4 px-4">
                            {gallery.images.map((image, imageIndex) => (
                              <button
                                key={image.public_id || imageIndex}
                                onClick={() => setCarouselIndices(prev => ({
                                  ...prev,
                                  [galleryIndex]: imageIndex
                                }))}
                                className={`flex-shrink-0 relative group/thumb transition-all duration-300 ${
                                  (carouselIndices[galleryIndex] || 0) === imageIndex
                                    ? 'scale-110'
                                    : 'hover:scale-105'
                                }`}
                              >
                                <div className={`w-24 h-24 rounded-2xl overflow-hidden border-3 transition-all duration-300 shadow-lg ${
                                  (carouselIndices[galleryIndex] || 0) === imageIndex
                                    ? 'border-[#1f31be] shadow-[#1f31be]/50 shadow-2xl'
                                    : 'border-gray-300 hover:border-[#A6B1E1] hover:shadow-[#A6B1E1]/30'
                                }`}>
                                  <img
                                    src={image.url}
                                    alt={`${gallery.title} thumbnail ${imageIndex + 1}`}
                                    className="w-full h-full object-cover transition-all duration-300 group-hover/thumb:brightness-110"
                                    loading="lazy"
                                  />
                                </div>
                                
                                {/* Active Indicator */}
                                {(carouselIndices[galleryIndex] || 0) === imageIndex && (
                                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#424874] rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-16 bg-white/80 backdrop-blur-lg rounded-3xl border border-gray-200">
                      <FaImages className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                      <p className="text-gray-900 text-xl font-medium">No images in this gallery</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Premium Gallery Stats */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-lg rounded-2xl px-10 py-6 shadow-2xl border border-gray-200 group hover:bg-white/90 transition-all duration-300">
            <div className="bg-[#424874] rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
              <FaImages className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-gray-900 font-bold text-lg">
                Showcasing <span className="text-[#1f31be] text-xl">{galleries.length}</span> galleries
              </p>
              <p className="text-gray-600 text-sm">
                with <span className="text-[#424874] font-semibold">
                  {galleries.reduce((total, gallery) => total + (gallery.images?.length || 0), 0)}
                </span> magical moments
              </p>
            </div>
          </div>
        </div>

        {/* Ultra-Premium Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
            </div>

            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
              {/* Ultra-Enhanced Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-8 right-8 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full p-5 transition-all duration-300 shadow-2xl border border-white/20 group"
                aria-label="Close gallery"
              >
                <FaTimes className="w-7 h-7 text-white group-hover:text-red-400 group-hover:rotate-90 transition-all duration-300" />
              </button>

              {/* Ultra-Enhanced Navigation Buttons */}
              {galleries[selectedGalleryIndex]?.images?.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevLightboxImage();
                    }}
                    className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#424874]/80 hover:bg-[#424874] backdrop-blur-lg rounded-full p-5 transition-all duration-300 z-30 shadow-2xl border border-gray-200 group"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="w-8 h-8 text-white group-hover:text-[#A6B1E1] group-hover:-translate-x-1 transition-all duration-300" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextLightboxImage();
                    }}
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-[#424874]/80 hover:bg-[#424874] backdrop-blur-lg rounded-full p-5 transition-all duration-300 z-30 shadow-2xl border border-gray-200 group"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="w-8 h-8 text-white group-hover:text-[#A6B1E1] group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </>
              )}

              {/* Premium Image Container */}
              <div 
                className="relative max-w-full max-h-full flex items-center justify-center group"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 blur-3xl rounded-3xl scale-110 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <img
                  src={selectedImage.url}
                  alt={`${galleries[selectedGalleryIndex]?.title} - Image ${currentIndex + 1}`}
                  className="relative max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-gray-200 transition-all duration-500 group-hover:scale-105"
                />

                {/* Ultra-Enhanced Image Info */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-2xl rounded-2xl px-10 py-6 shadow-2xl border border-gray-300 min-w-96">
                  <div className="text-center">
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-600 rounded-full h-1 mb-4">
                      <div 
                        className="bg-[#424874] h-1 rounded-full transition-all duration-500"
                        style={{
                          width: `${((currentIndex + 1) / (galleries[selectedGalleryIndex]?.images?.length || 1)) * 100}%`
                        }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-center mb-3">
                      <span className="bg-[#424874] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        {currentIndex + 1} / {galleries[selectedGalleryIndex]?.images?.length || 0}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {galleries[selectedGalleryIndex]?.title}
                    </h3>
                    <p className="text-gray-300 text-sm flex items-center justify-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                      Image {currentIndex + 1} of {galleries[selectedGalleryIndex]?.images?.length || 0}
                      <span className="w-2 h-2 bg-purple-400 rounded-full ml-2 animate-pulse delay-500"></span>
                    </p>
                  </div>
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute top-8 left-8 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#424874]/80 hover:bg-[#424874] backdrop-blur-lg rounded-full p-3 transition-all duration-300 shadow-lg border border-gray-300 group/btn">
                    <FaImages className="w-5 h-5 text-white group-hover/btn:text-[#A6B1E1] transition-colors duration-200" />
                  </button>
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