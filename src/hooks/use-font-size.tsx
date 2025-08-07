
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSizeType = 'sm' | 'md' | 'lg';

type FontSizeContextType = {
  fontSize: FontSizeType;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
};

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState<FontSizeType>('md');

  // Apply the font size to the body element
  useEffect(() => {
    document.body.classList.remove('font-size-sm', 'font-size-md', 'font-size-lg');
    document.body.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize(prev => {
      if (prev === 'sm') return 'md';
      if (prev === 'md') return 'lg';
      return prev;
    });
  };

  const decreaseFontSize = () => {
    setFontSize(prev => {
      if (prev === 'lg') return 'md';
      if (prev === 'md') return 'sm';
      return prev;
    });
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextType => {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};
