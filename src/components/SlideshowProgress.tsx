
import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";

interface SlideshowProgressProps {
  totalSlides: number;
  currentSlide: number;
  interval: number;
  onComplete?: () => void;
}

const SlideshowProgress: React.FC<SlideshowProgressProps> = ({ 
  totalSlides, 
  currentSlide, 
  interval,
  onComplete
}) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Reset progress when slide changes
    setProgress(0);
    
    // Increment progress over the duration of the interval
    const stepTime = 50; // Update every 50ms for smooth animation
    const stepIncrement = (stepTime / interval) * 100;
    
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + stepIncrement;
        if (newProgress >= 100) {
          if (onComplete) onComplete();
          return 0;
        }
        return newProgress;
      });
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [currentSlide, interval, onComplete]);
  
  return (
    <div className="w-full">
      <Progress value={progress} className="h-1 bg-white/20 rounded-none" indicatorClassName="bg-gray-400" />
    </div>
  );
};

export default SlideshowProgress;
