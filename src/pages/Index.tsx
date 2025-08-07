import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/hooks/use-language';
import { artworks, mtrLines, stations } from '@/data/artworks';
import HeroSlideshow from '@/components/HeroSlideshow';
import Footer from '@/components/Footer';
import GalleryFilters from '@/components/GalleryFilters';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from '@/components/ui/image';
import Head from '@/components/Head';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const { t, currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const featuredArtworks = useMemo(() => {
    // Get the Urban Flow artwork
    const urbanFlow = artworks.find(artwork => artwork.title.en === 'Urban Flow');
    
    // Get other featured artworks (excluding Urban Flow)
    const otherFeatured = artworks.filter(artwork => 
      artwork.featured && artwork.title.en !== 'Urban Flow'
    );
    
    // Combine Urban Flow with up to 2 other featured artworks
    return urbanFlow 
      ? [urbanFlow, ...otherFeatured.slice(0, 2)]
      : otherFeatured.slice(0, 3);
  }, []);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Gallery state
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  const [selectedLine, setSelectedLine] = useState<string | null>(null);
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Intersection observer for gallery items
  const { ref: galleryRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Mouse move handler for background effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  // Filter artworks based on line, station and search query
  useEffect(() => {
    let filtered = [...artworks];
    
    if (selectedLine) {
      filtered = filtered.filter(artwork => artwork.line === selectedLine);
    }
    
    if (selectedStation) {
      filtered = filtered.filter(artwork => artwork.station === selectedStation);
    }
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(artwork => 
        artwork.title[currentLanguage as 'en' | 'tc'].toLowerCase().includes(query) ||
        artwork.artist[currentLanguage as 'en' | 'tc'].toLowerCase().includes(query) ||
        mtrLines.find(line => line.id === artwork.line)?.name[currentLanguage as 'en' | 'tc'].toLowerCase().includes(query) ||
        stations.find(station => station.id === artwork.station)?.name[currentLanguage as 'en' | 'tc'].toLowerCase().includes(query)
      );
    }
    
    setFilteredArtworks(filtered);
  }, [selectedLine, selectedStation, searchQuery, currentLanguage]);
  
  return (
    <>
      <Head 
        title={t('Home')}
        description={t('Explore the art installations across Hong Kong MTR stations.')}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section with Slideshow */}
        <section className="relative w-full h-[70vh] overflow-hidden">
          <HeroSlideshow artworks={featuredArtworks} />
        </section>
        
        {/* Introduction Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="https://www.mtr.com.hk/ch/customer/images/community/logo_artinmtr.jpg"
                alt="MTR Art in MTR Logo"
                className="max-w-full h-auto"
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="mb-4">
                {t('Welcome to Art in MTR, a pioneering initiative that transforms Hong Kong\'s metro stations into vibrant galleries. Since its inception, this program has been dedicated to making art accessible to millions of daily commuters, enriching their journey with cultural experiences.')}
              </p>
              <p className="mb-4">
                {t('Our collection features over 60 permanent art installations across various MTR stations, showcasing works from both local and international artists. These pieces reflect Hong Kong\'s unique cultural heritage, contemporary life, and the dynamic spirit of our city.')}
              </p>
              <p className="mb-6">
                {t('Through this digital platform, we invite you to explore these artistic treasures, learn about the artists behind them, and discover the stories that make each installation unique. Whether you\'re a daily commuter or an art enthusiast, there\'s always something new to discover in Hong Kong\'s underground art gallery.')}
              </p>
              <Button 
                variant="outline" 
                onClick={() => navigate('/message-from-ceo')}
                className="bg-gray-200 text-gray-700 hover:bg-transparent hover:text-gray-700 hover:border-gray-700 flex items-center gap-1 group"
              >
                {t('Message from the CEO')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section 
          ref={galleryRef}
          className="py-12 px-4 bg-gray-100"
        >
          <div className="container mx-auto max-w-7xl">
            {/* Search and Filters */}
            <div className="mb-8 flex items-center gap-2 max-w-xl mx-auto">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('Search Artworks')}
                  className="glass w-full py-2 px-4 pl-10 rounded-lg focus:outline-none h-10"
                  aria-label={t('Search Artworks')}
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
              </div>
              <GalleryFilters 
                selectedLine={selectedLine}
                setSelectedLine={setSelectedLine}
                selectedStation={selectedStation}
                setSelectedStation={setSelectedStation}
              />
            </div>
            
            {/* Pinterest-style Masonry Grid */}
            <div className="masonry-grid">
              {filteredArtworks.length > 0 ? (
                filteredArtworks.map((artwork, index) => (
                  <div
                    key={artwork.id}
                    className={`transition-all duration-500 ease-out ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${(index % 10) * 50}ms` }}
                    onClick={() => navigate(`/artwork/${artwork.id}`)}
                  >
                    <div className="artwork-card">
                      {artwork.isVideo ? (
                        <video
                          src={artwork.videoUrl}
                          muted
                          autoPlay
                          loop
                          playsInline
                          className="w-full object-cover"
                          aria-label={artwork.title[currentLanguage as 'en' | 'tc']}
                        />
                      ) : (
                        <Image 
                          src={artwork.images[0]}
                          alt={artwork.title[currentLanguage as 'en' | 'tc']}
                          className="w-full object-cover"
                        />
                      )}
                      
                      {/* Hover overlay */}
                      <div className="overlay">
                        <h3 className="font-semibold text-white text-lg mb-1 line-clamp-1">
                          {artwork.title[currentLanguage as 'en' | 'tc']}
                        </h3>
                        <p className="text-sm text-white/90 mb-2 line-clamp-1">
                          {artwork.artist[currentLanguage as 'en' | 'tc']}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">{t('No artworks found')}</p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
