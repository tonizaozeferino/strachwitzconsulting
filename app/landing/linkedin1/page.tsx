import type { Metadata } from "next";
import CTABar from "@/components/ui/CTABar";

export const metadata: Metadata = {
  title: "Bayern Digital Boost - Strachwitz Consulting",
  description:
    "Unterstuetzung fuer bayerische Unternehmen auf dem Weg zur digitalen Exzellenz: Foerdermittel, Roadmaps und Umsetzung aus einer Hand.",
  openGraph: {
    title: "Bayern Digital Boost - Strachwitz Consulting",
    description:
      "Foerderfaehige Digitalisierungsprojekte, die Umsatz steigern und Prozesse modernisieren.",
  },
};

const programHighlights = [
  {
    title: "Foerderberatung end-to-end",
    description:
      "Identifikation der passenden Landesprogramme (z.B. Bayerischer Digitalbonus, Innovationsgutscheine) inklusive Antragstellung und Nachweisfuehrung.",
  },
  {
    title: "Digitalstrategie mit Branchenfokus",
    description:
      "Aufbau einer klaren Roadmap, die Ihre Vertriebs- und Operationsziele mit digitalen Initiativen verbindet.",
  },
  {
    title: "Umsetzung und Change Management",
    description:
      "Begleitung von Pilotprojekten, Auswahl der Technologiepartner und Enablement Ihrer Teams.",
  },
];

const useCases = [
  {
    title: "Vertrieb 4.0 fuer mittelstaendische Hersteller",
    results: [
      "KI-gestuetztes Opportunity Scoring und Forecasting",
      "CRM-Prozesse, die zu schnelleren Abschluessen fuehren",
      "Digitales Partner- und Haendlerportal mit Echtzeitdaten",
    ],
  },
  {
    title: "Smart Operations in der Produktion",
    results: [
      "Transparente Supply-Chain Dashboards vom Rohstoff bis zur Auslieferung",
      "Predictive Maintenance fuer Linien- und Fuellanlagen",
      "Automatisierte Berichte fuer Management und Foerderstellen",
    ],
  },
  {
    title: "Digitale Kundenerlebnisse",
    results: [
      "Self-Service Portale mit personalisierten Angeboten",
      "Digitales Onboarding und Vertragsmanagement",
      "Verzahnung von Marketing Automation, Vertrieb und Service",
    ],
  },
];

const implementationSteps = [
  {
    step: "1",
    title: "Kick-off Workshop",
    description:
      "Analyse Ihres Ist-Zustands, Einschaetzung der Foerderfaehigkeit und Priorisierung der Digitalhebel.",
  },
  {
    step: "2",
    title: "Foerderantrag & Business Case",
    description:
      "Erstellung aller Unterlagen inklusive Wirtschaftlichkeitsrechnung, ROI-Szenarien und Ressourcenplanung.",
  },
  {
    step: "3",
    title: "Umsetzungsbegleitung",
    description:
      "Pilotierung der priorisierten Use Cases, Steuerung der Dienstleister und Change Kommunikation.",
  },
  {
    step: "4",
    title: "Skalierung & Controlling",
    description:
      "Rollout auf weitere Standorte, Aufbau von KPIs sowie Foerdermittel-Reporting.",
  },
];

const faqs = [
  {
    question: "Welche Unternehmen profitieren vom Bayern Digital Boost?",
    answer:
      "Vor allem mittelstaendische Unternehmen mit Sitz in Bayern, die ihre Digitalisierung vorantreiben moechten und Foerdermittel effizient nutzen wollen.",
  },
  {
    question: "Wie schnell kann mit einem Projekt gestartet werden?",
    answer:
      "Innerhalb von 2 Wochen erhalten Sie eine klare Entscheidungsgrundlage. Antraege dauern je nach Programm 3-6 Wochen, danach beginnt die Umsetzung.",
  },
  {
    question: "Koennen bestehende Systeme eingebunden werden?",
    answer:
      "Ja. Wir arbeiten bevorzugt mit Ihrer vorhandenen Systemlandschaft und erweitern sie gezielt um moderne Cloud- und KI-Module.",
  },
  {
    question: "Ist der Bayern Digital Boost mit anderen Foerderprogrammen kombinierbar?",
    answer:
      "Viele Programme lassen sich stapeln, solange unterschiedliche Projektteile adressiert werden. Wir pruefen fuer Sie die optimale Kombination.",
  },
];

export default function BayernDigitalBoostPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-white bg-opacity-10 text-sm uppercase tracking-wide mb-6">
              Bayern Digital Boost
            </span>
            <h1 className="text-3xl lg:text-5xl font-heading font-bold leading-tight mb-6">
              Digital foerderfaehig wachsen in Bayern
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
              Ich begleite bayerische Unternehmen vom Foerderantrag bis zum erfolgreichen Go-Live ihrer Digitalprojekte. Transparent, pragmatisch und mit klarer Rendite.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
                Was das Programm auszeichnet
              </h2>
              <p className="text-gray-600">
                Bayern Digital Boost verbindet foerderfaehige Digitalisierung mit konkreten Wachstumshebeln. Gemeinsam bauen wir Projekte, die Ihre Teams entlasten und neue Ertraege erschliessen.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {programHighlights.map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">
              Typische Einsatzfelder
            </h2>
            <p className="mt-4 text-gray-600">
              Jede Initiative wird an messbaren KPIs aus Vertrieb, Produktion und Service gekoppelt.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {useCase.title}
                </h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  {useCase.results.map((point) => (
                    <li key={point} className="flex items-start">
                      <span className="mt-1 mr-3 inline-flex w-3 h-3 rounded-full bg-secondary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">
              So laeuft die Zusammenarbeit
            </h2>
            <p className="mt-4 text-gray-600">
              Strukturierter Ablauf mit klaren Entscheidungsmeilensteinen und transparenter Kommunikation mit allen Stakeholdern.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step) => (
              <div key={step.step} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-8">
              Haeufige Fragen
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-primary mb-3">
                Antonio Freiherr von Strachwitz
              </h2>
              <p className="text-lg font-heading font-bold text-secondary mb-2">
                BAFA-zertifizierter Berater und Interim Executive
              </p>
              <p className="text-gray-600">
                Mehr als 20 Jahre Erfahrung im Aufbau digitaler Geschaeftsmodelle in Lebensmittel, Maschinenbau und B2B-Dienstleistungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABar
        title="Projekt besprechen"
        description="Sichern Sie sich einen individuellen Termin, um Foerderchancen und Roadmap fuer Ihr Unternehmen zu klaeren."
        ctaText="Jetzt Erstgespraech buchen"
        ctaLink="/kontakt"
      />
    </>
  );
}
