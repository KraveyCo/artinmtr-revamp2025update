
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/use-language';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MessageFromCeo = () => {
  const { t, currentLanguage } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar alwaysDark={true} />
      
      <div className="container mx-auto px-4 py-8 max-w-3xl pt-24">
        <button 
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 hover:text-gray-600 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" /> {t('Back to Home')}
        </button>
        
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="CEO Portrait"
            className="w-full max-w-md mx-auto h-auto rounded-xl shadow-lg"
          />
        </div>
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          {currentLanguage === 'en' ? 'Message from the CEO' : 'CEO 的訊息'}
        </h1>
        
        <div className="prose max-w-none">
          {currentLanguage === 'en' ? (
            <>
              <p className="mb-4">
                Dear visitors and art enthusiasts,
              </p>
              <p className="mb-4">
                It is with great pride that I welcome you to the Art in MTR program, a pioneering initiative that has transformed our transit system into one of Hong Kong's most accessible art galleries.
              </p>
              <p className="mb-4">
                Since our program's inception in 1998, we have installed over 70 permanent artworks across our network, bringing art directly to the millions of passengers who use our services daily. This commitment to incorporating cultural experiences into public transportation reflects our belief that art should be part of everyday life, not isolated within traditional gallery walls.
              </p>
              <p className="mb-4">
                Our curated collection spans diverse media and styles, from traditional sculptures and paintings to cutting-edge digital installations. Each piece is carefully selected to reflect Hong Kong's unique cultural identity while enhancing the commuting experience for our passengers.
              </p>
              <p className="mb-4">
                The artworks you see throughout our stations are not merely decorative elements – they are thoughtful reflections of the communities they serve, creating distinct identities for each station while fostering a sense of place and belonging.
              </p>
              <p className="mb-4">
                We continue to expand this program, collaborating with local and international artists to enrich public spaces and make art accessible to all. I invite you to explore these installations during your journeys, to pause – even briefly – and let these works inspire moments of contemplation within your daily routine.
              </p>
              <p className="mb-4">
                Thank you for your interest in Art in MTR. We hope these artworks enhance your travel experience and contribute to Hong Kong's vibrant cultural landscape.
              </p>
              <p className="mt-8 text-right">
                <strong>John Wei</strong><br />
                Chief Executive Officer<br />
                MTR Corporation
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                親愛的訪客和藝術愛好者，
              </p>
              <p className="mb-4">
                我非常自豪地歡迎您參與「港鐵藝術」計劃，這項開創性的倡議將我們的交通系統轉變為香港最容易接觸到的藝術館之一。
              </p>
              <p className="mb-4">
                自1998年計劃開始以來，我們已經在整個網絡中安裝了超過70件永久性藝術品，將藝術直接帶給每天使用我們服務的數百萬乘客。這種將文化體驗融入公共交通的承諾反映了我們的信念：藝術應該是日常生活的一部分，而不是孤立在傳統畫廊牆內。
              </p>
              <p className="mb-4">
                我們策劃的收藏涵蓋不同媒介和風格，從傳統雕塑和繪畫到尖端數位裝置。每一件作品都經過精心挑選，以反映香港獨特的文化身份，同時提升乘客的通勤體驗。
              </p>
              <p className="mb-4">
                您在我們車站中看到的藝術品不僅僅是裝飾元素—它們是對所服務社區的深思熟慮的反映，為每個車站創造獨特的身份，同時培養場所感和歸屬感。
              </p>
              <p className="mb-4">
                我們繼續擴展這個計劃，與本地和國際藝術家合作，豐富公共空間並使藝術為所有人所接觸。我邀請您在旅途中探索這些裝置，即使是短暫的停留，也讓這些作品在您的日常生活中激發沉思的時刻。
              </p>
              <p className="mb-4">
                感謝您對「港鐵藝術」的興趣。我們希望這些藝術品能夠提升您的旅行體驗，並為香港充滿活力的文化景觀做出貢獻。
              </p>
              <p className="mt-8 text-right">
                <strong>韋約翰</strong><br />
                行政總裁<br />
                港鐵公司
              </p>
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MessageFromCeo;
