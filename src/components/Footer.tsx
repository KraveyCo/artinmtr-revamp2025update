import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/use-language';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="glass mt-auto py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">{t('Art in MTR')}</h3>
            <p className="text-sm text-gray-600 text-[0.64rem]">
              {t('Explore the art in Hong Kong\'s MTR stations – a unique underground gallery showcasing local and international artists. Each piece connects culture, history and daily commuter life.')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">{t('Quick Links')}</h3>
            <ul className="space-y-2 text-[0.64rem]">
              <li>
                <Link to="/" className="hover:underline">{t('Home')}</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:underline">{t('Gallery')}</Link>
              </li>
              <li>
                <Link to="/message-from-ceo" className="hover:underline">{t('Message from the CEO')}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">{t('Contact')}</h3>
            <p className="text-[0.64rem] text-gray-600">
              {t('MTR Corporation Limited')}<br />
              {t('MTR Headquarters Building')}<br />
              {t('Telford Plaza, Kowloon Bay')}<br />
              {t('Hong Kong')}
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center text-[0.64rem] text-gray-600">
          <p>&copy; {new Date().getFullYear()} Art in MTR. {t('© 2023 Art in MTR. All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
