
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages, SupportedLanguage } from '@/translations';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { verifyTranslations } from '@/utils/translationUtils';

const TranslationManager: React.FC = () => {
  const { language } = useLanguage();
  const [results, setResults] = useState<Record<string, ReturnType<typeof verifyTranslations>>>({});
  const [open, setOpen] = useState(false);

  const handleVerify = () => {
    try {
      const newResults: Record<string, ReturnType<typeof verifyTranslations>> = {};
      
      Object.keys(languages).forEach(lang => {
        try {
          newResults[lang] = verifyTranslations(lang as SupportedLanguage);
        } catch (error) {
          console.error(`Error verifying translations for ${lang}:`, error);
          newResults[lang] = {
            isComplete: false,
            missingKeys: [`Error verifying: ${error instanceof Error ? error.message : String(error)}`],
            language: lang as SupportedLanguage
          };
        }
      });
      
      setResults(newResults);
      setOpen(true);
    } catch (error) {
      console.error('Error in handleVerify:', error);
    }
  };

  // Only show in development mode
  if (!import.meta.env.DEV) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleVerify}
          className="fixed bottom-4 right-4 z-50 bg-white shadow-md"
        >
          Verify Translations
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Translation Status</DialogTitle>
          <DialogDescription>
            Review the translation status across all supported languages
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="summary" className="mt-4">
          <TabsList>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            {Object.keys(languages).map(lang => (
              <TabsTrigger key={lang} value={lang}>
                {lang.toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="summary" className="mt-4">
            <div className="space-y-4">
              {Object.keys(results).length > 0 ? (
                Object.keys(results).map(lang => {
                  const result = results[lang];
                  return (
                    <div key={lang} className="p-4 border rounded-md">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">{lang.toUpperCase()}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${result.isComplete ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {result.isComplete ? 'Complete' : `Missing ${result.missingKeys.length} keys`}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-6">
                  <p>No verification results available. Click "Verify Translations" to check.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          {Object.keys(languages).map(lang => (
            <TabsContent key={lang} value={lang} className="mt-4">
              {results[lang] ? (
                <div className="space-y-4">
                  <div className="p-4 border rounded-md bg-muted/20">
                    <h3 className="font-medium mb-2">Status</h3>
                    <p>{results[lang].isComplete ? 'All translations are complete' : `Missing ${results[lang].missingKeys.length} keys`}</p>
                  </div>
                  
                  {!results[lang].isComplete && (
                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-2">Missing Keys</h3>
                      <div className="max-h-[400px] overflow-y-auto">
                        <ul className="space-y-1 list-disc pl-5">
                          {results[lang].missingKeys.map((key, index) => (
                            <li key={`${lang}-${key}-${index}`} className="text-sm">
                              <code className="bg-muted p-1 rounded">{key}</code>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p>No verification results for {lang.toUpperCase()}. Click "Verify Translations" to check.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default TranslationManager;
