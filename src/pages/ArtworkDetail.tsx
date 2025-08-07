import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/use-language';
import { artworks, mtrLines, stations } from '@/data/artworks';
import { ArrowLeft } from 'lucide-react';
import Image from '@/components/ui/image';
import Video from '@/components/ui/video';
import Head from '@/components/Head';
import { useInView } from 'react-intersection-observer';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([false, false, false, false]);
  
  // Find the artwork by ID
  const artwork = artworks.find(a => a.id === id);
  
  // Intersection observers for images
  const { ref: image1Ref, inView: image1InView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: image2Ref, inView: image2InView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: image3Ref, inView: image3InView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: image4Ref, inView: image4InView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Update visible images when they come into view
  useEffect(() => {
    if (image1InView) setVisibleImages(prev => [true, prev[1], prev[2], prev[3]]);
  }, [image1InView]);
  
  useEffect(() => {
    if (image2InView) setVisibleImages(prev => [prev[0], true, prev[2], prev[3]]);
  }, [image2InView]);
  
  useEffect(() => {
    if (image3InView) setVisibleImages(prev => [prev[0], prev[1], true, prev[3]]);
  }, [image3InView]);
  
  useEffect(() => {
    if (image4InView) setVisibleImages(prev => [prev[0], prev[1], prev[2], true]);
  }, [image4InView]);
  
  if (!artwork) {
    return (
      <>
        <Head 
          title={t('Artwork not found')}
          description={t('The requested artwork could not be found.')}
        />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">{t('Artwork not found')}</h1>
            <button 
              onClick={() => navigate('/')} 
              className="text-primary flex items-center gap-1 mx-auto group"
              aria-label={t('Back to Home')}
            >
              <span>{t('Back to Home')}</span>
              <ArrowLeft size={16} className="ml-1 group-hover:-translate-x-1 transition-transform duration-200" />
            </button>
          </div>
          <Footer />
        </div>
      </>
    );
  }
  
  const line = mtrLines.find(l => l.id === artwork.line);
  const station = stations.find(s => s.id === artwork.station);
  
  // Use only the actual images without duplicating
  const displayImages = artwork.images;
  
  return (
    <>
      <Head 
        title={artwork.title[currentLanguage as 'en' | 'tc']}
        description={artwork.description[currentLanguage as 'en' | 'tc']}
        image={artwork.images[0]}
        type="article"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar alwaysDark={true} />
        
        <div className="container mx-auto px-4 py-8 pt-24 max-w-5xl">
          <button 
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 hover:text-gray-600 transition-colors group"
            aria-label={t('Back to Gallery')}
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" /> 
            {t('Back to Gallery')}
          </button>
          
          {/* Main Featured Image */}
          <div className="mb-8 w-full h-[50vh] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
            {artwork.isVideo && artwork.id !== 'a1' ? (
              <Video 
                src={artwork.videoUrl}
                title={artwork.title[currentLanguage as 'en' | 'tc']}
                description={artwork.description[currentLanguage as 'en' | 'tc']}
                className="w-full h-full object-contain rounded-xl shadow-lg"
              />
            ) : (
              <Image
                src={displayImages[0]}
                alt={artwork.title[currentLanguage as 'en' | 'tc']}
                className="w-full h-full object-contain rounded-xl shadow-lg"
                aspectRatio="auto"
                artworkId={artwork.id}
              />
            )}
          </div>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Artwork Information */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-3 space-y-4">
                <h1 className="text-3xl font-bold">{artwork.title[currentLanguage as 'en' | 'tc']}</h1>
                
                <p className="font-bold">{artwork.artist[currentLanguage as 'en' | 'tc']}</p>
                
                <div>
                  <p>{artwork.description[currentLanguage as 'en' | 'tc']}</p>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-700">{t('Location')}</h2>
                  <p className="text-base">
                    {station?.name[currentLanguage as 'en' | 'tc']}
                  </p>
                </div>
                
                <div>
                  <h2 className="text-lg font-bold text-gray-700">{t('Completion Date')}</h2>
                  <p className="text-base">{artwork.year}</p>
                </div>
              </div>
            </div>
            
            {/* Four Images Below Information */}
            {(!artwork.isVideo || artwork.id === 'a1') && (
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {/* Video for Urban Flow */}
                {artwork.id === 'a1' && artwork.isVideo && (
                  <div 
                    ref={image1Ref}
                    className={`transition-all duration-1000 transform ${
                      visibleImages[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <Video 
                      src={artwork.videoUrl}
                      title={artwork.title[currentLanguage as 'en' | 'tc']}
                      description={artwork.description[currentLanguage as 'en' | 'tc']}
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                )}
                
                {/* Image 1 (skip for Urban Flow since we're showing video instead) */}
                {displayImages[1] && artwork.id !== 'a1' && (
                  <div 
                    ref={image1Ref}
                    className={`transition-all duration-1000 transform ${
                      visibleImages[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <Image
                      src={displayImages[1]}
                      alt={`${artwork.title[currentLanguage as 'en' | 'tc']} - 1`}
                      className="w-full rounded-xl shadow-lg"
                      aspectRatio="natural"
                      artworkId={artwork.id}
                    />
                  </div>
                )}
                
                {/* Image 2 */}
                {displayImages[2] && (
                  <div 
                    ref={image2Ref}
                    className={`transition-all duration-1000 transform ${
                      visibleImages[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <Image
                      src={displayImages[2]}
                      alt={`${artwork.title[currentLanguage as 'en' | 'tc']} - 2`}
                      className="w-full rounded-xl shadow-lg"
                      aspectRatio="natural"
                      artworkId={artwork.id}
                    />
                  </div>
                )}
                
                {/* Image 3 */}
                {displayImages[3] && (
                  <div 
                    ref={image3Ref}
                    className={`transition-all duration-1000 transform ${
                      visibleImages[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <Image
                      src={displayImages[3]}
                      alt={`${artwork.title[currentLanguage as 'en' | 'tc']} - 3`}
                      className="w-full rounded-xl shadow-lg"
                      aspectRatio="natural"
                      artworkId={artwork.id}
                    />
                  </div>
                )}
                
                {/* Image 4 */}
                {displayImages[4] && (
                  <div 
                    ref={image4Ref}
                    className={`transition-all duration-1000 transform ${
                      visibleImages[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <Image
                      src={displayImages[4]}
                      alt={`${artwork.title[currentLanguage as 'en' | 'tc']} - 4`}
                      className="w-full rounded-xl shadow-lg"
                      aspectRatio="natural"
                      artworkId={artwork.id}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default ArtworkDetail;
