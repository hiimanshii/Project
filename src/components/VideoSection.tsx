import React, { useEffect, useState } from 'react';
import { Play, Heart, Film, Camera } from 'lucide-react';

const videoList = [
  {
    title: 'Our Anniversary Video',
    desc: 'A heartfelt anniversary compilation',
    year: '2025',
    duration: '1:50',
    file: '11.mp4',
    thumbnail: 'start6.jpeg'
  },
  {
    title: 'Our Second Year Together',
    desc: 'Sweet moments from 2022',
    year: '2022',
    duration: '0:15',
    file: 'Celebration.mp4',
    thumbnail: 'start2.jpeg'
  },
  {
    title: 'Cherishing each moment',
    desc: 'Every moment with you is my favorite memory',
    year: '2023',
    duration: '0:39',
    file: 'memories.mp4',
    thumbnail: 'start3.jpeg'
  },
  {
    title: 'Lovely Moments',
    desc: 'Little things that meant everything',
    year: '2025',
    duration: '0:25',
    file: 'welove.mp4',
    thumbnail: 'start4.jpeg'
  },

];

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
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
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-rose-500" size={32} fill="currentColor" />
            <Film className="text-pink-500" size={40} />
            <Heart className="text-rose-500" size={32} fill="currentColor" />
          </div>
          <h2 className="text-6xl font-bold text-rose-800 mb-4 romantic-text">
            Our Love Story in Motion
          </h2>
          <p className="text-xl text-rose-600 max-w-2xl mx-auto elegant-text">
            The moments that words can't capture, but our hearts will never forget
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main Video */}
          <div className={`space-y-8 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-rose-500" size={28} fill="currentColor" />
                <h3 className="text-2xl font-bold text-rose-800 romantic-text">{currentVideo.title}</h3>
              </div>
              <p className="text-gray-700 mb-8 elegant-text leading-relaxed">{currentVideo.desc}</p>
              <div className="relative bg-black rounded-2xl overflow-hidden aspect-video shadow-2xl">
                <video
                  key={currentVideo.file}
                  src={`/Project/videos/${currentVideo.file}`}
                  controls
                  className="w-full h-full object-contain rounded-2xl bg-black"
                />

              </div>
            </div>
          </div>

          {/* Sidebar Playlist */}
          <div className={`space-y-6 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="flex items-center gap-3 mb-8">
                <Camera className="text-pink-500" size={28} />
                <h3 className="text-2xl font-bold text-rose-800 romantic-text">More Video Memories</h3>
              </div>

              <div className="space-y-6">
                {videoList.map((video, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentVideo(video)}
                    className={`flex items-center gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover-lift ${video.file === currentVideo.file
                        ? 'bg-rose-100 shadow-lg'
                        : 'glass-effect'
                      }`}
                  >
                    <div className="relative">
                      <div className="w-24 h-16 rounded-xl overflow-hidden shadow-lg border border-white/20 relative">
                        <img
                          src={`/Project/thumbnails/${video.thumbnail}`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <Play className="absolute inset-0 m-auto text-white opacity-80" size={20} />
                      </div>


                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                        <Heart className="text-white" size={12} fill="currentColor" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-rose-800 mb-1 elegant-text">{video.title}</h4>
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

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <Heart className="mx-auto mb-4 animate-heartbeat" size={40} fill="currentColor" />
              <p className="text-xl font-semibold mb-3 romantic-text">Our Moments</p>
              <p className="text-sm opacity-90 elegant-text leading-relaxed">
                " I still get butterflies, even after all this time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
