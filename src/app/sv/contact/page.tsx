import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakta oss - Lyyli AI',
  description: 'Kontakta Lyyli AI för frågor, support eller för att komma igång med vår AI-kommunikationsplattform.',
};

export default function ContactPageSv() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Kontakta{' '}
            <span className="text-blue-600">oss</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Vi är här för att hjälpa dig. Kontakta oss för frågor, support eller 
            för att komma igång med Lyyli AI.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Skicka ett meddelande</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Förnamn
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ditt förnamn"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Efternamn
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ditt efternamn"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="din@email.se"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Företag
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ditt företag"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Berätta för oss hur vi kan hjälpa dig..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Skicka meddelande
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformation</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">E-post</h3>
                      <p className="text-gray-600">info@lyyli.ai</p>
                      <p className="text-gray-600">support@lyyli.ai</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                      <p className="text-gray-600">+46 8 123 45 67</p>
                      <p className="text-gray-600">Måndag - Fredag, 9:00 - 17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Adress</h3>
                      <p className="text-gray-600">Lyyli AI AB</p>
                      <p className="text-gray-600">Storgatan 123</p>
                      <p className="text-gray-600">111 22 Stockholm</p>
                      <p className="text-gray-600">Sverige</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Snabbåtgärder</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Boka demo</div>
                    <div className="text-sm text-gray-600">Se Lyyli AI i aktion</div>
                  </button>
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Teknisk support</div>
                    <div className="text-sm text-gray-600">Få hjälp med tekniska frågor</div>
                  </button>
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Partnerskap</div>
                    <div className="text-sm text-gray-600">Bli partner med oss</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vanliga frågor
            </h2>
            <p className="text-xl text-gray-600">
              Svar på de vanligaste frågorna vi får.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hur snart kan jag komma igång med Lyyli AI?
              </h3>
              <p className="text-gray-600">
                Du kan komma igång inom 24 timmar efter registrering. Vårt team hjälper dig 
                med onboarding och konfiguration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Erbjuder ni gratis provperiod?
              </h3>
              <p className="text-gray-600">
                Ja, vi erbjuder en 14-dagars gratis provperiod för alla planer. 
                Ingen kreditkort krävs för att komma igång.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Kan jag integrera Lyyli AI med mina befintliga verktyg?
              </h3>
              <p className="text-gray-600">
                Absolut! Vi erbjuder API:er och integrationer för de flesta populära 
                kommunikationsverktyg och CRM-system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
