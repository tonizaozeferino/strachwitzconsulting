import type { Metadata } from 'next';
import CTABar from '@/components/ui/CTABar';

export const metadata: Metadata = {
  title: 'Strachwitz Ventures - Smart Capital für den industriellen Mittelstand',
  description: 'Investitionen in innovative mittelständische Unternehmen mit Fokus auf industrielle Transformation und nachhaltiges Wachstum.',
  openGraph: {
    title: 'Strachwitz Ventures - Smart Capital für den industriellen Mittelstand',
    description: 'Investitionen in innovative mittelständische Unternehmen.',
  },
};

const investmentFocus = [
  {
    title: 'Industrielle Transformation',
    description: 'Wir investieren in mittelständische Unternehmen, die durch digitale Technologien und innovative Geschäftsmodelle ihre Industrie transformieren.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: 'Nachhaltige Geschäftsmodelle',
    description: 'Fokus auf Unternehmen mit skalierbaren, profitablen und nachhaltigen Geschäftsmodellen im Bereich €50M-1Mrd Umsatz.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Operative Exzellenz',
    description: 'Wir bringen über 20 Jahre Führungserfahrung in Vertrieb, Operations und digitaler Transformation ein.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Strategische Partnerschaft',
    description: 'Mehr als Kapital: Wir sind aktive Partner in der Wachstumsphase mit Netzwerk, Expertise und operativer Unterstützung.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const sectors = [
  {
    name: 'Industrielle Fertigung',
    description: 'Maschinen- und Anlagenbau, Automatisierung, Smart Manufacturing'
  },
  {
    name: 'Food & Agribusiness',
    description: 'Lebensmittelproduktion, Vertrieb, Supply Chain Innovation'
  },
  {
    name: 'B2B-Technologie',
    description: 'Industrial IoT, SaaS, digitale Plattformen für den Mittelstand'
  },
  {
    name: 'Nachhaltige Technologien',
    description: 'CleanTech, Kreislaufwirtschaft, ressourceneffiziente Produktion'
  }
];

const valueAdd = [
  {
    title: 'Vertriebsexzellenz',
    description: 'Aufbau und Skalierung von Vertriebsorganisationen, internationale Markterschließung',
    metrics: 'Erfahrung: €30M → €43M Umsatzwachstum'
  },
  {
    title: 'Digitale Transformation',
    description: 'KI-gestützte Prozessoptimierung, CRM-Enhancement, Demand Planning',
    metrics: '30-50% Forecast-Verbesserung, 40% Effizienzsteigerung'
  },
  {
    title: 'Internationale Expansion',
    description: 'Markteintritt, Exportstrukturen, Multi-Channel Go-to-Market',
    metrics: 'Projekte in 30+ Ländern'
  },
  {
    title: 'M&A & Integrationen',
    description: 'Buy-and-Build Strategien, Post-Merger Integration, Synergieentwicklung',
    metrics: '20 Jahre M&A-Erfahrung'
  }
];

export default function VenturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Strachwitz Ventures
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Smart Capital für den industriellen Mittelstand
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Wir investieren in innovative mittelständische Unternehmen und begleiten sie mit operativer Expertise auf ihrem Wachstumspfad.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Focus Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Unser Investmentfokus
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir suchen mittelständische Unternehmen, die bereit sind für die nächste Wachstumsphase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentFocus.map((focus, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary">
                  {focus.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  {focus.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Zielbranchen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {sector.name}
                </h3>
                <p className="text-gray-600">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Add Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Mehr als Kapital
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Als operativer Investor bringen wir bewährte Methoden und über 20 Jahre Führungserfahrung ein.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueAdd.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {value.description}
                </p>
                <div className="bg-accent text-primary px-4 py-2 rounded-lg inline-block text-sm font-semibold">
                  {value.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Criteria Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                Investmentkriterien
              </h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-4">
                    Unternehmensprofil
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Umsatz: €50M - €1Mrd</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">EBITDA-Marge: &gt;10%</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Etablierte Marktposition</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Professionelles Management</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-4">
                    Wachstumspotenzial
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Digitalisierungspotenzial</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Internationale Expansion</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Buy-and-Build Möglichkeiten</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Operative Verbesserungen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                António Freiherr von Strachwitz
              </h2>
              <p className="text-lg font-heading font-bold text-secondary mb-2">
                Gründer & Managing Partner
              </p>
              <p className="text-gray-600 mb-4">
                Über 20 Jahre Führungserfahrung in Vertrieb und Operations
              </p>
              <div className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Als operativer Investor kombiniere ich Kapital mit über zwei Jahrzehnten praktischer Erfahrung im Aufbau und der Skalierung von mittelständischen Unternehmen.
                </p>
                <p>
                  Mein Fokus liegt auf industriellen Unternehmen, bei denen ich durch operative Exzellenz, digitale Transformation und internationale Expansion nachhaltige Wertsteigerung erreichen kann.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABar
        title="Investmentgespräch vereinbaren"
        description="Sprechen Sie mit uns über Ihre Wachstumspläne"
        ctaText="Kontakt aufnehmen"
        ctaLink="/kontakt"
      />
    </>
  );
}
