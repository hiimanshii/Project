import React, { useEffect, useState } from 'react';
import { Play, Heart, Upload, Film, Camera } from 'lucide-react';

const VideoSection = () => {
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

    const element = document.getElementById('video-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="video-section" className="py-20 bg-gradient-to-r from-pink-100 via-rose-100 to-orange-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-rose-500" size={32} fill="currentColor" />
            <Film className="text-pink-500" size={40} />
            <Heart className="text-rose-500" size={32} fill="currentColor" />
          </div>
          <h2 className="text-6xl font-bold text-rose-800 mb-4 romantic-text">
            Our Love Story in Motion
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32"></div>
            <Heart className="text-rose-400" size={16} fill="currentColor" />
            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1 max-w-32"></div>
          </div>
          <p className="text-xl text-rose-600 max-w-2xl mx-auto elegant-text">
            The moments that words can't capture, but our hearts will never forget
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main video section */}
          <div className={`space-y-8 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/30 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-rose-500" size={28} fill="currentColor" />
                <h3 className="text-2xl font-bold text-rose-800 romantic-text">Our Anniversary Video</h3>
              </div>
              <p className="text-gray-700 mb-8 elegant-text leading-relaxed">
                Our special anniversary compilation - five years of love, laughter, and unforgettable moments 
                captured in this heartfelt video montage celebrating our beautiful journey together from 2018 to now.
              </p>
              
              {/* Enhanced video placeholder */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden aspect-video shadow-2xl group cursor-pointer hover-lift">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white relative z-10">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="ml-1" size={32} fill="currentColor" />
                      </div>
                      <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <p className="text-xl font-semibold mb-2 elegant-text">Upload Your Special Video</p>
                    <p className="text-sm opacity-75 elegant-text">Replace this placeholder with your anniversary video</p>
                  </div>
                </div>
                
                {/* Decorative hearts */}
                <div className="absolute top-4 left-4">
                  <Heart className="text-rose-400 animate-pulse" size={20} fill="currentColor" />
                </div>
                <div className="absolute top-4 right-4">
                  <Heart className="text-pink-400 animate-pulse" size={20} fill="currentColor" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Heart className="text-orange-400 animate-pulse" size={16} fill="currentColor" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <Heart className="text-rose-400 animate-pulse" size={16} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Upload instructions */}
            <div className="glass-effect rounded-2xl p-6 shadow-lg border border-white/30">
              <div className="flex items-center gap-3 mb-4">
                <Upload className="text-pink-500" size={24} />
                <h4 className="text-lg font-semibold text-rose-800 elegant-text">Video Upload Guidelines</h4>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm elegant-text">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Replace the placeholder with your actual anniversary video</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Supported formats: MP4, WebM, MOV for best compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Recommended resolution: 1920x1080 or higher for crisp quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>Keep file size under 50MB for optimal loading performance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Video collection sidebar */}
          <div className={`space-y-6 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="flex items-center gap-3 mb-8">
                <Camera className="text-pink-500" size={28} />
                <h3 className="text-2xl font-bold text-rose-800 romantic-text">More Video Memories</h3>
              </div>
              
              {/* Video collection */}
              <div className="space-y-6">
                {[
                  { 
                    title: "Our First Year Together", 
                    desc: "Sweet moments from 2020",
                    year: "2020",
                    duration: "3:45"
                  },
                  { 
                    title: "Travel Adventures", 
                    desc: "Places we've explored together",
                    year: "2021-2022",
                    duration: "5:20"
                  },
                  { 
                    title: "Daily Life Moments", 
                    desc: "The little things that mean everything",
                    year: "2023",
                    duration: "2:30"
                  },
                  { 
                    title: "Special Celebrations", 
                    desc: "Birthdays, holidays, and milestones",
                    year: "2024",
                    duration: "4:15"
                  }
                ].map((video, index) => (
                  <div key={index} className="flex items-center gap-6 p-6 glass-effect rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer hover-lift group">
                    <div className="relative">
                      <div className="w-24 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Play className="text-white group-hover:scale-110 transition-transform duration-300" size={20} />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                        <Heart className="text-white" size={12} fill="currentColor" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-rose-800 mb-1 elegant-text group-hover:text-rose-600 transition-colors duration-300">
                        {video.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1 elegant-text">{video.desc}</p>
                      <div className="flex items-center gap-3 text-xs text-rose-500 elegant-text">
                        <span>{video.year}</span>
                        <span>•</span>
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(5)].map((_, i) => (
                  <Heart 
                    key={i}
                    className="absolute animate-float"
                    size={30}
                    fill="currentColor"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + (i % 2) * 60}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <Heart className="mx-auto mb-4 animate-heartbeat" size={40} fill="currentColor" />
                <p className="text-xl font-semibold mb-3 romantic-text">Video Collection</p>
                <p className="text-sm opacity-90 elegant-text leading-relaxed">
                  Upload your favorite videos to create a beautiful gallery of memories that tells 
                  the story of our incredible journey together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;