import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  title: string;
  description?: string;
  className?: string;
  fallbackSrc?: string;
  aspectRatio?: 'video' | 'auto' | 'natural';
}

const Video: React.FC<VideoProps> = ({
  src,
  title,
  description,
  className,
  fallbackSrc,
  aspectRatio = 'video',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const aspectRatioClasses = {
    video: 'aspect-video',
    auto: 'aspect-auto',
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <div 
      className={cn('relative overflow-hidden', aspectRatioClasses[aspectRatio], className)}
      role="region"
      aria-label={title}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {error && fallbackSrc ? (
        <img
          src={fallbackSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
          controls
          playsInline
          loop
          onLoadedData={handleLoad}
          onError={handleError}
          aria-label={title}
          {...props}
        >
          <track kind="captions" src="" label="English" />
          {description && (
            <track kind="descriptions" src="" label="Description" />
          )}
        </video>
      )}
    </div>
  );
};

export default Video; 