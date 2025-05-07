
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CircleCheck, Target, LineChart } from 'lucide-react';

const MissionSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-16 bg-secondary/30 rounded-xl mb-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Our Mission</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Target className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To revolutionize content creation and management through ethical AI, making it accessible to businesses of all sizes.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <CircleCheck className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <p className="text-muted-foreground">
              We believe in transparency, ethical AI development, customer-driven innovation, and building tools that amplify human creativity.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <LineChart className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Impact</h3>
            <p className="text-muted-foreground">
              We're helping businesses reduce content creation time by up to 70% while improving quality and maintaining authentic brand voice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
