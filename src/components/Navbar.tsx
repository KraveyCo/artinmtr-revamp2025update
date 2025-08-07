
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import FontSizeAdjuster from './FontSizeAdjuster';
import { useLanguage } from '@/hooks/use-language';

interface NavbarProps {
  alwaysDark?: boolean;
}

const Navbar = ({ alwaysDark = false }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { t } = useLanguage();
  
  // Track scroll position to add background only when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsDark(window.scrollY <= 450); // Assume hero section is about 450px tall
    };
    
    handleScroll(); // Initialize on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Check if we're on the Message from CEO page
  const isMessageFromCeo = location.pathname === '/message-from-ceo';
  
  return (
    <nav className={`fixed top-0 z-50 w-full px-4 py-3 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-white/80 border-b border-gray-200' 
        : 'bg-transparent border-b border-white/10'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 
            onClick={() => navigate('/')}
            className={`text-xl font-semibold cursor-pointer transition-colors ${
              (isDark && !isScrolled && !alwaysDark && !isMessageFromCeo) ? 'text-white' : 'text-gray-800'
            }`}
          >
            {t('Art in MTR')}
          </h1>
        </div>
        
        {/* Always visible navigation elements */}
        <div className="flex items-center space-x-4">
          <LanguageToggle isDark={(isDark && !isScrolled && !alwaysDark && !isMessageFromCeo)} />
          <FontSizeAdjuster isDark={(isDark && !isScrolled && !alwaysDark && !isMessageFromCeo)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
