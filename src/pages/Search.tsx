
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/use-language';
import { artworks, mtrLines, stations } from '@/data/artworks';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const { t, currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(artworks);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setSearchResults(artworks);
      return;
    }
    
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = artworks.filter(artwork => 
        artwork.title[currentLanguage as 'en' | 'tc'].toLowerCase().includes(query) ||
        artwork.artist[currentLanguage as 'en' | 'tc'].toLowerCase().includes(query) ||
        mtrLines.find(line => line.id === artwork.line)?.name[currentLanguage as 'en' | 'tc'].toLowerCase().includes(query) ||
        stations.find(station => station.id === artwork.station)?.name[currentLanguage as 'en' | 'tc'].toLowerCase().includes(query) ||
        artwork.description[currentLanguage as 'en' | 'tc'].toLowerCase().includes(query)
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };
  
  useEffect(() => {
    if (searchQuery === '') {
      setSearchResults(artworks);
    }
  }, [searchQuery]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">{t('Search Artworks')}</h1>
          
          <div className="glass p-6 rounded-xl mb-8">
            <div className="flex gap-2">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Search by artwork name, artist, line, or station')}
                className="flex-grow"
                onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button
                onClick={handleSearch}
                className="glass-button"
                disabled={isSearching}
              >
                <SearchIcon size={18} />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {isSearching ? (
              <div className="text-center py-8">
                <p>{t('Searching...')}</p>
              </div>
            ) : searchResults.length > 0 ? (
              searchResults.map((artwork) => (
                <div 
                  key={artwork.id}
                  className="glass p-4 rounded-lg flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => navigate(`/artwork/${artwork.id}`)}
                >
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <img 
                      src={artwork.images[0]} 
                      alt={artwork.title[currentLanguage as 'en' | 'tc']}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{artwork.title[currentLanguage as 'en' | 'tc']}</h3>
                    <p className="text-sm text-gray-600">{artwork.artist[currentLanguage as 'en' | 'tc']}</p>
                    <p className="text-xs text-gray-500">
                      {stations.find(s => s.id === artwork.station)?.name[currentLanguage as 'en' | 'tc']},
                      {' '}{mtrLines.find(l => l.id === artwork.line)?.name[currentLanguage as 'en' | 'tc']}
                    </p>
                  </div>
                </div>
              ))
            ) : searchQuery ? (
              <div className="text-center py-8">
                <p>{t('No artworks match your search')}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Search;
