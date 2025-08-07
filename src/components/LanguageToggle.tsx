
import React from 'react';
import { useLanguage } from '@/hooks/use-language';

interface LanguageToggleProps {
  isDark?: boolean;
}

const LanguageToggle = ({ isDark = false }: LanguageToggleProps) => {
  const { currentLanguage, toggleLanguage } = useLanguage();
  
  return (
    <button 
      onClick={toggleLanguage}
      className={`flex items-center hover:bg-gray-100/30 p-2 rounded-full transition-colors ${
        isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'
      }`}
    >
      <span className="text-xs font-semibold">{currentLanguage === 'en' ? 'EN' : '繁'}</span>
    </button>
  );
};

export default LanguageToggle;
