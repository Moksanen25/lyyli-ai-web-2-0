'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Users, Star, Zap } from 'lucide-react';
import Link from 'next/link';

const FinalCTA: React.FC = () => {
  const benefits = [
    "80% aikaa säästetty viestintään",
    "Ammattimainen brändi-ilme",
    "GDPR-yhteensopiva ja turvallinen",
    "Suomalainen tuki 24/7"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" />
            Rajoitettu tarjous
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Aloita ilmainen kokeilu tänään
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Liity yli 500 asiantuntijaorganisaation joukkoon, jotka ovat jo parantaneet viestintäänsä Lyylin avulla. Ei luottokorttia vaadita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Miksi valita Lyyli nyt?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency Elements */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="h-6 w-6 text-yellow-400" />
                <span className="font-semibold">Rajoitettu tarjous</span>
              </div>
              <p className="text-white/90 mb-4">
                Ensimmäiset 100 uutta asiakasta saavat 30% alennuksen ensimmäisestä kuukaudesta.
              </p>
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <Users className="h-4 w-4" />
                <span>Vain 23 paikkaa jäljellä</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
              </div>
              <p className="text-white/90 text-sm">
                &ldquo;Lyyli on muuttanut tapamme viestiä täysin. Säästämme 70% aikaa viestintään.&rdquo;
              </p>
              <p className="text-white/70 text-xs mt-2">- Mikko Virtanen, Toimitusjohtaja</p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-white/90">Ei sitoutumisaikaa</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-white/90">30 päivän peruutusoikeus</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-white/90">Ilmainen kokeilu</span>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Form */}
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Aloita ilmainen kokeilu
              </h3>
              <p className="text-white/90">
                Ei luottokorttia vaadita • 30 päivän kokeilu • Peruuta milloin tahansa
              </p>
            </div>

            {/* Quick Start Form */}
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Yrityksen nimi"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Sähköpostiosoite"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Puhelinnumero"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="" className="text-gray-800">Valitse organisaation koko</option>
                  <option value="1-10" className="text-gray-800">1-10 henkilöä</option>
                  <option value="11-50" className="text-gray-800">11-50 henkilöä</option>
                  <option value="51-200" className="text-gray-800">51-200 henkilöä</option>
                  <option value="200+" className="text-gray-800">200+ henkilöä</option>
                </select>
              </div>

              <Button 
                size="lg"
                className="w-full bg-white text-primary hover:bg-gray-100 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                asChild
              >
                <Link href="/contact">
                  <Zap className="mr-2 h-5 w-5" />
                  Aloita ilmainen kokeilu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <p className="text-xs text-white/70 text-center">
                Klikkaamalla hyväksyt <Link href="/privacy" className="underline">tietosuojakäytäntömme</Link> ja <Link href="/terms" className="underline">käyttöehdot</Link>
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-sm text-white/80 mb-2">
                Tarvitsetko apua?
              </p>
              <p className="text-sm text-white/90">
                +358 40 961 9224 • hello@lyyli.ai
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm text-white/80">Asiakkaita</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-sm text-white/80">Tyytyväisyys</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">70%</div>
            <div className="text-sm text-white/80">Aikaa säästetty</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm text-white/80">Suomalainen tuki</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 