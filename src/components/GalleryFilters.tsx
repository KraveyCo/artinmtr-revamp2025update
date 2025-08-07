import React, { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { mtrLines, stations } from '@/data/artworks';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Filter, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface GalleryFiltersProps {
  selectedLine: string | null;
  setSelectedLine: (line: string | null) => void;
  selectedStation: string | null;
  setSelectedStation: (station: string | null) => void;
}

const GalleryFilters = ({
  selectedLine,
  setSelectedLine,
  selectedStation,
  setSelectedStation,
}: GalleryFiltersProps) => {
  const { t, currentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const filteredStations = selectedLine 
    ? stations.filter(station => station.line === selectedLine) 
    : stations;
  
  const handleLineChange = (lineId: string) => {
    if (selectedLine === lineId) {
      setSelectedLine(null);
    } else {
      setSelectedLine(lineId);
      setSelectedStation(null); // Reset station when changing line
    }
  };
  
  const handleStationChange = (stationId: string) => {
    if (selectedStation === stationId) {
      setSelectedStation(null);
    } else {
      setSelectedStation(stationId);
    }
  };

  const hasActiveFilters = selectedLine || selectedStation;

  const applyFilters = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };
  
  const renderFilterContent = () => (
    <div className="space-y-4 max-h-full overflow-auto">
      <div className="flex justify-between items-center mb-2">
        {isMobile && (
          <button onClick={() => setIsOpen(false)} className="p-1">
            <X size={18} />
          </button>
        )}
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">{t('Browse by Line')}</h3>
        <div className="flex flex-wrap gap-2">
          {mtrLines.map(line => (
            <button
              key={line.id}
              onClick={() => handleLineChange(line.id)}
              className={`py-1 px-3 rounded-full text-xs transition-colors ${
                selectedLine === line.id
                  ? 'text-white'
                  : 'text-gray-700 bg-gray-100/80'
              }`}
              style={selectedLine === line.id ? { backgroundColor: line.color } : {}}
            >
              {line.name[currentLanguage as 'en' | 'tc']}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">{t('Browse by Station')}</h3>
        <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
          {filteredStations.map(station => (
            <button
              key={station.id}
              onClick={() => handleStationChange(station.id)}
              className={`py-1 px-3 rounded-full text-xs transition-colors ${
                selectedStation === station.id
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-700 bg-gray-100/80'
              }`}
            >
              {station.name[currentLanguage as 'en' | 'tc']}
            </button>
          ))}
        </div>
      </div>
      
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full p-4 space-y-2 bg-white/80 backdrop-blur-xl border-t">
          <Button 
            variant="default"
            onClick={applyFilters}
            className="w-full"
          >
            {t('Apply Filters')}
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => {
              setSelectedLine(null);
              setSelectedStation(null);
              setIsOpen(false);
            }}
            className="w-full"
            disabled={!selectedLine && !selectedStation}
          >
            {t('Clear Filters')}
          </Button>
        </div>
      )}
      
      {!isMobile && (
        <div className="flex flex-col gap-2">
          <Button 
            variant="outline"
            onClick={() => {
              setSelectedLine(null);
              setSelectedStation(null);
            }}
            className="w-full"
            disabled={!selectedLine && !selectedStation}
          >
            {t('Clear Filters')}
          </Button>
        </div>
      )}
    </div>
  );
  
  return (
    <>
      {isMobile ? (
        <>
          <button 
            className={`p-2 rounded-full ${hasActiveFilters ? 'text-primary' : ''}`}
            onClick={() => setIsOpen(true)}
          >
            <Filter size={18} />
          </button>
          
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-xl p-4 overflow-auto pb-32">
              {renderFilterContent()}
            </div>
          )}
        </>
      ) : (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <button className={`h-10 w-10 flex items-center justify-center rounded-lg glass ${hasActiveFilters ? 'text-primary' : ''}`}>
              <Filter size={18} />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[577px] p-4 backdrop-blur-xl bg-white/80" align="end">
            {renderFilterContent()}
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

export default GalleryFilters;
