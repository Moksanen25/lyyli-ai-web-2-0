
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BlogPost } from '@/data/blogData';

interface TranslatedContentProps {
  post: BlogPost;
  children: React.ReactNode;
}

// Map of translations for blog content
// Key format: post-slug-language
const blogTranslations: Record<string, {
  title?: string;
  content?: string;
  excerpt?: string;
}> = {
  // Finnish translation for nonprofit post
  'nonprofit-member-communication-enhancement-fi': {
    title: 'Kuinka yleishyödylliset yhteisöt ja järjestöt voivat parantaa viestintäänsä tekoälyä hyödyntämällä',
    excerpt: 'Moni järjestö ja yhdistys kamppailee saman ongelman kanssa: miten viestiä johdonmukaisesti jäsenistölle, kun henkilöstöresurssit ovat rajalliset.',
    content: `
      <h2>Haaste: Hajanaista viestintää ja rajalliset resurssit</h2>
      
      <p>Moni järjestö ja yhdistys kamppailee saman ongelman kanssa: miten viestiä johdonmukaisesti jäsenistölle, kun henkilöstöresurssit ovat rajalliset. Pienet tiimit hoitavat useita tehtäviä, ja viestintä jää usein satunnaiseksi ja epäsäännölliseksi.</p>
      
      <p>Jäsenet kertovat saavansa tärkeät päivitykset tai tapahtumatiedot liian myöhään. Tämä johtaa sitoutumisen heikkenemiseen ja osallistujamäärien laskuun. Jos viestintää tehdään usealla kielellä, haaste moninkertaistuu ja kuormittaa jo valmiiksi tiukkaa resurssitilannetta entisestään.</p>
      
      <h2>Ratkaisu: Automaattinen, monikielinen viestintä tekoälyn avulla</h2>
      
      <p>Tekoälyä hyödyntämällä järjestöt voivat rakentaa selkeitä ja jatkuvia viestintäprosesseja. Lyyli kaltaiset järjestelmät seuraavat kokousmuistioita, tapahtumakalentereita ja sääntöpäivityksiä, tunnistavat viestintään sopivat aiheet ja luovat niistä luonnokset automaattisesti.</p>
      
      <p>Tekoäly oppii järjestön viestintätyylin ja painotukset, ja tuottaa sisältöä, joka on yhtä aikaa ammattimaista ja helposti ymmärrettävää. Monikielisissä organisaatioissa viestit voidaan julkaista usealla kielellä ilman lisätyötä.</p>
      
      <h2>Ominaisuudet, joilla on oikeasti merkitystä:</h2>
      
      <ul>
        <li><strong>Automaattinen viestintäkalenteri</strong><br>Tekoäly luo ja ylläpitää viestintäsuunnitelmaa järjestön tapahtumien ja toimenpiteiden pohjalta.</li>
        
        <li><strong>Monikielinen julkaisu</strong><br>Kaikki sisältö syntyy automaattisesti tarvittavilla kielillä.</li>
        
        <li><strong>Sisältöaiheiden tunnistus dokumenteista</strong><br>Tekoäly poimii olennaiset viestit kokouspöytäkirjoista ja asiakirjoista.</li>
        
        <li><strong>Monikanavainen jakelu</strong><br>Julkaisut lähtevät saumattomasti uutiskirjeisiin, verkkosivuille ja sosiaaliseen mediaan.</li>
      </ul>
      
      <h2>Tulokset, jotka näkyvät käytännössä</h2>
      
      <p>Järjestöt, jotka ottavat käyttöön tekoälypohjaisen viestinnän, raportoivat usein seuraavia hyötyjä:</p>
      
      <ul>
        <li>10–15 tuntia manuaalista työtä säästyy viikossa</li>
        <li>Viestinnän määrä jopa tuplaantuu</li>
        <li>Sähköpostien avaamisprosentti kasvaa 40–50 %</li>
        <li>Tapahtumien osallistujamäärä kasvaa 30–40 %</li>
        <li>Monikielisten sisältöjen määrä nousee merkittävästi</li>
        <li>Jäsenet kokevat viestinnän selkeämmäksi ja ajantasaisemmaksi</li>
      </ul>
      
      <blockquote>
        <p>"Tekoäly on mullistanut tavan, jolla tavoitamme jäsenemme. Pystymme nyt tarjoamaan ajankohtaista ja monikielistä viestintää ilman, että pieni tiimimme kuormittuu. Jäsenet kertovat kokevansa yhteyden järjestöön aiempaa vahvemmin."</p>
      </blockquote>
      
      <h2>Miksi tämä toimintamalli toimii</h2>
      
      <p>Tämä lähestymistapa toimii erityisesti järjestöissä, koska se ratkaisee aidon resurssihaasteen. Sen sijaan, että viestintään palkattaisiin uusia ihmisiä tai ulkoistettaisiin sisältöä kalliilla, tekoäly vahvistaa nykyisten tekijöiden vaikuttavuutta.</p>
      
      <p>Johdonmukainen viestintä monella kielellä lisää saavutettavuutta ja osallisuutta. Kun jokainen jäsen saa tietoa omalla kielellään, viestintä ei vain parane—se myös yhdistää.</p>
      
      <p>Lyyli näyttää, kuinka tekoäly voi tukea järjestöjä tuottamaan ammattimaista ja jatkuvaa viestintää ilman lisäresurssien tarvetta—parantaen jäsenkokemusta ja tukien järjestön perustehtävää.</p>
    `
  }
  // Add more translations as needed
};

/**
 * A component that displays the Finnish translation for blog content
 * when available, otherwise shows the English content with a notice
 */
const TranslatedContent: React.FC<TranslatedContentProps> = ({ post, children }) => {
  const { language } = useLanguage();
  console.log('TranslatedContent:', { postSlug: post.slug, language, postLanguage: post.language });
  
  // If we're in English mode, or the content is already in Finnish, just render normally
  if (language === 'en' || post.language === 'fi') {
    return <>{children}</>;
  }
  
  // Check if we have a translation for this post
  const translationKey = `${post.slug}-${language}`;
  const translation = blogTranslations[translationKey];
  
  // If we have a translation, use it
  if (translation) {
    console.log('Translation found for:', translationKey);
    
    return (
      <div className="relative">
        {/* If there's a translated title, use it */}
        {translation.title && (
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {translation.title}
          </h1>
        )}
        
        {/* If there's translated content, use it */}
        {translation.content && (
          <div 
            className="prose prose-lg max-w-none mb-10 blog-content"
            dangerouslySetInnerHTML={{ __html: translation.content }}
          />
        )}
        
        {/* If we don't have both title and content, render children */}
        {!translation.title || !translation.content ? children : null}
      </div>
    );
  }
  
  // In Finnish mode with English content but no translation - add special translation banner
  return (
    <div className="relative">
      {/* Translation banner */}
      <div className="bg-blue-100 text-blue-800 p-4 mb-6 rounded-md border border-blue-200">
        <p className="font-medium mb-1">Automaattinen käännös</p>
        <p className="text-sm">Tämä sisältö on käännetty automaattisesti englanniksi. Alkuperäinen sisältö on saatavilla vaihtamalla sivuston kieli englanniksi.</p>
      </div>
      
      {/* Show original content */}
      {children}
      
      {/* Add instructions for users at the bottom */}
      <div className="mt-8 p-4 bg-gray-100 rounded-md">
        <p className="text-sm text-gray-600">
          Huom: Täydellinen suomenkielinen käännös on tulossa pian. Toistaiseksi käytä englanninkielistä versiota kattavinta sisältöä varten.
        </p>
      </div>
    </div>
  );
};

export default TranslatedContent;
