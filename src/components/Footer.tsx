import React from 'react';
import { Heart, Calendar, MapPin, Star, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 text-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <Heart 
            key={i}
            className="absolute animate-float"
            size={20 + Math.random() * 30}
            fill="currentColor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center group">
            <div className="relative inline-block mb-6">
              <Heart className="mx-auto group-hover:scale-110 transition-transform duration-300" size={48} fill="currentColor" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="text-pink-200 animate-sparkle" size={20} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 romantic-text">Our Love</h3>
            <p className="opacity-90 leading-relaxed elegant-text">
              Five incredible years of building something beautiful together, 
              and this is just the beginning of our forever story. Every day with you is a gift.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative inline-block mb-6">
              <Calendar className="mx-auto group-hover:scale-110 transition-transform duration-300" size={48} />
              <div className="absolute -top-2 -right-2">
                <Star className="text-yellow-200 animate-sparkle" size={20} fill="currentColor" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 romantic-text">Anniversary</h3>
            <p className="opacity-90 leading-relaxed elegant-text">
              Celebrating 5 wonderful years of love, growth, and countless precious memories 
              since June 11, 2020. Here's to many more years of happiness together.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative inline-block mb-6">
              <MapPin className="mx-auto group-hover:scale-110 transition-transform duration-300" size={48} />
              <div className="absolute -top-2 -right-2">
                <Heart className="text-rose-200 animate-pulse" size={16} fill="currentColor" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 romantic-text">Our Journey</h3>
            <p className="opacity-90 leading-relaxed elegant-text">
              From that first hello in 2018 to this special milestone, every step has brought us 
              closer together. Our love story continues to unfold beautifully.
            </p>
          </div>
        </div>

        <div className="text-center border-t border-white/20 pt-12">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Heart className="text-pink-200 animate-heartbeat" size={32} fill="currentColor" />
              <h2 className="text-5xl font-bold romantic-text">Happy 5th Anniversary!</h2>
              <Heart className="text-pink-200 animate-heartbeat" size={32} fill="currentColor" />
            </div>
            <p className="text-2xl opacity-90 mb-4 elegant-text">
              To my incredible Man - thank you for five amazing years
            </p>
            <p className="text-lg opacity-80 elegant-text max-w-2xl mx-auto leading-relaxed">
              From knowing each other since 2018 to officially being together since June 11, 2020, 
              you've made every moment magical. I love you more than words can express.
            </p>
          </div>

          <div className="flex justify-center items-center gap-3 text-xl mb-8">
            <Heart className="text-pink-200 animate-pulse" size={24} fill="currentColor" />
            <span className="elegant-text">Made with endless love for our special day</span>
            <Heart className="text-pink-200 animate-pulse" size={24} fill="currentColor" />
          </div>

          {/* Timeline summary */}
          <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm elegant-text">
              <div className="flex items-center justify-center gap-2">
                <Star className="text-yellow-200" size={16} fill="currentColor" />
                <span>First conversation: 2018</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="text-rose-200" size={16} fill="currentColor" />
                <span>Together: June 11, 2020</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="text-pink-200" size={16} />
                <span>5 Years Strong: 2025</span>
              </div>
            </div>
          </div>

          <div className="text-sm opacity-75 elegant-text">
            <p>© 2025 • Our Beautiful Love Story • Forever & Always • Since 2019 💕</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;