
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LyyliDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const { t } = useLanguage();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Animation timeline management
  useEffect(() => {
    if (!isOpen) return;
    
    // Reset animation on open
    setAnimationPhase(0);
    
    // Schedule animation phases
    const timeline = [
      setTimeout(() => setAnimationPhase(1), 2000), // Initial assistant message
      setTimeout(() => setAnimationPhase(2), 4000), // User response
      setTimeout(() => setAnimationPhase(3), 6000), // Assistant typing
      setTimeout(() => setAnimationPhase(4), 8000), // Assistant suggestion
      setTimeout(() => setAnimationPhase(5), 12000), // User approval
      setTimeout(() => setAnimationPhase(6), 14000), // Preparing to publish
      setTimeout(() => setAnimationPhase(7), 16000), // Show Slack interface
      setTimeout(() => setAnimationPhase(8), 20000)  // Show final branding
    ];
    
    // Cleanup timeouts when dialog closes
    return () => timeline.forEach(timer => clearTimeout(timer));
  }, [isOpen]);
  
  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [animationPhase]);
  
  const handleOpen = () => {
    setIsOpen(true);
  };
  
  return (
    <>
      <Button 
        variant="outline" 
        className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
        onClick={handleOpen}
      >
        {t('hero.secondaryCta')}
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md md:max-w-2xl" style={{ width: "100%", maxWidth: "650px", height: "500px" }}>
          <DialogHeader>
            <DialogTitle className="text-center">
              {animationPhase < 7 ? "Lyyli.ai Content Assistant" : "Content Published"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 h-[calc(100%-60px)] flex flex-col">
            {/* Full conversation flow in one view */}
            <div className={`${animationPhase >= 7 ? "hidden" : "flex-1 overflow-hidden"}`}>
              <div 
                ref={chatContainerRef}
                className="bg-card rounded-lg border p-4 h-full overflow-y-auto"
              >
                <div className="flex items-center mb-4 border-b pb-2">
                  <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">L</div>
                  <span className="ml-2 font-medium">Lyyli Assistant</span>
                </div>
                
                <div className="space-y-3">
                  {/* Initial assistant message */}
                  {animationPhase >= 1 && (
                    <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
                      <p>Good morning! 🌞 I notice you have a new feature launching soon. Would you like me to prepare a Slack announcement for the company's public channel?</p>
                    </div>
                  )}
                  
                  {/* User response */}
                  {animationPhase >= 2 && (
                    <div className="flex justify-end animate-fade-in">
                      <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                        <p>That sounds good. Can you create a draft based on the meeting memo from yesterday's developer meeting?</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Assistant typing */}
                  {animationPhase >= 3 && animationPhase < 4 && (
                    <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <span>Creating draft from meeting memo...</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Assistant suggestion */}
                  {animationPhase >= 4 && (
                    <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
                      <p>I've drafted a Slack message based on your meeting memo. Here's the suggestion:</p>
                      <div className="mt-2 p-3 bg-white border rounded-md">
                        <p className="font-medium">✨ Exciting News! 🚀</p>
                        <p className="mt-2">Hey team! We're thrilled to announce that our new analytics dashboard will be launching next Tuesday! 📈</p>
                        <p className="mt-2">This feature includes:</p>
                        <ul className="list-disc ml-6 mt-1">
                          <li>Real-time data visualization</li>
                          <li>Custom report generation</li>
                          <li>Improved export options</li>
                        </ul>
                        <p className="mt-2">Can't wait for you all to try it out!</p>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">This message follows your company's casual but professional tone of voice. Would you like to add a screenshot of the new feature? 🖼️</p>
                    </div>
                  )}
                  
                  {/* User approval */}
                  {animationPhase >= 5 && (
                    <div className="flex justify-end animate-fade-in">
                      <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                        <p>This looks perfect! Yes, please add the screenshot and publish it to Slack right away. 👍</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Preparing to publish */}
                  {animationPhase >= 6 && (
                    <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <span>Adding screenshot and publishing to Slack... 🔄</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Slack interface transition */}
            {animationPhase >= 7 && (
              <div className="animate-fade-in h-full overflow-hidden flex flex-col">
                <div className="bg-[#4A154B] text-white p-4 rounded-t-lg">
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
                
                <div className="bg-[#222529] text-white p-4 rounded-b-lg flex-1 overflow-y-auto">
                  <div className="mb-4 pb-2 border-b border-gray-700">
                    <p className="text-gray-300 font-medium">#general</p>
                  </div>
                  
                  <div className="flex items-start mb-1">
                    <div className="bg-primary rounded-sm w-8 h-8 flex items-center justify-center text-white font-semibold flex-shrink-0">L</div>
                    <div className="ml-2">
                      <div className="flex items-center">
                        <span className="font-medium">Lyyli Bot</span>
                        <span className="ml-2 text-xs text-gray-400">11:45 AM</span>
                      </div>
                      <div className="mt-1">
                        <p className="font-medium">✨ Exciting News! 🚀</p>
                        <p className="mt-2">Hey team! We're thrilled to announce that our new analytics dashboard will be launching next Tuesday! 📈</p>
                        <p className="mt-2">This feature includes:</p>
                        <ul className="list-disc ml-6 mt-1">
                          <li>Real-time data visualization</li>
                          <li>Custom report generation</li>
                          <li>Improved export options</li>
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
                        <p className="mt-2">Can't wait for you all to try it out!</p>
                      </div>
                      
                      <div className="mt-2 flex items-center text-xs text-gray-400">
                        <span className="flex items-center"><Check className="w-3 h-3 mr-1" /> Published by Lyyli.ai</span>
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
                  <div className="bg-gradient-to-r from-primary/80 to-primary p-4 text-white rounded-lg mt-6 text-center animate-fade-in">
                    <h3 className="text-lg font-semibold mb-2">Lyyli.ai - Communication Automation</h3>
                    <p>Content creation and publishing simplified for enterprise teams</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LyyliDemo;
