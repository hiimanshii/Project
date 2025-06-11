import React, { useEffect, useState } from 'react';
import { Heart, Calendar, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Calculate years together
  const anniversaryDate = new Date('2020-06-11');
  const currentDate = new Date();
  const yearsTogther = Math.floor((currentDate.getTime() - anniversaryDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="text-rose-300 opacity-60\" size={12 + Math.random() * 16} />
            ) : i % 3 === 1 ? (
              <Sparkles className="text-pink-300 opacity-60" size={10 + Math.random() * 12} />
            ) : (
              <Star className="text-orange-300 opacity-60" size={8 + Math.random() * 10} />
            )}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated heart */}
          <div className={`mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="relative inline-block">
              <Heart 
                className="text-rose-400 mx-auto animate-heartbeat drop-shadow-lg" 
                size={64} 
                fill="currentColor"
              />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="text-pink-400 animate-sparkle" size={24} />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className={`mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight romantic-text">
              5 Years!
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32"></div>
              <Heart className="text-rose-400" size={20} fill="currentColor" />
              <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32"></div>
            </div>
            <p className="text-3xl md:text-4xl text-rose-700 font-light elegant-text mb-2">
              of Love, Laughter & Adventures
            </p>
            <p className="text-lg text-rose-600 elegant-text opacity-80">
              Since June 11, 2020 • Known each other since 2018
            </p>
          </div>

          {/* Anniversary card */}
          <div className={`mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/30 hover-lift max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Calendar className="text-rose-500" size={28} />
                <span className="text-xl text-rose-700 font-semibold elegant-text">
                  Celebrating Our Beautiful Journey
                </span>
                <Calendar className="text-rose-500" size={28} />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed elegant-text mb-6">
                June 11, 2020 — that’s the day we took a leap into love, and today marks five whole years of laughter, growth, late-night calls, and moments that have stitched us together. In a world full of fleeting attention, holding onto someone this long means everything.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-rose-600 elegant-text">
                <div className="flex items-center gap-2">
                  <Heart className="text-rose-400" size={16} fill="currentColor" />
                  <span>First Met: 2019</span>
                </div>
                <div className="w-px h-4 bg-rose-300"></div>
                <div className="flex items-center gap-2">
                  <Heart className="text-rose-400" size={16} fill="currentColor" />
                  <span>Together Since: June 11, 2020</span>
                </div>
                <div className="w-px h-4 bg-rose-300"></div>
                <div className="flex items-center gap-2">
                  <Heart className="text-rose-400" size={16} fill="currentColor" />
                  <span>{yearsTogther}+ Years Strong</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <button 
              className="bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-rose-500 hover:via-pink-600 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl elegant-text"
              onClick={() => {
                document.querySelector('#photo-gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center gap-2">
                Explore Our Love Story
                <Heart size={20} fill="currentColor" />
              </span>
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '1s' }}>
            <Heart className="text-rose-300 opacity-40" size={32} />
          </div>
          <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
            <Sparkles className="text-pink-300 opacity-40" size={28} />
          </div>
          <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <Star className="text-orange-300 opacity-40" size={24} />
          </div>
          <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
            <Heart className="text-rose-300 opacity-40" size={20} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;