import React, { useEffect, useState } from 'react';
import { Heart, MapPin, Calendar, Star, Users, Home, Plane, Gift } from 'lucide-react';

const Timeline = () => {
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

    const element = document.getElementById('timeline');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: '2018',
      title: 'We First Met',
      description: 'The universe conspired to bring us together. From the moment our eyes met, we knew something magical was beginning.',
      icon: Users,
      color: 'bg-gradient-to-r from-rose-400 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50'
    },
    {
      year: 'June 11, 2020',
      title: 'Our Love Story Begins',
      description: 'The day we made it official! Our first date turned into the beginning of our beautiful journey together.',
      icon: Heart,
      color: 'bg-gradient-to-r from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      year: '2020',
      title: 'First "I Love You"',
      description: 'Under a canopy of stars, we whispered those three magical words that changed everything forever.',
      icon: Star,
      color: 'bg-gradient-to-r from-rose-500 to-orange-400',
      bgColor: 'from-rose-50 to-orange-50'
    },
    {
      year: '2021',
      title: 'Moving In Together',
      description: 'We created our first home together, where every corner holds a piece of our love and every room echoes with laughter.',
      icon: Home,
      color: 'bg-gradient-to-r from-orange-400 to-pink-400',
      bgColor: 'from-orange-50 to-pink-50'
    },
    {
      year: '2022',
      title: 'Our First Big Adventure',
      description: 'Exploring new places hand in hand, creating memories that would become the foundation of our shared dreams.',
      icon: Plane,
      color: 'bg-gradient-to-r from-pink-400 to-rose-400',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      year: '2023',
      title: 'Growing Stronger Together',
      description: 'Through every challenge and celebration, we discovered that together we can weather any storm and reach any height.',
      icon: Heart,
      color: 'bg-gradient-to-r from-rose-400 to-pink-600',
      bgColor: 'from-rose-50 to-pink-50'
    },
    {
      year: '2024',
      title: '5 Years of Pure Love!',
      description: 'Here we are, celebrating five incredible years of love, growth, and endless adventures. This is just the beginning of our forever.',
      icon: Gift,
      color: 'bg-gradient-to-r from-pink-600 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-rose-50 via-pink-50 to-orange-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-rose-500" size={32} fill="currentColor" />
            <Calendar className="text-pink-500" size={40} />
            <Heart className="text-rose-500" size={32} fill="currentColor" />
          </div>
          <h2 className="text-6xl font-bold text-rose-800 mb-4 romantic-text">
            Our Love Timeline
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32"></div>
            <Heart className="text-rose-400" size={16} fill="currentColor" />
            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32"></div>
          </div>
          <p className="text-xl text-rose-600 max-w-2xl mx-auto elegant-text">
            Every milestone is a chapter in our beautiful love story, from 2018 to forever
          </p>
        </div>

        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-300 via-pink-400 to-orange-400 rounded-full shadow-lg"></div>

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`relative flex items-center mb-16 ${isEven ? 'justify-start' : 'justify-end'}`}>
                {/* Enhanced timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-20 h-20 ${milestone.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  {/* Pulse effect */}
                  <div className={`absolute inset-0 w-20 h-20 ${milestone.color} rounded-full animate-ping opacity-20`}></div>
                </div>

                {/* Enhanced content card */}
                <div className={`w-5/12 ${isEven ? 'pr-12' : 'pl-12'}`}>
                  <div className={`glass-effect rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover-lift ${
                    isVisible ? (isEven ? 'animate-slideInLeft' : 'animate-slideInRight') : 'opacity-0'
                  }`} style={{ animationDelay: `${index * 0.2}s` }}>
                    
                    {/* Year badge */}
                    <div className={`inline-block px-6 py-3 ${milestone.color} text-white rounded-full text-sm font-bold mb-4 shadow-lg`}>
                      {milestone.year}
                    </div>
                    
                    {/* Content */}
                    <h3 className={`text-2xl font-bold text-rose-800 mb-4 romantic-text ${isEven ? 'text-right' : 'text-left'}`}>
                      {milestone.title}
                    </h3>
                    <p className={`text-gray-700 leading-relaxed elegant-text ${isEven ? 'text-right' : 'text-left'}`}>
                      {milestone.description}
                    </p>

                    {/* Decorative hearts */}
                    <div className={`flex gap-2 mt-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      {[...Array(3)].map((_, i) => (
                        <Heart 
                          key={i} 
                          className="text-rose-300 animate-pulse" 
                          size={12} 
                          fill="currentColor"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced final message */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
          <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 text-white py-12 px-16 rounded-3xl shadow-2xl inline-block relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(6)].map((_, i) => (
                <Heart 
                  key={i}
                  className="absolute animate-float"
                  size={40}
                  fill="currentColor"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + (i % 2) * 60}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <Heart className="mx-auto mb-6 animate-heartbeat" size={56} fill="currentColor" />
              <h3 className="text-4xl font-bold mb-4 romantic-text">Here's to Forever</h3>
              <p className="text-xl opacity-90 elegant-text mb-4">
                Five beautiful years down, a lifetime of love to go
              </p>
              <div className="flex items-center justify-center gap-2 text-lg elegant-text">
                <Star className="animate-sparkle" size={20} fill="currentColor" />
                <span>Our love story continues...</span>
                <Star className="animate-sparkle" size={20} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;