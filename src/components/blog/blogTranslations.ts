
// Store for blog content translations
// Map of [slug]-[language] to translated content
export const blogTranslations: Record<string, { title?: string; excerpt?: string; content?: string }> = {
  // Sample translations
  'getting-started-fi': {
    title: 'Aloita tästä',
    excerpt: 'Kuinka voit aloittaa Lyylin käytön tehokkaasti ja edistää liiketoimintaasi.',
    content: '<p>Tämä on esimerkki käännöksestä.</p>'
  },
  
  // Sports organization translation
  'sports-organization-success-fi': {
    title: 'Urheilujärjestö tehostaa toimintaansa Lyylin avulla',
    excerpt: 'Miten kansallinen urheilujärjestö käyttää Lyyliä parantaakseen jäsenkommunikaatiota.',
    content: '<p>Kansallinen urheilujärjestö onnistui tehostamaan viestintäänsä ja järjestön toimintaa Lyylin avulla. Automaattisia ilmoituksia ja viestintäkanavia käyttämällä järjestö pystyi tavoittamaan jäseniään tehokkaammin.</p><p>Tuloksena jäsenten osallistuminen järjestön tapahtumiin kasvoi merkittävästi ja jäsenten tyytyväisyys parani.</p>'
  },
  
  // Non-profit translation
  'nonprofit-outreach-case-fi': {
    title: 'Voittoa tavoittelematon järjestö laajentaa tavoittavuuttaan',
    excerpt: 'Miten pienempi järjestö käyttää Lyylin työkaluja tehokkaasti rajallisilla resursseilla.',
    content: '<p>Voittoa tavoittelematon järjestö keskittyi laajentamaan tavoittavuuttaan rajallisilla resursseilla. Lyylin avulla järjestö pystyi automatisoimaan viestintäprosessejaan ja keskittymään tärkeimpiin tehtäviinsä.</p><p>Manuaalisen työn vähentäminen johti merkittäviin aikasäästöihin ja mahdollisti järjestön keskittyä ydintoimintaansa.</p>'
  },
  
  // Content AI news translation
  'new-content-ai-features-fi': {
    title: 'Uudet Content AI -ominaisuudet julkaistu',
    excerpt: 'Tutki uusia tekoälyominaisuuksia, jotka auttavat luomaan sisältöä nopeammin.',
    content: '<p>Olemme innoissamme voidessamme julkistaa uudet Content AI -ominaisuudet, jotka auttavat käyttäjiämme luomaan laadukasta sisältöä nopeammin ja tehokkaammin.</p><p>Uudet ominaisuudet sisältävät:</p><ul><li>Automaattisen sisällön optimoinnin</li><li>Personoidut sisältöehdotukset</li><li>Monikielisen sisällöntuotannon työkalut</li></ul><p>Nämä työkalut ovat nyt saatavilla kaikille Pro ja Enterprise -asiakkaille.</p>'
  }
};

// Helper function to check if a Finnish translation exists
export const hasFinishTranslation = (slug: string): boolean => {
  const translationKey = `${slug}-fi`;
  return !!blogTranslations[translationKey];
};
