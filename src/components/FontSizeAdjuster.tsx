
import React from 'react';
import { Type, Minus, Plus } from 'lucide-react';
import { useFontSize } from '@/hooks/use-font-size';
import { useLanguage } from '@/hooks/use-language';

interface FontSizeAdjusterProps {
  isDark?: boolean;
}

const FontSizeAdjuster = ({ isDark = false }: FontSizeAdjusterProps) => {
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();
  const { t } = useLanguage();
  
  const textColor = isDark ? 'text-white' : 'text-gray-600';
  const hoverBg = isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100';
  
  return (
    <div className="flex items-center">
      <Type size={16} className={`${textColor} mr-1`} />
      <button
        onClick={decreaseFontSize}
        className={`p-1 rounded-full ${hoverBg}`}
        aria-label={t('Decrease font size')}
      >
        <Minus size={14} className={textColor} />
      </button>
      <button 
        onClick={increaseFontSize}
        className={`p-1 rounded-full ${hoverBg}`}
        aria-label={t('Increase font size')}
      >
        <Plus size={14} className={textColor} />
      </button>
    </div>
  );
};

export default FontSizeAdjuster;
