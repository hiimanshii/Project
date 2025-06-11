import React, { useState, useEffect } from 'react';
import { Heart, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('photo-gallery');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Updated photos with correct paths for Netlify
  const photos = [
    {
      id: 1,
      src: '/start1.jpeg',
      caption: 'When We Started to talk',
      date: '2019',
      description: 'The beginning of our beautiful story'
    },
    {
      id: 2,
      src: '/start2.jpeg',
      caption: 'When we met first time',
      date: '2020',
      description: 'The day that changed everything'
    },
    {
      id: 3,
      src: '/start3.jpeg',
      caption: 'Moments That Made Us Closer',
      date: '2021',
      description: 'Learning, growing, and falling deeper in love'
    },
    {
      id: 4,
      src: '/start4.jpeg',
      caption: 'Celebrating our day',
      date: '2022',
      description: 'Finding joy in simple togetherness'
    },
    {
      id: 5,
      src: '/start5.jpeg',
      caption: 'Loving Through Every Mile',
      date: '2023',
      description: 'Our hearts aligned more than ever'
    },
    {
      id: 6,
      src: '/start6.jpeg',
      caption: 'Growing Stronger',
      date: '2024',
      description: 'Every year more in love'
    },
    {
      id: 7,
      src: '/start7.jpeg',
      caption: 'Present Day Love',
      date: '2025',
      description: 'Still writing our story'
    },
    {
      id: 8,
      src: '/start9.jpeg',
      caption: 'Forever & Always',
      date: 'Endless',
      description: 'Looking forward to our future'
    }
  ];

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="photo-gallery" className="py-20 bg-gradient-to-b from-orange-50 via-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-rose-500" size={32} fill="currentColor" />
            <Camera className="text-pink-500" size={40} />
            <Heart className="text-rose-500" size={32} fill="currentColor" />
          </div>
          <h2 className="text-6xl font-bold text-rose-800 mb-4 romantic-text">
            Our Photo Memories
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32"></div>
            <Heart className="text-rose-400" size={16} fill="currentColor" />
            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32"></div>
          </div>
          <p className="text-xl text-rose-600 max-w-2xl mx-auto elegant-text">
            Every picture tells a story of our love, captured in moments that we'll treasure forever
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover-lift ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1 elegant-text">{photo.caption}</h3>
                  <p className="text-sm opacity-90 elegant-text">{photo.date}</p>
                  <p className="text-xs opacity-75 mt-1 elegant-text">{photo.description}</p>
                </div>

                {/* Heart icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="text-white animate-heartbeat" size={24} fill="currentColor" />
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[40px] border-l-rose-400/80 border-b-[40px] border-b-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Romantic quote */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-rose-600 italic text-xl romantic-text mb-4">
              "Every photo is a memory, every memory is a treasure, and every treasure is a piece of our love story"
            </p>
            <div className="flex items-center justify-center gap-2">
              <Heart className="text-rose-400" size={16} fill="currentColor" />
              <span className="text-rose-500 elegant-text">Forever Captured, Forever Cherished</span>
              <Heart className="text-rose-400" size={16} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal for enlarged photo view */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-rose-300 transition-colors duration-300 z-20 bg-black/50 rounded-full p-1"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-5xl max-h-full"
            onClick={(e) => e.stopPropagation()} // prevent image container from closing modal
          >

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rose-300 transition-colors duration-300 z-10 bg-black/50 rounded-full p-2"
              onClick={prevPhoto}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rose-300 transition-colors duration-300 z-10 bg-black/50 rounded-full p-2"
              onClick={nextPhoto}
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].caption}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Photo info */}
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <div className="glass-effect rounded-2xl p-4">
                <h3 className="text-xl font-semibold mb-1 elegant-text">{photos[selectedPhoto].caption}</h3>
                <p className="text-sm opacity-90 elegant-text">{photos[selectedPhoto].date}</p>
                <p className="text-sm opacity-75 mt-1 elegant-text">{photos[selectedPhoto].description}</p>
              </div>
            </div>

            {/* Photo counter */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white">
              <div className="glass-effect rounded-full px-4 py-2">
                <span className="text-sm elegant-text">{selectedPhoto + 1} of {photos.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;