import React, { useEffect } from 'react';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import VideoSection from './components/VideoSection';
import Timeline from './components/Timeline';
import LoveNotes from './components/LoveNotes';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = '5 Years of Love - Happy Anniversary! 💕';
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50">
      <Hero />
      <PhotoGallery />
      <VideoSection />
      <Timeline />
      <LoveNotes />
      <Footer />
    </div>
  );
}

export default App;