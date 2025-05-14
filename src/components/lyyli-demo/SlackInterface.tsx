
import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SlackInterfaceProps {
  animationPhase: number;
}

const SlackInterface: React.FC<SlackInterfaceProps> = ({ animationPhase }) => {
  const { t } = useLanguage();
  
  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#4A154B] text-white p-4">
        <div className="flex items-center">
          <svg viewBox="0 0 54 54" className="w-6 h-6 mr-2">
            <path fill="white" d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"></path>
            <path fill="white" d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"></path>
            <path fill="white" d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"></path>
            <path fill="white" d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"></path>
          </svg>
          <span className="font-bold">Slack</span>
        </div>
      </div>
      
      <div className="bg-[#222529] text-white p-4 flex-1 overflow-y-auto">
        <div className="mb-4 pb-2 border-b border-gray-700">
          <p className="text-gray-300 font-medium">#general</p>
        </div>
        
        <div className="flex items-start mb-1">
          <div className="bg-primary rounded-sm w-8 h-8 flex items-center justify-center text-white font-semibold flex-shrink-0">L</div>
          <div className="ml-2">
            <div className="flex items-center">
              <span className="font-medium">{t('demo.slackIntegration.aiAssistant')}</span>
              <span className="ml-2 text-xs text-gray-400">11:45 AM</span>
            </div>
            <div className="mt-1">
              <p className="font-medium">✨ {t('demo.slackIntegration.messageTitle')} 🚀</p>
              <p className="mt-2">{t('demo.slackIntegration.messageIntro')} 📈</p>
              <p className="mt-2">{t('demo.slackIntegration.messageFeatures')}</p>
              <ul className="list-disc ml-6 mt-1">
                <li>{t('demo.slackIntegration.feature1')}</li>
                <li>{t('demo.slackIntegration.feature2')}</li>
                <li>{t('demo.slackIntegration.feature3')}</li>
              </ul>
              <div className="mt-3 border border-gray-700 rounded-md overflow-hidden">
                <div className="bg-gray-800 p-2 text-xs">analytics-dashboard.png</div>
                <div className="h-40 bg-gray-900 flex items-center justify-center">
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <div className="w-12 h-1 bg-primary/30 mb-2 rounded"></div>
                    <div className="w-20 h-1 bg-primary/30 mb-4 rounded"></div>
                    <div className="flex space-x-2">
                      <div className="w-16 h-10 bg-primary/20 rounded"></div>
                      <div className="w-16 h-10 bg-primary/20 rounded"></div>
                      <div className="w-16 h-10 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-2">{t('demo.slackIntegration.messageOutro')}</p>
            </div>
            
            <div className="mt-2 flex items-center text-xs text-gray-400">
              <span className="flex items-center"><Check className="w-3 h-3 mr-1" /> {t('demo.slackIntegration.publishedBy')}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-3 flex">
          <div className="bg-gray-700 p-1 rounded mr-1">👍 3</div>
          <div className="bg-gray-700 p-1 rounded mr-1">🚀 2</div>
          <div className="bg-gray-700 p-1 rounded">➕</div>
        </div>
      </div>
      
      {animationPhase >= 8 && (
        <div className="bg-gradient-to-r from-primary/80 to-primary p-4 text-white text-center animate-fade-in">
          <h3 className="text-lg font-semibold mb-2">{t('demo.slackIntegration.footer.title')}</h3>
          <p>{t('demo.slackIntegration.footer.subtitle')}</p>
        </div>
      )}
    </div>
  );
};

export default SlackInterface;
