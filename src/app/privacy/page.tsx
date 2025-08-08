import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tietosuojakäytäntö - Lyyli AI',
  description: 'Lyyli AI:n tietosuojakäytäntö ja tietojen käsittelykäytännöt GDPR-yhteensopivasti.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-primary mb-8">
            Tietosuojakäytäntö
          </h1>
          
          {/* Introduction */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-4">
              Tämä tietosuojakäytäntö kuvaa, miten Lyyli AI Oy (&ldquo;me&rdquo;, &ldquo;meidän&rdquo;) keräämme, käytämme ja suojaamme henkilötietojasi. 
              Olemme sitoutuneet suojaamaan yksityisyyttäsi ja noudattamaan kaikkia sovellettavia tietosuoja-asetuksia, 
              mukaan lukien EU:n yleinen tietosuoja-asetus (GDPR).
            </p>
            <p className="text-lg text-gray-700">
              Käyttämällä Lyyli.ai-palveluitamme hyväksyt tämän tietosuojakäytännön. Jos et hyväksy tätä käytäntöä, 
              älä käytä palveluitamme.
            </p>
          </div>

          {/* Numbered Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. Mitä tietoja keräämme?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Keräämme seuraavia henkilötietoja:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Henkilökohtaiset tiedot:</strong> Nimi, sähköpostiosoite, puhelinnumero, työnantaja ja ammattinimike</li>
                  <li><strong>Automaattisesti kerätyt tiedot:</strong> IP-osoite, selaintyyppi, käyttöjärjestelmä, sivuston käyttödata</li>
                  <li><strong>Evästeet ja seurantateknologiat:</strong> Evästeet, pikselit ja muut seurantateknologiat</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Miten käytämme tietojasi?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Käytämme henkilötietojasi seuraaviin tarkoituksiin:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Palveluidemme tarjoaminen ja ylläpito</li>
                  <li>Asiakaspalvelu ja tuki</li>
                  <li>Palveluidemme henkilökohtaistaminen</li>
                  <li>Markkinointi ja viestintä (suostumuksellasi)</li>
                  <li>Lakienmukaiset velvoitteet</li>
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <h3 className="font-bold text-primary mb-2">Analytiikka ja seuranta</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Käytämme seuraavia analytiikkatyökaluja:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
                    <li>Google Analytics 4 - sivuston käytön seurantaan</li>
                    <li>Datafast Analytics - suorituskyvyn seurantaan</li>
                    <li>HubSpot - markkinointiautomaatioon ja asiakassuhteiden hallintaan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. Oikeusperusta tietojen käsittelylle
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Tietojesi käsittely perustuu seuraaviin oikeusperusteisiin:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Suostumus:</strong> Kun olet antanut selkeän suostumuksesi</li>
                  <li><strong>Oikeutettu etu:</strong> Palveluidemme parantamiseen ja kehittämiseen</li>
                  <li><strong>Sopimuksen täyttäminen:</strong> Palveluidemme tarjoamiseksi</li>
                  <li><strong>Lakienmukainen velvoite:</strong> Lainsäädännön vaatimusten täyttämiseksi</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. Tietojen jakaminen ja siirto
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Emme myy, vuokraa tai jaa henkilötietojasi kolmansille osapuolille, paitsi:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Suostumuksellasi</li>
                  <li>Palveluntarjoajillemme (esim. pilvipalvelut)</li>
                  <li>Lakienmukaisiin vaatimuksin</li>
                  <li>Virkamiesten pyynnöstä laillisessa tarkoituksessa</li>
                </ul>
                <p>
                  Tietojasi voidaan siirtää EU:n ulkopuolelle, mutta vain riittävien suojatoimien kanssa.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                5. Tietojen säilyttäminen
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Säilytämme henkilötietojasi vain niin kauan kuin se on tarpeen:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Palveluidemme tarjoamiseksi</li>
                  <li>Lakienmukaisten velvoitteiden täyttämiseksi</li>
                  <li>Riippuvuuksien ratkaisemiseksi</li>
                  <li>Enintään 2 vuotta viimeisimmän käytön jälkeen</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                6. Sinun oikeutesi
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  GDPR:n mukaisesti sinulla on seuraavat oikeudet:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Oikeus tietoihin:</strong> Saat tietää, mitä tietoja keräämme</li>
                  <li><strong>Oikeus korjaukseen:</strong> Voit pyytää virheellisten tietojen korjaamista</li>
                  <li><strong>Oikeus poistoon:</strong> Voit pyytää tietojesi poistamista</li>
                  <li><strong>Oikeus rajoittamiseen:</strong> Voit rajoittaa tietojesi käsittelyä</li>
                  <li><strong>Oikeus tietojen siirtoon:</strong> Voit saada tietosi siirrettävässä muodossa</li>
                  <li><strong>Oikeus vastustamiseen:</strong> Voit vastustaa tietojesi käsittelyä</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                7. Evästeet ja seurantateknologiat
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Käytämme evästeitä ja muita seurantateknologioita parantaaksemme käyttökokemustasi. 
                  Katso tarkemmat tiedot <a href="/cookies" className="text-primary hover:underline">evästekäytännöstämme</a>.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                8. Tietoturva
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Olemme sitoutuneet suojaamaan tietojasi:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Salaus kaikissa tiedonsiirroissa</li>
                  <li>Turvalliset palvelimet ja infrastruktuuri</li>
                  <li>Säännölliset tietoturva-auditit</li>
                  <li>Henkilökunnan koulutus tietoturvasta</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Huomioithan, että internet ei ole 100% turvallinen ympäristö. Emme voi taata tietojesi 
                  ehdottomaa turvallisuutta, mutta teemme parhaamme suojellaksemme niitä.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                9. Yhteystiedot
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Jos sinulla on kysymyksiä tietosuojakäytännöstämme tai haluat käyttää oikeuksiasi, 
                  ota yhteyttä:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Lyyli AI Oy</strong></p>
                  <p>Sähköposti: privacy@lyyli.ai</p>
                  <p>Puhelin: +358 40 961 9224</p>
                  <p>Osoite: [Yrityksen osoite]</p>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                10. Muutokset tietosuojakäytäntöön
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Pidätämme oikeuden päivittää tätä tietosuojakäytäntöä. Merkitsevät muutokset 
                  ilmoitetaan sähköpostitse tai sivustollamme. Suosittelemme tarkistamaan 
                  tietosuojakäytäntömme säännöllisesti.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-primary font-medium">
                    Viimeksi päivitetty: 15.05.2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}