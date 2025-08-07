import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  aspectRatio?: 'square' | 'video' | 'auto' | 'natural';
  artworkId?: string;
}

// Default fallback image
const DEFAULT_FALLBACK_IMAGE = 'https://images.pexels.com/photos/1234567/mtr-artwork-fallback.jpg';

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  fallbackSrc,
  aspectRatio = 'natural',
  artworkId,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [naturalAspectRatio, setNaturalAspectRatio] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const aspectRatioClasses = {
    video: 'aspect-video',
    auto: 'aspect-auto',
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    
    // Always calculate natural aspect ratio
    const img = e.target as HTMLImageElement;
    const ratio = img.naturalWidth / img.naturalHeight;
    setNaturalAspectRatio(ratio);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  const getFallbackImage = () => {
    if (fallbackSrc) return fallbackSrc;
    return DEFAULT_FALLBACK_IMAGE;
  };

  useEffect(() => {
    if (naturalAspectRatio && containerRef.current) {
      containerRef.current.style.paddingBottom = `${(1 / naturalAspectRatio) * 100}%`;
    }
  }, [naturalAspectRatio]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        'relative overflow-hidden', 
        aspectRatio !== 'natural' ? aspectRatioClasses[aspectRatio] : '',
        className
      )}
      style={naturalAspectRatio ? { paddingBottom: `${(1 / naturalAspectRatio) * 100}%` } : undefined}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={error ? getFallbackImage() : src}
        alt={alt}
        className={cn(
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default Image; 