
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BlogPost } from '@/data/blogData';

interface TranslatedContentProps {
  post: BlogPost;
  children: React.ReactNode;
}

// Map of translations for blog content
// Key format: post-slug-language
export const blogTranslations: Record<string, {
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
  },
  // Finnish translation for sports club post
  'sports-club-fan-communication-fi': {
    title: 'Miten urheiluseurat voivat uudistaa faniviestintänsä tekoälyn avulla',
    excerpt: 'Urheiluseurat kamppailevat usein epäsäännöllisen viestinnän kanssa, vaikka taustalla on intohimoisia kannattajia. Viestintä on usein reaktiivista ja riippuu pienen markkinointitiimin tai vapaaehtoisten ajankäytöstä.',
    content: `
      <h2>Haaste: Reaktiivinen viestintä rajoittaa fanien ja sponsorien sitoutumista</h2>
      
      <p>Urheiluseurat—niin ammattilaistasolla kuin harrasteliigassa—kamppailevat usein epäsäännöllisen viestinnän kanssa, vaikka taustalla on intohimoisia kannattajia. Viestintä on usein reaktiivista ja riippuu pienen markkinointitiimin tai vapaaehtoisten ajankäytöstä.</p>
      
      <p>Tärkeitä hetkiä jää hyödyntämättä: ottelutulokset julkaistaan tunteja pelin jälkeen, tapahtumamainokset lähtevät liian myöhään ja sponsorinäkyvyys on epätasaista tai unohtuu kokonaan.</p>
      
      <p>Urheiluseurojen yleisiä viestintähaasteita ovat:</p>
      
      <ul>
        <li>Epäsäännöllinen viestintä, joka riippuu henkilöresursseista</li>
        <li>Pelaajien saavutusten jääminen piiloon</li>
        <li>Sponsorien näkyvyyden vaihtelu eri kanavissa</li>
        <li>Henkilökohtaisen viestinnän puute eri faniryhmille</li>
        <li>Rajalliset resurssit koti- ja vierasotteluiden viestintään</li>
      </ul>
      
      <h2>Ratkaisu: Reaaliaikainen urheiluviestintä tekoälyn avulla</h2>
      
      <p>Tekoälypohjaiset viestintäjärjestelmät voivat automatisoida ajankohtaiseen viestintään liittyviä prosesseja ja varmistaa sponsorien näkyvyyden. Ne voidaan yhdistää tulospalveluihin, tapahtumakalentereihin ja jäsenrekisteriin, jolloin syntyy kattava näkymä viestintämahdollisuuksiin.</p>
      
      <p>Tekoäly voidaan kouluttaa tuottamaan reaaliaikaisia ottelupäivityksiä, pelaajanostojen sisältöjä ja sponsorilogoilla varustettuja julkaisuja, jotka säilyttävät seuran innostuneen ja mukaansatempaavan sävyn. Lisäksi viestit voidaan segmentoida eri yleisöryhmille—intohimoisista faneista satunnaisiin seuraajiin ja yritysyhteistyökumppaneihin.</p>
      
      <h2>Tärkeimmät ominaisuudet</h2>
      
      <ul>
        <li><strong>Ottelutapahtumien seuranta</strong><br>Automaattinen viestintä ennen peliä, sen aikana ja sen jälkeen.</li>
        
        <li><strong>Sponsorinäkyvyyden hallinta</strong><br>Sisältöihin lisätään sponsorit sopimusten mukaisesti ja oikea-aikaisesti.</li>
        
        <li><strong>Pelaajasaavutusten nosto</strong><br>Merkittävät tilastot ja ennätykset nostetaan esiin automaattisesti.</li>
        
        <li><strong>Monikanavainen julkaisu</strong><br>Sisällöt julkaistaan samanaikaisesti uutiskirjeisiin, sovelluksiin, someen ja verkkosivuille.</li>
      </ul>
      
      <h2>Tulokset: Mitattavaa vaikuttavuutta</h2>
      
      <p>Tekoälyä viestinnässään hyödyntävät urheiluseurat raportoivat tyypillisesti:</p>
      
      <ul>
        <li>Yli 80 % lyhyempi aika ottelun ja siihen liittyvän viestinnän välillä</li>
        <li>Some-sitoutuminen kasvaa yli 100 %</li>
        <li>Sponsorityytyväisyys nousee 30–40 %</li>
        <li>Ottelukävijämäärät kasvavat 25–30 % parantuneen viestinnän ansiosta</li>
        <li>Fanituotemyynti kasvaa yli 40 % pelaajakohtaisten kampanjoiden jälkeen</li>
        <li>Markkinointitiimeiltä säästyy yli 15 tuntia viikossa</li>
      </ul>
      
      <blockquote>
        <p>"Tekoäly on mullistanut suhteemme faneihin ja sponsoreihin. Pystymme nyt tarjoamaan oikean viestin oikeaan aikaan—olipa kyse maali-ilmoituksesta kesken pelin tai pelaajahaastattelusta pelin jälkeen. Sponsorit ovat tyytyväisempiä kuin koskaan, ja fanit sanovat, etteivät ole koskaan tunteneet olevansa näin lähellä joukkuetta."</p>
      </blockquote>
      
      <h2>Miksi tämä toimii</h2>
      
      <p>Tämä lähestymistapa toimii erityisesti urheiluseuroissa, koska se vastaa viestinnän keskeiseen haasteeseen: viestien pitää olla sekä ajankohtaisia että säännöllisiä—useiden tapahtumien ja yleisöjen keskellä.</p>
      
      <p>Tekoäly mahdollistaa rutiininomaisten päivitysten automatisoinnin ja säilyttää samalla seuran omaleimaisen äänensävyn ja energian. Lisäksi viestinnän personointi eri kohderyhmille tekee sisällöstä merkityksellisempää, vaikka viestien määrä kasvaa.</p>
      
      <p>Tämä osoittaa, kuinka tekoälyllä voi rakentaa vaikuttavaa, resurssitehokasta viestintää, joka vahvistaa fanien yhteyttä seuraan ja kasvattaa kaupallista arvoa ilman lisähenkilöstöä.</p>
    `
  },
  // English translation for the Finnish content-ai post
  'content-ai-perustettu-lyyli-viestintaautomaatio-en': {
    title: 'Content AI Oy Established – Lyyli.ai Redefines Communication Automation for Microbusinesses',
    excerpt: 'A new era of AI-powered communication begins today. Content AI Oy has been founded to develop and commercialize next-generation communication tools.',
    content: `
      <h2>Founders and First Investor</h2>
      
      <p>Content AI Oy was founded by Mikko Oksanen (Jiiri Asiantuntijapalvelut Oy) and Veikko Laitinen (Aimaster Oy), two experienced professionals with backgrounds in AI, communication, and small business growth. The company's first investor is Expion Oy, supporting Content AI's mission to bring intelligent communication tools within reach of every microenterprise in Europe.</p>
      
      <h2>Lyyli.ai – Let AI Handle Your Communications</h2>
      
      <p>Lyyli.ai is designed especially for European microbusinesses with diverse communication needs and limited resources. The platform enables professional, consistent communication without the need for an in-house team, freeing up valuable time for core business activities.</p>
      
      <p>Lyyli automates the entire communication process — from ideation and content creation to approval and publishing. At its core is an AI assistant that monitors internal and external communications, identifies content opportunities, and suggests tailored messages for different channels. The assistant learns from the organization's tone and objectives, producing ready-to-publish content and distributing it either with user approval or fully autonomously.</p>
      
      <h2>A Unique End-to-End Communication Solution</h2>
      
      <p>Lyyli.ai stands out by covering the entire communication workflow, not just fragments. Where other tools focus on content creation or social media scheduling, Lyyli automates the full pipeline. Key features include:</p>
      
      <ul>
        <li>Integrations with major communication and publishing platforms (e.g. Slack, LinkedIn, Teams)</li>
        <li>AI-generated content suggestions based on real company interactions</li>
        <li>An intuitive interface for training, managing, and reviewing content</li>
        <li>Automated scheduling, editing, and publishing workflows</li>
        <li>A self-learning AI engine that adapts to each company's voice and goals</li>
      </ul>
      
      <p>Lyyli turns communication into a productive, measurable business function.</p>
      
      <h2>Looking Ahead</h2>
      
      <p>The first version of Lyyli.ai is now available to Finnish and European microbusinesses. The service will continue to evolve based on user feedback and expand internationally. The goal: to become the leading communication automation platform for microenterprises across Europe and beyond.</p>
      
      <h2>For more information:</h2>
      
      <p>
        Mikko Oksanen, CEO<br>
        📧 mikko@lyyli.ai<br>
        📞 +358 40 961 9224
      </p>
      
      <p>
        🌐 www.lyyli.ai<br>
        📩 hello@lyyli.ai
      </p>
    `
  },
  // Finnish translation for the English content-ai post
  'content-ai-established-lyyli-redefines-communication-fi': {
    title: 'Content AI Oy on perustetty – Lyyli.ai mullistaa viestinnän automaation mikroyrityksille',
    excerpt: 'Tekoälyn uusi aikakausi viestinnässä alkaa nyt. Uunituore Content AI Oy on perustettu kehittämään ja kaupallistamaan uuden sukupolven viestintätyökaluja.',
    content: `
      <h2>Perustajat ja ensimmäinen sijoittaja</h2>
      
      <p>Content AI Oy:n perustajat ovat Mikko Oksanen (Jiiri Asiantuntijapalvelut Oy) ja Veikko Laitinen (Aimaster Oy). Heidän taustansa yhdistävät vahvan osaamisen tekoälystä, viestinnästä ja pk-yritysten liiketoiminnasta. Yhtiön ensimmäiseksi sijoittajaksi on lähtenyt Expion Oy, joka uskoo Content AI:n visioon älykkäästä, automatisoidusta viestinnästä eurooppalaisille mikroyrityksille.</p>
      
      <h2>Lyyli.ai – Tekoäly joka hoitaa viestinnän puolestasi</h2>
      
      <p>Lyyli.ai on suunniteltu erityisesti eurooppalaisille mikroyrityksille, joilla on moninaisia viestintätarpeita mutta rajalliset resurssit. Palvelu vapauttaa aikaa ja mahdollistaa ammattimaisen viestinnän ilman omaa viestintätiimiä.</p>
      
      <p>Lyyli yhdistää sisällön ideoinnin, tuottamisen, hyväksymisen ja julkaisemisen saumattomaksi prosessiksi – täysin automatisoidusti. Tekoälybotti seuraa organisaation sisäistä ja ulkoista viestintää, tunnistaa tarpeet ja ehdottaa sopivia sisältöjä eri kanaviin. Botti oppii organisaation tyylistä ja tavoitteista, tuottaa valmiita julkaisuja ja julkaisee ne automaattisesti käyttäjän hyväksynnällä tai täysin itsenäisesti.</p>
      
      <h2>Ainutlaatuinen kokonaisratkaisu viestintään</h2>
      
      <p>Lyyli erottautuu markkinoilla kokonaisvaltaisella lähestymistavallaan. Siinä missä monet työkalut keskittyvät yksittäisiin osa-alueisiin, Lyyli automatisoi koko viestintäprosessin. Alustan ydinominaisuudet:</p>
      
      <ul>
        <li>Integraatiot suosituimpiin viestintä- ja julkaisualustoihin (esim. Slack, LinkedIn, Teams)</li>
        <li>Automaattinen sisältöehdotusten generaattori organisaation viestinnän perusteella</li>
        <li>Käyttöliittymä sisällön hallintaan, kouluttamiseen ja valvontaan</li>
        <li>Julkaisujen ajastus, muokkaus ja monitorointi</li>
        <li>Itseoppiva tekoäly, joka mukautuu yrityksen viestintätyyliin ja tavoitteisiin</li>
      </ul>
      
      <p>Lyyli ei vain tehosta viestintää – se muuttaa sen aidosti tuottavaksi osaksi liiketoimintaa.</p>
      
      <h2>Tulevaisuuden suunta</h2>
      
      <p>Lyyli.ai:n ensimmäinen versio on nyt käytettävissä suomalaisille ja eurooppalaisille mikroyrityksille. Seuraavassa vaiheessa palvelua kehitetään edelleen asiakaspalautteen perusteella ja laajennetaan kansainvälisesti. Tavoitteena on rakentaa johtava viestinnän automaatioalusta mikroyritysten tarpeisiin Euroopassa ja sen ulkopuolella.</p>
      
      <h2>Lisätiedot:</h2>
      
      <p>
        Mikko Oksanen, toimitusjohtaja<br>
        📧 mikko@lyyli.ai<br>
        📞 +358 40 961 9224
      </p>
      
      <p>
        🌐 www.lyyli.ai<br>
        📩 hello@lyyli.ai
      </p>
    `
  }
  // Add more translations as needed
};

/**
 * Helper function to check if a post has a Finnish translation
 */
export function hasFinishTranslation(postSlug: string): boolean {
  const translationKey = `${postSlug}-fi`;
  return translationKey in blogTranslations;
}

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
