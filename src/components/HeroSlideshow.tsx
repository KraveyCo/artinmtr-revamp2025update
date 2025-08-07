import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { artworks, stations } from '@/data/artworks';
import SlideshowProgress from './SlideshowProgress';
import { ArrowRight } from "lucide-react";
import { useLanguage } from '@/hooks/use-language';
import Image from '@/components/ui/image';

interface HeroSlideshowProps {
  artworks: typeof artworks;
}

const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ artworks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();
  const slideshowInterval = 5000; // 5 seconds
  
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artworks.length);
  };
  
  useEffect(() => {
    const interval = setInterval(goToNextSlide, slideshowInterval);
    return () => clearInterval(interval);
  }, [artworks.length]);
  
  // Get the current artwork
  const currentArtwork = artworks[currentIndex];
  
  // Find the station name based on the station ID
  const station = stations.find(s => s.id === currentArtwork.station);
  const stationName = station ? station.name[currentLanguage as 'en' | 'tc'] : '';
  
  return (
    <div className="relative w-full h-full">
      {artworks.map((artwork, index) => (
        <div
          key={artwork.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-full overflow-hidden flex items-center justify-center">
            {artwork.isVideo ? (
              <video
                src={artwork.videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={artwork.images[0] || 'https://images.pexels.com/photos/1234567/mtr-artwork-fallback.jpg'}
                alt={artwork.title[currentLanguage as 'en' | 'tc']}
                className="w-full h-full object-cover transition-transform duration-10000 ease-linear"
                aspectRatio="natural"
                artworkId={artwork.id}
                style={{ 
                  animation: index === currentIndex ? 'zoom 10s alternate-reverse ease-in-out infinite' : 'none'
                }}
              />
            )}
          </div>
          
          {/* Dark gradient overlay for better text readability */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
          ></div>
        </div>
      ))}
      
      <div className="absolute bottom-0 left-0 w-full">
        <SlideshowProgress 
          totalSlides={artworks.length} 
          currentSlide={currentIndex}
          interval={slideshowInterval}
          onComplete={goToNextSlide}
        />
      </div>
      
      <div className="absolute bottom-8 left-8 text-white">
        <div className="bg-white inline-block px-2 py-0.5 mb-2">
          <span className="text-xs font-bold text-gray-600">{t('FEATURED ARTWORK')}</span>
        </div>
        <div className="mb-1 text-sm font-bold opacity-80 text-[1.2rem]">
          {stationName}
        </div>
        <h2 className="text-[2.7rem] font-bold mb-6">
          {currentArtwork.title[currentLanguage as 'en' | 'tc']}
        </h2>
        <button
          className="flex items-center text-white group"
          onClick={() => navigate(`/artwork/${currentArtwork.id}`)}
        >
          <span>{t('Learn More')}</span>
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlideshow;
