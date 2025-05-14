
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Send, Image, MessageSquare, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type Step = 1 | 2 | 3;

const LyyliDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const { t } = useLanguage();
  
  const handleOpen = () => {
    setIsOpen(true);
    setCurrentStep(1);
  };
  
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as Step);
    } else {
      setIsOpen(false);
    }
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
        <DialogContent className="sm:max-w-md md:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-center">
              {currentStep === 1 && "Step 1: Ask Lyyli.ai to create content"}
              {currentStep === 2 && "Step 2: Review and approve the suggestion"}
              {currentStep === 3 && "Step 3: Content published to desired channel"}
            </DialogTitle>
          </DialogHeader>
          
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="bg-card rounded-lg border p-4 max-h-[400px] overflow-y-auto">
                <div className="flex items-center mb-4 border-b pb-2">
                  <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">L</div>
                  <span className="ml-2 font-medium">Lyyli Assistant</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                    <p>Good morning! I notice you have a new feature launching soon. Would you like me to prepare a Slack announcement for the company's public channel?</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                      <p>That sounds good. Can you create a draft based on the meeting memo from yesterday's developer meeting?</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span>Creating draft from meeting memo...</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={nextStep}>See next step <MessageSquare className="ml-2" /></Button>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="bg-card rounded-lg border p-4 max-h-[400px] overflow-y-auto">
                <div className="flex items-center mb-4 border-b pb-2">
                  <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">L</div>
                  <span className="ml-2 font-medium">Lyyli Assistant</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                    <p>I've drafted a Slack message based on your meeting memo. Here's the suggestion:</p>
                    <div className="mt-2 p-3 bg-white border rounded-md">
                      <p className="font-medium">:sparkles: Exciting News! :rocket:</p>
                      <p className="mt-2">Hey team! We're thrilled to announce that our new analytics dashboard will be launching next Tuesday! :chart_with_upwards_trend:</p>
                      <p className="mt-2">This feature includes:</p>
                      <ul className="list-disc ml-6 mt-1">
                        <li>Real-time data visualization</li>
                        <li>Custom report generation</li>
                        <li>Improved export options</li>
                      </ul>
                      <p className="mt-2">Can't wait for you all to try it out!</p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">This message follows your company's casual but professional tone of voice. Would you like to add a screenshot of the new feature?</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                      <p>This looks perfect! Yes, please add the screenshot and publish it to Slack right away.</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span>Adding screenshot and preparing to publish...</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={nextStep}>See final step <Image className="ml-2" /></Button>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="space-y-4">
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
              
              <div className="bg-[#222529] text-white p-4 rounded-b-lg max-h-[400px] overflow-y-auto">
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
                      <p className="font-medium">:sparkles: Exciting News! :rocket:</p>
                      <p className="mt-2">Hey team! We're thrilled to announce that our new analytics dashboard will be launching next Tuesday! :chart_with_upwards_trend:</p>
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
              
              <div className="flex justify-end">
                <Button onClick={() => setIsOpen(false)}>Close demo <Check className="ml-2" /></Button>
              </div>
            </div>
          )}
          
          <DialogFooter className="sm:justify-center">
            <div className="flex gap-2 justify-center w-full mt-2">
              <div 
                className={`w-2 h-2 rounded-full ${currentStep === 1 ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrentStep(1)}
              ></div>
              <div 
                className={`w-2 h-2 rounded-full ${currentStep === 2 ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrentStep(2)}
              ></div>
              <div 
                className={`w-2 h-2 rounded-full ${currentStep === 3 ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrentStep(3)}
              ></div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LyyliDemo;
