import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();
  
  const pageTitle = language === 'fi' ? 'Lyyli - Tietosuojakäytäntö' : 'Lyyli - Privacy Policy';
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={
          language === 'fi' 
            ? 'Lyylin tietosuojakäytäntö kertoo, miten keräämme, käytämme ja suojaamme henkilötietojasi.' 
            : 'Lyyli privacy policy explains how we collect, use, and protect your personal information.'
        } />
      </Helmet>
      
      <Navbar />
      
      <main className="container-padding py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'fi' ? 'Tietosuojakäytäntö' : 'Privacy Policy'}
          </h1>
          
          <div className="text-primary/80 space-y-6">
            <p className="lead text-lg">
              {language === 'fi' 
                ? 'Tämä tietosuojakäytäntö selittää, miten Lyyli ("me", "meidän") kerää, käyttää ja suojaa henkilötietojasi verkkosivustoamme käyttäessäsi.' 
                : 'This Privacy Policy explains how Lyyli ("we", "our", "us") collects, uses, and protects your personal information when you use our website.'}
            </p>
            
            <div className="bg-primary/5 p-4 rounded-md border border-primary/10">
              <p className="font-medium">
                {language === 'fi' 
                  ? 'Tämä tietosuojakäytäntö on laadittu EU:n yleisen tietosuoja-asetuksen (GDPR) mukaisesti.'
                  : 'This Privacy Policy has been prepared in accordance with the EU General Data Protection Regulation (GDPR).'}
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              {language === 'fi' ? '1. Mitä tietoja keräämme?' : '1. What information do we collect?'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Keräämme seuraavia tietoja:'
                : 'We collect the following information:'}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                {language === 'fi'
                  ? 'Henkilötiedot, jotka annat meille: nimi, sähköpostiosoite, puhelinnumero ja yrityksen tiedot, kun täytät lomakkeitamme tai tilaat uutiskirjeemme.'
                  : 'Personal information you provide to us: name, email address, phone number, and company details when you fill out our forms or subscribe to our newsletter.'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Automaattisesti kerätyt tiedot: IP-osoite, selaintyyppi, vierailuaika, katsotut sivut ja muu verkkokäyttäytymiseen liittyvä tieto.'
                  : 'Information collected automatically: IP address, browser type, visit time, pages viewed, and other web behavior data.'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Evästeillä kerätyt tiedot: käytämme evästeitä ja vastaavia seurantateknologioita kerätäksemme tietoa käyttäytymisestäsi sivustollamme.'
                  : 'Information collected through cookies: we use cookies and similar tracking technologies to gather information about your behavior on our site.'}
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              {language === 'fi' ? '2. Miten käytämme tietojasi?' : '2. How do we use your information?'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Käytämme keräämiämme tietoja seuraaviin tarkoituksiin:'
                : 'We use the information we collect for the following purposes:'}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                {language === 'fi'
                  ? 'Tarjoamiemme palveluiden toimittamiseen ja parantamiseen'
                  : 'To provide and improve our services'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Yhteydenottoihin vastaaminen ja asiakaspalvelun tarjoaminen'
                  : 'To respond to inquiries and provide customer support'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Sivuston käyttökokemuksen personointiin ja optimointiin'
                  : 'To personalize and optimize your website experience'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Markkinointitoimenpiteiden tehokkuuden mittaamiseen'
                  : 'To measure the effectiveness of our marketing efforts'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Lakisääteisten velvoitteiden täyttämiseen'
                  : 'To comply with legal obligations'}
              </li>
            </ul>
            
            <h3 className="text-xl font-medium mt-6 mb-3">
              {language === 'fi' ? 'Analytiikka ja seuranta' : 'Analytics and tracking'}
            </h3>
            <p>
              {language === 'fi'
                ? 'Käytämme seuraavia analytiikka- ja seurantatyökaluja:'
                : 'We use the following analytics and tracking tools:'}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Google Analytics 4</strong>: {language === 'fi'
                  ? 'Käytämme Google Analytics 4:ää analysoidaksemme sivuston liikennettä ja käyttäjien vuorovaikutusta sivustomme kanssa.'
                  : 'We use Google Analytics 4 to analyze site traffic and user interactions with our website.'}
              </li>
              <li>
                <strong>Datafast Analytics</strong>: {language === 'fi'
                  ? 'Käytämme Datafast Analyticsiä seurataksemme sivuston kävijämääriä ja käyttäytymistä.'
                  : 'We use Datafast Analytics to track site visitor numbers and behavior.'}
              </li>
              <li>
                <strong>HubSpot</strong>: {language === 'fi'
                  ? 'Käytämme HubSpotia asiakassuhteiden hallintaan ja markkinointiin.'
                  : 'We use HubSpot for customer relationship management and marketing purposes.'}
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              {language === 'fi' ? '3. Oikeusperusta tietojen käsittelylle' : '3. Legal basis for processing'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Käsittelemme henkilötietojasi seuraavilla oikeusperusteilla:'
                : 'We process your personal data based on the following legal grounds:'}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>{language === 'fi' ? 'Suostumus' : 'Consent'}</strong>: {language === 'fi'
                  ? 'Kun olet antanut meille suostumuksesi esimerkiksi hyväksymällä evästeet tai tilaamalla uutiskirjeemme.'
                  : 'When you have given us your consent, for example, by accepting cookies or subscribing to our newsletter.'}
              </li>
              <li>
                <strong>{language === 'fi' ? 'Oikeutettu etu' : 'Legitimate interest'}</strong>: {language === 'fi'
                  ? 'Kun käsittely on tarpeen oikeutettujen etujemme toteuttamiseksi, kuten liiketoimintamme kehittämiseksi tai markkinointitoimenpiteiden optimoimiseksi.'
                  : 'When processing is necessary for our legitimate interests, such as developing our business or optimizing marketing efforts.'}
              </li>
              <li>
                <strong>{language === 'fi' ? 'Sopimuksen täyttäminen' : 'Performance of a contract'}</strong>: {language === 'fi'
                  ? 'Kun käsittely on tarpeen sinun kanssasi tehdyn sopimuksen täyttämiseksi tai sopimuksen tekemistä edeltävien toimenpiteiden toteuttamiseksi pyynnöstäsi.'
                  : 'When processing is necessary for the performance of a contract with you or to take steps at your request prior to entering into a contract.'}
              </li>
              <li>
                <strong>{language === 'fi' ? 'Lakisääteinen velvoite' : 'Legal obligation'}</strong>: {language === 'fi'
                  ? 'Kun käsittely on tarpeen lakisääteisen velvoitteemme noudattamiseksi.'
                  : 'When processing is necessary for compliance with a legal obligation to which we are subject.'}
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              {language === 'fi' ? '4. Tietojen jakaminen ja siirto' : '4. Information sharing and transfers'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Voimme jakaa henkilötietojasi seuraavien tahojen kanssa:'
                : 'We may share your personal information with the following third parties:'}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                {language === 'fi'
                  ? 'Palveluntarjoajat, jotka auttavat meitä liiketoimintamme harjoittamisessa (esim. analytiikka, asiakastuki, markkinointi)'
                  : 'Service providers who help us run our business (e.g., analytics, customer support, marketing)'}
              </li>
              <li>
                {language === 'fi'
                  ? 'Viranomaiset, kun se on lain mukaan välttämätöntä'
                  : 'Government authorities when legally required'}
              </li>
            </ul>
            <p className="mt-4">
              {language === 'fi'
                ? 'Jotkut palveluntarjoajistamme saattavat sijaita EU/ETA-alueen ulkopuolella. Kun siirrämme henkilötietojasi EU/ETA-alueen ulkopuolelle, varmistamme, että siirto tapahtuu asianmukaisten suojatoimien avulla, kuten EU:n komission hyväksymien vakiosopimuslausekkeiden tai Privacy Shield -järjestelyn kautta.'
                : 'Some of our service providers may be located outside the EU/EEA. When we transfer your personal data outside the EU/EEA, we ensure that the transfer takes place with appropriate safeguards, such as through the EU Commission\'s Standard Contractual Clauses or the Privacy Shield arrangement.'}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              {language === 'fi' ? '5. Tietojen säilyttäminen' : '5. Data retention'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Säilytämme henkilötietojasi vain niin kauan kuin on tarpeen tässä tietosuojakäytännössä määriteltyjen tarkoitusten täyttämiseksi, ellei pidempi säilytysaika ole tarpeen lakisääteisten velvoitteiden täyttämiseksi tai oikeusvaateiden puolustamiseksi.'
                : 'We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required to comply with legal obligations or to defend legal claims.'}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              {language === 'fi' ? '6. Sinun oikeutesi' : '6. Your rights'}
            </h2>
            <p>
              {language === 'fi'
                ? 'GDPR:n mukaisesti sinulla on seuraavat oikeudet henkilötietojesi suhteen:'
                : 'Under the GDPR, you have the following rights regarding your personal data:'}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>{language === 'fi' ? 'Pääsyoikeus' : 'Right of access'}</strong>: {language === 'fi'
                  ? 'Oikeus saada tietää, mitä henkilötietoja meillä on sinusta.'
                  : 'The right to know what personal data we have about you.'}
              </li>
              <li>
                <strong>{language === 'fi' ? 'Oikaisuoikeus' : 'Right to rectification'}</strong>: {language === 'fi'
                  ? 'Oikeus pyytää virheellisten tietojesi oikaisua.'
                  : 'The right to request correction of inaccurate data.'}
              </li>
              <li>
                <strong>{language === 'fi' ? 'Poisto-oikeus' : 'Right to erasure'}</strong>: {language === 'fi'
                  ? 'Oikeus pyytää tietojesi poistamista tietyissä tilanteissa.'
                  : 'The right to request deletion of your data in certain situations.'}
              </li>
              <li>
                <strong>{language === 'fi' ? 'Oikeus käsittelyn rajoittamiseen' : 'Right to restriction'}</strong>: {language === 'fi'
                  ? 'Oikeus pyytää tietojesi käsittelyn rajoittamista.'
                  : 'The right to request restriction of processing.'}
              </li>
              <li>
                <strong>{language === 'fi' ? 'Oikeus siirtää tiedot järjestelmästä toiseen' : 'Right to data portability'}</strong>: {language === 'fi'
                  ? 'Oikeus saada tietosi jäsennellyssä, yleisesti käytetyssä ja koneellisesti luettavassa muodossa.'
                  : 'The right to receive your data in a structured, commonly used, and machine-readable format.'}
              </li>
              <li>
                <strong>{language === 'fi' ? 'Vastustamisoikeus' : 'Right to object'}</strong>: {language === 'fi'
                  ? 'Oikeus vastustaa tietojesi käsittelyä tietyissä tilanteissa.'
                  : 'The right to object to processing in certain situations.'}
              </li>
            </ul>
            <p className="mt-4">
              {language === 'fi'
                ? 'Voit käyttää näitä oikeuksia ottamalla yhteyttä meihin alla olevien yhteystietojen kautta. Pyrimme vastaamaan pyyntöösi 30 päivän kuluessa.'
                : 'You can exercise these rights by contacting us using the contact details below. We will aim to respond to your request within 30 days.'}
            </p>
            <p className="mt-4">
              {language === 'fi'
                ? 'Sinulla on myös oikeus tehdä valitus tietosuojaviranomaiselle, jos katsot, että henkilötietojesi käsittely rikkoo sovellettavaa tietosuojalainsäädäntöä.'
                : 'You also have the right to lodge a complaint with a data protection authority if you believe that the processing of your personal data infringes applicable data protection laws.'}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              {language === 'fi' ? '7. Evästeet ja seurantateknologiat' : '7. Cookies and tracking technologies'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Käytämme evästeitä ja muita seurantateknologioita parantaaksemme käyttökokemustasi sivustollamme. Lisätietoja evästeiden käytöstä löydät '
                : 'We use cookies and other tracking technologies to enhance your experience on our website. For more information about our use of cookies, please see our '}
              <Link to="/cookies" className="text-primary hover:underline">
                {language === 'fi' ? 'evästekäytännöstämme' : 'Cookie Policy'}
              </Link>.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              {language === 'fi' ? '8. Tietoturva' : '8. Data security'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Olemme toteuttaneet asianmukaiset tekniset ja organisatoriset toimenpiteet henkilötietojesi suojaamiseksi luvattomalta pääsyltä, käytöltä, muuttamiselta tai tuhoamiselta. Näihin toimenpiteisiin kuuluvat muun muassa tietojen salaus, pääsynhallinta ja säännölliset tietoturva-arvioinnit.'
                : 'We have implemented appropriate technical and organizational measures to protect your personal data against unauthorized access, use, alteration, or destruction. These measures include data encryption, access controls, and regular security assessments.'}
            </p>
            <p className="mt-4">
              {language === 'fi'
                ? 'Vaikka pyrimme suojaamaan tietosi, emme voi taata, että tiedonsiirto internetissä on täysin turvallista. Kaikki tiedonsiirto tapahtuu omalla vastuullasi.'
                : 'While we strive to protect your information, we cannot guarantee that data transmission over the internet is completely secure. All data transmissions are done at your own risk.'}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              {language === 'fi' ? '9. Yhteystiedot' : '9. Contact us'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Jos sinulla on kysyttävää tästä tietosuojakäytännöstä tai haluat käyttää tietosuojaoikeuksiasi, ota yhteyttä meihin:'
                : 'If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:'}
            </p>
            <p className="mt-2">
              <Link to="/contact" className="text-primary hover:underline">
                {language === 'fi' ? 'Yhteystiedot' : 'Contact Page'}
              </Link>
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-3">
              {language === 'fi' ? '10. Muutokset tietosuojakäytäntöön' : '10. Changes to this Privacy Policy'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Voimme päivittää tätä tietosuojakäytäntöä ajoittain. Päivitetty versio julkaistaan sivustollamme uudella päivämäärällä. Suosittelemme tarkistamaan tämän sivun säännöllisesti pysyäksesi ajan tasalla muutoksista.'
                : 'We may update this Privacy Policy from time to time. The updated version will be posted on our website with a new effective date. We encourage you to review this page periodically to stay informed of any changes.'}
            </p>
            <p className="mt-2">
              {language === 'fi'
                ? 'Viimeksi päivitetty: 15.05.2025'
                : 'Last updated: May 15, 2025'}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
