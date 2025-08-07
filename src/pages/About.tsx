
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/use-language';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">{t('About Art in MTR')}</h1>
          
          <div className="glass p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('Our Mission')}</h2>
            <p className="mb-4">
              The Art in MTR initiative aims to enhance passengers' journeys by incorporating art into the transit environment, 
              creating a cultural experience that extends beyond mere transportation.
            </p>
            <p>
              By showcasing works from local and international artists, we transform public spaces into galleries accessible 
              to millions of daily commuters, promoting art appreciation and cultural exchange throughout Hong Kong.
            </p>
          </div>
          
          <div className="glass p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('Program History')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">1998</h3>
                <p>Launch of the Art in MTR initiative with the first permanent installations.</p>
              </div>
              <div>
                <h3 className="font-medium">2003</h3>
                <p>Expansion of the program to include rotating exhibitions and community art projects.</p>
              </div>
              <div>
                <h3 className="font-medium">2008</h3>
                <p>Introduction of the "Art in Station Architecture" concept, integrating artwork directly into station design.</p>
              </div>
              <div>
                <h3 className="font-medium">2015</h3>
                <p>Partnership program with local art schools to showcase emerging talents.</p>
              </div>
              <div>
                <h3 className="font-medium">2020</h3>
                <p>Launch of digital art initiatives and interactive installations across the network.</p>
              </div>
            </div>
          </div>
          
          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">{t('Selection Process')}</h2>
            <p className="mb-4">
              Artworks for MTR stations are carefully selected through a rigorous process involving art consultants, 
              community representatives, and MTR management. 
            </p>
            <p className="mb-4">
              Considerations include:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Cultural relevance to the station's neighborhood</li>
              <li>Artistic merit and innovation</li>
              <li>Durability and maintenance requirements</li>
              <li>Passenger experience and visual impact</li>
              <li>Integration with station architecture</li>
            </ul>
            <p>
              This process ensures that each artwork not only beautifies the space but also creates meaningful 
              connections with passengers and local communities.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
