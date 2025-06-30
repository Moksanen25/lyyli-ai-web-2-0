
import React from 'react';
import { Users, Shield, Eye, Activity } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const AccessControl = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'fi' 
                ? 'Käyttöoikeudet ja pääsynhallinta'
                : 'Access Rights and Access Control'
              }
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fi'
                ? 'Lyylissä on toteutettu tarkka käyttöoikeuksien hallinta ja kattava toimintojen seuranta.'
                : 'Lyyli implements precise access control and comprehensive activity monitoring.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'fi' ? 'Hallittavuus ja valvonta' : 'Control and Monitoring'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === 'fi' ? 'Roolipohjainen pääsy' : 'Role-based Access'}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'fi'
                        ? 'Organisaatiosi jäsenet näkevät vain ne tiedot, joihin heillä on oikeus'
                        : 'Organization members see only the data they have rights to access'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === 'fi' ? 'Järjestelmänvalvojan hallinta' : 'Administrator Control'}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'fi'
                        ? 'Järjestelmänvalvojat voivat hallita käyttöoikeuksia yksityiskohtaisesti'
                        : 'Administrators can manage access rights in detail'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === 'fi' ? 'Toimintojen lokitus' : 'Activity Logging'}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'fi'
                        ? 'Kaikki järjestelmään kirjautumiset ja toiminnot lokitetaan turvallisesti'
                        : 'All system logins and activities are securely logged'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === 'fi' ? 'Automaattinen valvonta' : 'Automatic Monitoring'}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'fi'
                        ? 'Epäilyttävä toiminta havaitaan automaattisesti ja siitä ilmoitetaan välittömästi'
                        : 'Suspicious activity is automatically detected and immediately reported'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-6">
                {language === 'fi' ? 'Käyttöoikeuksien tasot' : 'Access Levels'}
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">
                    {language === 'fi' ? 'Järjestelmänvalvoja' : 'Administrator'}
                  </span>
                  <span className="text-sm text-gray-600">
                    {language === 'fi' ? 'Täysi pääsy' : 'Full Access'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">
                    {language === 'fi' ? 'Tiimin vetäjä' : 'Team Leader'}
                  </span>
                  <span className="text-sm text-gray-600">
                    {language === 'fi' ? 'Tiimin tiedot' : 'Team Data'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">
                    {language === 'fi' ? 'Käyttäjä' : 'User'}
                  </span>
                  <span className="text-sm text-gray-600">
                    {language === 'fi' ? 'Omat tiedot' : 'Own Data'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">
                    {language === 'fi' ? 'Vierailija' : 'Guest'}
                  </span>
                  <span className="text-sm text-gray-600">
                    {language === 'fi' ? 'Lukuoikeus' : 'Read Only'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessControl;
