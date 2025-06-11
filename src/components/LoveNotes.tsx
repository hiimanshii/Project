import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Sparkles, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const LoveNotes = () => {
  const [currentNote, setCurrentNote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('love-notes');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentNote((prev) => (prev + 1) % loveNotes.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const loveNotes = [
    {
      message: "You are my sunshine on the cloudiest days, my calm in every storm, and my greatest adventure. Every moment with you feels like a beautiful dream I never want to wake up from.",
      author: "Your Forever Love",
      date: "Every Day Since 2020"
    },
    {
      message: "Five years ago, I found my person, my soulmate, my everything. Today, I'm still amazed by how perfectly we fit together, like two pieces of a puzzle meant to be one.",
      author: "Always & Forever Yours",
      date: "June 11, 2024"
    },
    {
      message: "Every day with you feels like a new page in our beautiful love story. I can't wait to write more chapters, create more memories, and love you more deeply with each passing day.",
      author: "Your Devoted Heart",
      date: "Since Day One"
    },
    {
      message: "You make ordinary moments extraordinary, and extraordinary moments absolutely unforgettable. With you, even the simplest things become magical memories I'll treasure forever.",
      author: "With All My Heart",
      date: "Every Single Day"
    },
    {
      message: "Thank you for being my partner in crime, my best friend, my safe haven, and my greatest love all wrapped into one incredible person. You are my everything and more.",
      author: "Eternally Grateful",
      date: "For 5 Beautiful Years"
    },
    {
      message: "From our first hello in 2018 to this very moment, you've been the most beautiful constant in my life. Here's to many more years of love, laughter, and endless adventures together.",
      author: "Your Biggest Fan",
      date: "2018 - Forever"
    }
  ];

  const nextNote = () => {
    setCurrentNote((prev) => (prev + 1) % loveNotes.length);
    setIsAutoPlaying(false);
  };

  const prevNote = () => {
    setCurrentNote((prev) => (prev - 1 + loveNotes.length) % loveNotes.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="love-notes" className="py-20 bg-gradient-to-r from-rose-100 via-pink-100 to-orange-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-rose-500" size={32} fill="currentColor" />
            <MessageCircle className="text-pink-500" size={40} />
            <Heart className="text-rose-500" size={32} fill="currentColor" />
          </div>
          <h2 className="text-6xl font-bold text-rose-800 mb-4 romantic-text">
            Love Notes
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32"></div>
            <Heart className="text-rose-400" size={16} fill="currentColor" />
            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32"></div>
          </div>
          <p className="text-xl text-rose-600 max-w-2xl mx-auto elegant-text">
            Words from the heart, written with all the love I have for you
          </p>
        </div>

        <div className="relative">
          {/* Main love note card */}
          <div className={`glass-effect rounded-3xl p-12 shadow-2xl border border-white/30 text-center relative overflow-hidden hover-lift ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(8)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-rose-400 animate-float"
                  size={30 + Math.random() * 20}
                  fill="currentColor"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${10 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i * 0.3}s`
                  }}
                />
              ))}
            </div>

            {/* Quote decorations */}
            <div className="absolute top-8 left-8">
              <Quote className="text-rose-300" size={32} />
            </div>
            <div className="absolute top-8 right-8 transform rotate-180">
              <Quote className="text-pink-300" size={32} />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="mb-8">
                <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light italic mb-8 elegant-text">
                  "{loveNotes[currentNote].message}"
                </p>
                <div className="space-y-2">
                  <p className="text-xl text-rose-600 font-semibold romantic-text">
                    — {loveNotes[currentNote].author}
                  </p>
                  <p className="text-sm text-rose-500 elegant-text opacity-80">
                    {loveNotes[currentNote].date}
                  </p>
                </div>
              </div>

              {/* Enhanced navigation */}
              <div className="flex justify-center items-center gap-8 mt-12">
                <button
                  onClick={prevNote}
                  className="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Previous note"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="flex gap-3">
                  {loveNotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentNote(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentNote 
                          ? 'w-8 h-4 bg-gradient-to-r from-rose-500 to-pink-500' 
                          : 'w-4 h-4 bg-rose-200 hover:bg-rose-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextNote}
                  className="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Next note"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Auto-play indicator */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-sm text-rose-500 hover:text-rose-600 transition-colors duration-300 elegant-text"
                >
                  {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced side cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <div className={`glass-effect rounded-2xl p-8 shadow-xl border border-white/30 hover-lift ${
              isVisible ? 'animate-slideInLeft' : 'opacity-0'
            }`} style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-rose-500" size={28} fill="currentColor" />
                <h3 className="text-2xl font-bold text-rose-800 romantic-text">Things I Adore About You</h3>
              </div>
              <ul className="text-gray-700 space-y-3 elegant-text">
                <li className="flex items-start gap-3">
                  <Sparkles className="text-pink-400 mt-1 flex-shrink-0" size={16} />
                  <span>Your beautiful smile that lights up my entire world</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="text-pink-400 mt-1 flex-shrink-0" size={16} />
                  <span>The way you make me laugh until my cheeks hurt</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="text-pink-400 mt-1 flex-shrink-0" size={16} />
                  <span>Your endless kindness and compassion for everyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="text-pink-400 mt-1 flex-shrink-0" size={16} />
                  <span>How you make ordinary moments feel magical</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="text-pink-400 mt-1 flex-shrink-0" size={16} />
                  <span>Your unwavering support and endless encouragement</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="text-pink-400 mt-1 flex-shrink-0" size={16} />
                  <span>The way you love me exactly as I am</span>
                </li>
              </ul>
            </div>

            <div className={`glass-effect rounded-2xl p-8 shadow-xl border border-white/30 hover-lift ${
              isVisible ? 'animate-slideInRight' : 'opacity-0'
            }`} style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-pink-500" size={28} />
                <h3 className="text-2xl font-bold text-rose-800 romantic-text">Our Future Dreams</h3>
              </div>
              <ul className="text-gray-700 space-y-3 elegant-text">
                <li className="flex items-start gap-3">
                  <Heart className="text-rose-400 mt-1 flex-shrink-0" size={16} fill="currentColor" />
                  <span>More adventures and travels around the world</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="text-rose-400 mt-1 flex-shrink-0" size={16} fill="currentColor" />
                  <span>Building our dream home filled with love and laughter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="text-rose-400 mt-1 flex-shrink-0" size={16} fill="currentColor" />
                  <span>Creating countless more beautiful memories together</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="text-rose-400 mt-1 flex-shrink-0" size={16} fill="currentColor" />
                  <span>Growing old and gray together, hand in hand</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="text-rose-400 mt-1 flex-shrink-0" size={16} fill="currentColor" />
                  <span>Celebrating many more anniversaries and milestones</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="text-rose-400 mt-1 flex-shrink-0" size={16} fill="currentColor" />
                  <span>Loving each other more deeply with each passing day</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveNotes;