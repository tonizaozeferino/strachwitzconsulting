import type { Metadata } from 'next';
import CTABar from '@/components/ui/CTABar';

export const metadata: Metadata = {
  title: 'Digitale Transformation für den Mittelstand - Strachwitz Consulting',
  description: 'BAFA-zertifizierter Berater für digitale Transformation. Staatliche Förderung durch das BAFA "go-digital" Programm.',
  openGraph: {
    title: 'Digitale Transformation für den Mittelstand - Strachwitz Consulting',
    description: 'BAFA-zertifizierter Berater für digitale Transformation.',
  },
};

const entryServices = [
  {
    title: 'KI-Readiness Assessment für Vertrieb & Operations',
    badge: 'BAFA-förderfähig',
    description: 'Der perfekte Einstieg in Ihre digitale Transformation. In nur 1-2 Wochen analysiere ich Ihre Vertriebs- und Exportprozesse und zeige konkret auf, wo KI Umsatz steigert und Kosten senkt.',
    deliverables: [
      'Analyse Ihrer aktuellen Vertriebs- und Operationsprozesse',
      '3-5 High-ROI Use Cases speziell für Ihr Unternehmen',
      'Konkrete ROI-Projektionen (Umsatzsteigerung, Kosteneinsparung, Effizienzgewinne)',
      'Klare Roadmap: Quick Wins (4-8 Wochen) vs. strategische Initiativen (6-12 Monate)',
      'Technologie-Empfehlungen (CRM-Tools, Forecasting-Plattformen, Automatisierung)'
    ],
    suitable: 'Unternehmen mit €10-100M Umsatz, die wissen möchten, wo sie mit KI anfangen sollen'
  },
  {
    title: 'KI-gestützte Vertriebsoptimierung',
    badge: 'BAFA-förderfähig',
    description: 'Ich habe Vertriebsorganisationen von €30M auf €43M und Exportstrukturen mit +50% Wachstum aufgebaut. Ich implementiere KI-gestützte Forecasts und Lead-Scoring, die Ihre Abschlussrate um 20% erhöhen und Reporting-Aufwand um 40% senken.',
    deliverables: [
      'Lead-Generation und -Qualifizierungs-Automatisierung',
      'CRM-Enhancement mit KI-Fähigkeiten',
      'Lead-Scoring-Modelle (welche Prospects priorisieren)',
      'Sales Forecasting mit Predictive Analytics',
      'AI-powered Sales Enablement Tools',
      'Sales Performance Analytics und Coaching'
    ],
    results: [
      '20% höhere Conversion Rates',
      '30% schnellere Sales Cycles',
      '40% weniger Reporting-Aufwand'
    ],
    suitable: 'Mittelständische Unternehmen mit traditionellem Vertriebsmodell, die digital durchstarten wollen'
  },
  {
    title: 'Operations Excellence durch KI-gestützte Planung',
    badge: 'BAFA-förderfähig',
    description: 'Ich habe Vertriebs- und Exportstrukturen für Molkereien, Käseproduzenten und Lebensmittelhersteller aufgebaut. Ich kenne die Herausforderungen schwacher Forecasts, manueller Reportings und verpasster Geschäfte. Ich implementiere ein KI-gestütztes Sales Cockpit, das Forecast-Fehler um 30-50% reduziert, Win-Rates um 20% steigert und Reporting-Zeit um 40% senkt.',
    deliverables: [
      'Supply Chain und Inventory-Analyse',
      'Demand Forecasting mit Machine Learning',
      'Inventory-Optimierung (Reduzierung von Stockouts und Überbeständen)',
      'Dynamische Preis- und Promotionsplanung',
      'Automatisierte Demand-Planning-Workflows',
      'Real-time Inventory Visibility Dashboards'
    ],
    results: [
      '30-50% genauere Forecasts',
      '15-25% Reduzierung der Lagerkosten',
      '20-30% weniger Stockouts'
    ],
    suitable: 'Hersteller, Distributoren und Lebensmittelproduzenten mit komplexen Supply Chains'
  }
];

const comprehensivePackages = [
  {
    title: 'Vertriebstransformation Komplett',
    badge: 'BAFA-förderfähig',
    description: 'End-to-End Sales Digitalisierung mit vollständiger Analyse, AI-powered Tools und Team Enablement über 2-3 Monate.',
    includes: [
      'KI-Readiness Assessment',
      'KI-gestützte Vertriebsoptimierung',
      'Sales Team Transformation & Enablement',
      '12-Monats-Implementierungs-Roadmap'
    ]
  },
  {
    title: 'Operations Excellence Paket',
    badge: 'BAFA-förderfähig',
    description: 'Operative Effizienz durch KI/Digital Tools mit Fokus auf Supply Chain, Demand Planning und Dateninfrastruktur.',
    includes: [
      'Operations Diagnostik',
      'KI-gestützte Planungsstrategie',
      'Dateninfrastruktur für operative Entscheidungen',
      'Pilot-Projekt-Roadmap'
    ]
  },
  {
    title: 'Wachstums-Accelerator',
    badge: 'BAFA-förderfähig',
    description: 'Umsatzwachstum durch Sales- und Channel-Optimierung mit vollständiger Digitalisierungsstrategie und Multi-Channel Go-to-Market.',
    includes: [
      'Vertriebs-Digitalisierungs-Roadmap',
      'KI-gestützte Sales Enablement',
      'Multi-Channel Go-to-Market Approach',
      'Technologie-Auswahl und Implementierungs-Roadmap'
    ]
  }
];

const bafaSteps = [
  {
    step: '1',
    title: 'Kostenlose Erstberatung',
    description: 'Wir prüfen, ob Ihr Unternehmen BAFA-förderfähig ist und welches Paket am besten passt.'
  },
  {
    step: '2',
    title: 'BAFA-Antrag',
    description: 'Ich unterstütze Sie bei der Antragstellung (ca. 2-4 Wochen Bearbeitungszeit).'
  },
  {
    step: '3',
    title: 'Projektdurchführung',
    description: 'Nach Förderzusage starten wir mit der Beratung (typisch 3-6 Monate).'
  },
  {
    step: '4',
    title: 'Abschluss & Erstattung',
    description: 'Nach Projektabschluss erhalten Sie die staatliche Förderung.'
  }
];

const faqs = [
  {
    question: 'Was bedeutet BAFA-Förderung?',
    answer: 'Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) unterstützt mittelständische Unternehmen bei der Digitalisierung durch Zuschüsse zu Beratungsleistungen.'
  },
  {
    question: 'Wie lange dauert die Antragstellung?',
    answer: 'Ich unterstütze Sie bei der Antragstellung. Die Bearbeitung durch BAFA dauert in der Regel 2-4 Wochen.'
  },
  {
    question: 'Was passiert, wenn der Antrag abgelehnt wird?',
    answer: 'Das kommt selten vor bei förderfähigen Unternehmen. Wir prüfen vorab Ihre Eignung.'
  },
  {
    question: 'Kann ich mehrere Projekte fördern lassen?',
    answer: 'Ja, nach Abschluss eines Projekts können weitere Förderanträge gestellt werden.'
  }
];

export default function KIBeratungPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Digitale Transformation für den Mittelstand
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Als BAFA-zertifizierter Berater unterstütze ich mittelständische Unternehmen bei der digitalen Transformation mit bewährten Methoden aus über 15 Jahren Führungserfahrung.
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Profitieren Sie von staatlicher Förderung durch das BAFA &quot;go-digital&quot; Programm.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
              Ihre Vorteile
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-2">BAFA-Förderung</h3>
              <p className="text-gray-600">reduziert Ihre Investitionskosten erheblich</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-2">Praxiserprobte Methoden</h3>
              <p className="text-gray-600">Kein Consulting-Blabla, sondern Strategien, die ich selbst erfolgreich umgesetzt habe</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-2">Messbare Ergebnisse</h3>
              <p className="text-gray-600">+44% Umsatzwachstum bei einem Lebensmittelhersteller, +51% bei einem Milchverarbeiter, +21% bei einem internationalen Käseproduzenten</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-2">Schnelle Wirkung</h3>
              <p className="text-gray-600">Erste Erfolge bereits nach 4-8 Wochen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Services Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Empfohlene Einstiegsleistungen
            </h2>
          </div>
          
          <div className="space-y-12">
            {entryServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    {service.title}
                  </h3>
                  <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {service.badge}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-heading font-bold text-primary mb-3">Was Sie erhalten:</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {service.results && (
                    <div>
                      <h4 className="text-lg font-heading font-bold text-primary mb-3">Messbare Ergebnisse:</h4>
                      <ul className="space-y-2">
                        {service.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-primary mb-1">Perfekt für:</p>
                  <p className="text-gray-600">{service.suitable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Packages Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Umfassende Transformationspakete
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {comprehensivePackages.map((pkg, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-secondary">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-heading font-bold text-primary">
                    {pkg.title}
                  </h3>
                  <span className="bg-accent text-primary px-2 py-1 rounded-full text-xs font-semibold">
                    {pkg.badge}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pkg.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-heading font-bold text-primary mb-3">Beinhaltet:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
              Mein Differenzierungsmerkmal
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-xl font-heading font-bold text-primary mb-6">
                Ich bin kein typischer Berater.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ich habe über 20 Jahre lang Vertrieb und Export im Mittelstand geleitet – bei einem Lebensmittelhersteller +44% Umsatzwachstum erzielt, bei einem Käseproduzenten P&L-Verantwortung getragen, bei Molkereien und Food-Service-Unternehmen internationale Märkte aufgebaut.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Heute helfe ich Mittelständlern, genau das zu tun, was bei mir funktioniert hat: Vertrieb und Operations mit KI modernisieren. <strong>Kein Consulting-Blabla, sondern praxiserprobte Methoden.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BAFA Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              So funktioniert die BAFA-Förderung
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bafaSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-accent rounded-xl p-6">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">
              Förderfähig sind Unternehmen mit:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">3-100 Mitarbeitern</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Rechtsform: GmbH, AG, OHG, KG</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Geschäftstätigkeit seit mehr als 2 Jahren</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Keine finanzielle Schieflage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
              Ihre nächsten Schritte
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  Kontaktieren Sie mich
                </h3>
                <p className="text-gray-600 text-sm">
                  für ein kostenloses Erstgespräch
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  BAFA-Förderfähigkeit
                </h3>
                <p className="text-gray-600 text-sm">
                  Wir prüfen Ihre Eignung
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  Maßgeschneidertes Angebot
                </h3>
                <p className="text-gray-600 text-sm">
                  Ich erstelle ein passendes Angebot
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  Transformation starten
                </h3>
                <p className="text-gray-600 text-sm">
                  Nach Förderzusage starten wir
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Häufig gestellte Fragen
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-heading font-bold text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                António Freiherr von Strachwitz
              </h2>
              <p className="text-lg font-heading font-bold text-secondary mb-2">
                BAFA-zertifizierter Berater für Digitalisierung
              </p>
              <p className="text-gray-600">
                Über 15 Jahre Führungserfahrung in Vertrieb und Operations
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABar
        title="Kontakt aufnehmen"
        description="Lassen Sie uns gemeinsam Ihr KI-Potenzial identifizieren und die ersten Schritte planen."
        ctaText="Kontakt aufnehmen"
        ctaLink="/kontakt"
      />
    </>
  );
}