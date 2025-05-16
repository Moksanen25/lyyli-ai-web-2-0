
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const CookiePolicy: React.FC = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  
  const pageTitle = language === 'fi' ? 'Lyyli - Evästekäytäntö' : 'Lyyli - Cookie Policy';
  const metaDescription = language === 'fi' 
    ? 'Lyylin evästekäytäntö selittää, miten käytämme evästeitä ja muita seurantateknologioita sivustollamme.' 
    : 'Lyyli cookie policy explains how we use cookies and other tracking technologies on our website.';
  
  const lastUpdated = '2025-05-16';
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={language === 'fi' ? '/fi/cookies' : '/cookies'} />
      </Helmet>
      
      <Navbar />
      
      <main className="container-padding py-8 md:py-12 lg:py-16">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {language === 'fi' ? 'Evästekäytäntö' : 'Cookie Policy'}
          </h1>
          
          <div className="text-primary/80 space-y-4 md:space-y-6">
            <p className="lead text-lg">
              {language === 'fi' 
                ? 'Tämä evästekäytäntö selittää, miten Lyyli ("me", "meidän") käyttää evästeitä ja vastaavia teknologioita verkkosivustollamme.' 
                : 'This Cookie Policy explains how Lyyli ("we", "our", "us") uses cookies and similar technologies on our website.'}
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-3">
              {language === 'fi' ? 'Mitä evästeet ovat?' : 'What are cookies?'}
            </h2>
            <p>
              {language === 'fi' 
                ? 'Evästeet ovat pieniä tekstitiedostoja, jotka tallennetaan laitteellesi (tietokone, tabletti tai mobiililaite), kun vierailet verkkosivustollamme. Evästeet mahdollistavat sen, että verkkosivusto tunnistaa laitteesi ja muistaa valintasi ja asetuksesi.'
                : 'Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They allow the website to recognize your device and remember your preferences and settings.'}
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-3">
              {language === 'fi' ? 'Miten käytämme evästeitä' : 'How we use cookies'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Käytämme seuraavia evästeitä ja seurantateknologioita:'
                : 'We use the following cookies and tracking technologies:'}
            </p>
            
            <h3 className="text-lg md:text-xl font-medium mt-4 md:mt-6 mb-2 md:mb-3">
              {language === 'fi' ? 'Välttämättömät evästeet' : 'Necessary cookies'}
            </h3>
            <p>
              {language === 'fi'
                ? 'Nämä evästeet ovat välttämättömiä verkkosivuston perusominaisuuksien ja turvallisuuden kannalta. Et voi kieltäytyä näistä evästeistä, koska sivusto ei voisi toimia kunnolla ilman niitä.'
                : 'These cookies are essential for the basic features and security of the website. You cannot opt out of these cookies as the website cannot function properly without them.'}
            </p>
            
            <h3 className="text-lg md:text-xl font-medium mt-4 md:mt-6 mb-2 md:mb-3">
              {language === 'fi' ? 'Analytiikkaevästeet' : 'Analytics cookies'}
            </h3>
            <p>
              {language === 'fi'
                ? 'Käytämme analytiikkaevästeitä kerätäksemme tietoa siitä, miten käyttäjät käyttävät sivustoamme. Nämä evästeet auttavat meitä parantamaan sivustoa ja käyttökokemusta.'
                : 'We use analytics cookies to collect information about how users interact with our website. These cookies help us improve our site and your experience.'}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Datafast Analytics</strong>: {language === 'fi'
                  ? 'Käytämme Datafast Analyticsiä keräämään kävijätilastoja ja ymmärtämään, miten käyttäjät navigoivat sivustollamme.'
                  : 'We use Datafast Analytics to collect visitor statistics and understand how users navigate our site.'}
              </li>
              <li>
                <strong>Google Analytics 4</strong>: {language === 'fi'
                  ? 'Käytämme Google Analytics 4:ää analysoidaksemme käyttäjien vuorovaikutusta sivustomme kanssa, kuten sivukatseluita ja käyntejä eri osioissa.'
                  : 'We use Google Analytics 4 to analyze user interactions with our site, such as page views and visits to different sections.'}
              </li>
            </ul>
            
            <h3 className="text-lg md:text-xl font-medium mt-4 md:mt-6 mb-2 md:mb-3">
              {language === 'fi' ? 'Markkinointievästeet' : 'Marketing cookies'}
            </h3>
            <p>
              {language === 'fi'
                ? 'Nämä evästeet auttavat meitä mittaamaan markkinointitoimenpiteidemme tehokkuutta ja tarjoamaan sinulle relevanttia sisältöä.'
                : 'These cookies help us measure the effectiveness of our marketing campaigns and deliver relevant content to you.'}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>HubSpot</strong>: {language === 'fi'
                  ? 'Käytämme HubSpot-evästeitä seurataksemme käyttäjien vuorovaikutusta lomakkeidemme kanssa ja parantaaksemme viestintäämme.'
                  : 'We use HubSpot cookies to track user interactions with our forms and improve our communications.'}
              </li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-3">
              {language === 'fi' ? 'Evästeasetuksiesi hallitseminen' : 'Managing your cookie preferences'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Kun vierailet sivustollamme ensimmäistä kertaa, sinulle näytetään evästebanneri, jossa voit valita, mitä evästeitä hyväksyt. Voit muuttaa asetuksiasi milloin tahansa klikkaamalla "Evästeasetukset" -linkkiä sivuston alaosassa.'
                : 'When you first visit our website, you will be shown a cookie banner where you can choose which cookies you accept. You can change your preferences at any time by clicking the "Cookie Settings" link in the footer of the website.'}
            </p>
            
            <p>
              {language === 'fi'
                ? 'Voit myös halutessasi poistaa evästeet selaimestasi tai estää ne kokonaan selaimen asetuksista. Huomaa kuitenkin, että joidenkin evästeiden poistaminen käytöstä voi vaikuttaa sivuston toiminnallisuuteen.'
                : 'You can also choose to delete cookies from your browser or block them entirely through your browser settings. Please note, however, that disabling certain cookies may impact the functionality of the site.'}
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-3">
              {language === 'fi' ? 'Oikeutesi' : 'Your rights'}
            </h2>
            <p>
              {language === 'fi'
                ? 'EU:n yleisen tietosuoja-asetuksen (GDPR) mukaisesti sinulla on tiettyjä oikeuksia henkilötietojesi suhteen. Näihin oikeuksiin kuuluvat:'
                : 'Under the EU General Data Protection Regulation (GDPR), you have certain rights regarding your personal data. These rights include:'}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                {language === 'fi'
                  ? 'Oikeus saada pääsy tietoihin'
                  : 'Right of access'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Oikeus tietojen oikaisemiseen'
                  : 'Right to rectification'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Oikeus tietojen poistamiseen'
                  : 'Right to erasure'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Oikeus rajoittaa käsittelyä'
                  : 'Right to restriction of processing'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Oikeus siirtää tiedot järjestelmästä toiseen'
                  : 'Right to data portability'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Oikeus vastustaa'
                  : 'Right to object'}
              </li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-3">
              {language === 'fi' ? 'Yhteystiedot' : 'Contact us'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Jos sinulla on kysyttävää evästekäytännöstämme tai haluat käyttää GDPR:n mukaisia oikeuksiasi, ota yhteyttä meihin:'
                : 'If you have any questions about our cookie policy or wish to exercise your GDPR rights, please contact us:'}
            </p>
            <p className="mt-2">
              <Link to="/contact" className="text-primary hover:underline">
                {language === 'fi' ? 'Yhteystiedot' : 'Contact Page'}
              </Link>
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-3">
              {language === 'fi' ? 'Tietosuojavastaava' : 'Data Protection Officer'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Voit ottaa yhteyttä tietosuojavastaavaamme lähettämällä sähköpostia osoitteeseen: dpo@lyyli.fi'
                : 'You can contact our Data Protection Officer by sending an email to: dpo@lyyli.fi'}
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-3">
              {language === 'fi' ? 'Valvontaviranomainen' : 'Supervisory Authority'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Jos olet tyytymätön tapaan, jolla käsittelemme henkilötietojasi, sinulla on oikeus tehdä valitus paikalliselle tietosuojaviranomaiselle. Suomessa tämä on Tietosuojavaltuutetun toimisto.'
                : 'If you are unhappy with the way we handle your personal data, you have the right to lodge a complaint with your local data protection authority. In Finland, this is the Office of the Data Protection Ombudsman.'}
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-3">
              {language === 'fi' ? 'Muutokset evästekäytäntöön' : 'Changes to this Cookie Policy'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Saatamme päivittää tätä evästekäytäntöä ajoittain. Suosittelemme tarkistamaan tämän sivun säännöllisesti nähdäksesi mahdolliset muutokset.'
                : 'We may update this Cookie Policy from time to time. We encourage you to review this page periodically to stay informed about any changes.'}
            </p>
            <p className="mt-2">
              {language === 'fi'
                ? 'Viimeksi päivitetty: ' + lastUpdated
                : 'Last updated: ' + lastUpdated}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CookiePolicy;
