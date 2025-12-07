import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Keine Angst vor KI: Ein praktischer Schnelleinstieg für Vertrieb & Büro im Mittelstand',
  description: 'Wie Ihre Mitarbeiter KI in 30–60 Minuten verstehen – und sofort produktiver am Computer arbeiten.',
  openGraph: {
    title: 'Keine Angst vor KI: Ein praktischer Schnelleinstieg',
    description: 'Wie Ihre Mitarbeiter KI in 30–60 Minuten verstehen – und sofort produktiver am Computer arbeiten.',
  },
};

const KeinenAngstVonKiPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              Keine Angst vor KI: Ein praktischer Schnelleinstieg für Vertrieb & Büro im Mittelstand
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Wie Ihre Mitarbeiter KI in 30–60 Minuten verstehen – und sofort produktiver am Computer arbeiten.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/kontakt" className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                15-Minuten-Gespräch vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For whom is this guide intended? */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                Für wen ist dieser Guide gedacht?
              </h2>
              <p className="text-lg text-gray-600">
                Dieser praktische Schnelleinstieg richtet sich an alle, die täglich mehrere Stunden am Computer arbeiten und ihre Produktivität steigern möchten:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">Ihr Profil</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Vertriebsmitarbeitende & Key Account Manager</li>
                  <li>Innendienst, Backoffice, Customer Service</li>
                  <li>Marketing-Teams im Mittelstand</li>
                  <li>Alle Büroangestellten mit viel Bildschirmarbeit</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">Was Sie hier bekommen</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Konkrete Beispiele, wie KI Ihnen Zeit spart</li>
                  <li>Fertige Prompts, die Sie direkt testen können</li>
                  <li>Eine Checkliste für Ihren KI-Pilot</li>
                  <li>Klare Hinweise zu Sicherheit und Grenzen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                        Das Problem: Viel Bildschirm, wenig Hebel
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">Ihr täglicher Kampf</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                            <li>Hunderte E-Mails pro Woche</li>
                            <li>Angebote und Präsentationen</li>
                            <li>Berichte unter Zeitdruck</li>
                            <li>Manuelle Routinearbeiten</li>
                        </ul>
                        <h3 className="text-2xl font-bold text-primary mb-4">Die Hürden</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>&ldquo;Zu technisch für mich&rdquo;</li>
                            <li>&ldquo;Keine Zeit dafür&rdquo;</li>
                            <li>&ldquo;Datenschutz-Bedenken&rdquo;</li>
                            <li>&ldquo;Zu viel Risiko&rdquo;</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-4">Das Ergebnis</h3>
                        <p className="text-gray-600 mb-4">
                            Sie arbeiten wie vor 5–10 Jahren, während andere bereits KI als Assistenten einsetzen und deutlich produktiver geworden sind.
                        </p>
                        <p className="text-gray-600">
                            Gleichzeitig hören Sie überall: &ldquo;KI wird alles verändern.&rdquo; Doch im Alltag passiert: nichts. CRM und ERP fühlen sich nach Pflicht an, nicht nach Hilfe. Die gute Nachricht: Das muss nicht so bleiben. Mit den richtigen ersten Schritten können Sie KI sofort als praktischen Helfer in Ihren Arbeitsalltag integrieren.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* What AI can realistically do for you */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                Was KI heute realistisch für Sie leisten kann
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">KI kann heute:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>E-Mails entwerfen, verbessern und kürzen</li>
                  <li>Professionelle Formulierungen in Sekunden statt Minuten</li>
                  <li>Angebotstexte und Follow-ups vorschlagen</li>
                  <li>Strukturierte Vorlagen für wiederkehrende Aufgaben</li>
                  <li>Besprechungsnotizen strukturieren</li>
                  <li>To-dos automatisch herausfiltern und übersichtlich aufbereiten</li>
                  <li>Texte vereinfachen und anpassen</li>
                  <li>Für verschiedene Zielgruppen passend formulieren</li>
                  <li>Ideen für Gespräche liefern</li>
                  <li>Vorbereitung auf Kundentermine und Einwandbehandlung</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Was KI nicht kann:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Ihre Kundenbeziehung ersetzen</li>
                  <li>Verantwortung übernehmen</li>
                  <li>Kontext perfekt verstehen</li>
                  <li>Strategische Entscheidungen treffen</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center bg-gray-100 p-4 rounded-lg">
              <p className="text-lg font-semibold text-primary">Merksatz: KI ist Ihr Assistent, nicht Ihr Chef. Sie behalten immer die Kontrolle und Verantwortung.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases and Prompts */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              5 konkrete Anwendungsfälle mit Beispiel-Prompts
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: 'E-Mails schneller schreiben',
                situation: 'Sie müssen einem Kunden professionell antworten, haben aber wenig Zeit.',
                prompt: 'Du bist mein E-Mail-Assistent. Ich bin Vertriebsmitarbeiter in einem deutschen Mittelstandsunternehmen. Formuliere eine höfliche, klare Antwort auf folgende Anfrage. Hauptpunkte: [Stichpunkte einfügen]. Ton: professionell, freundlich, nicht zu lang. Max. 150 Wörter. Sprache: Deutsch.',
              },
              {
                title: 'Angebote entwerfen',
                situation: 'Sie schreiben immer wieder ähnliche Angebote und Vorschläge.',
                prompt: 'Erstelle einen ersten Entwurf für ein Angebot für [Produkt/Dienstleistung] für einen Kunden aus der Branche [Branche]. Wichtig sind: [3 Hauptprobleme]. Gliedere in: Einleitung, Herausforderungen, Lösung, Nutzen, nächster Schritt. Sprache: Deutsch, seriös, klar.',
              },
              {
                title: 'Meetings zusammenfassen',
                situation: 'Viele Notizen nach Terminen, aber niemand liest sie wirklich.',
                prompt: 'Hier sind meine Notizen aus einem Kundentermin. Bitte fasse die wichtigsten Punkte zusammen, liste die getroffenen Entscheidungen auf und formuliere 5 konkrete To-dos mit Verantwortlichen. Sprache: Deutsch.',
              },
              {
                title: 'Kundengespräche vorbereiten',
                situation: 'Sie haben wenig Zeit zur Vorbereitung auf wichtige Termine.',
                prompt: 'Du bist mein Vertriebsassistent. Ich habe morgen ein Gespräch mit [Unternehmen, Branche, Größe]. Bitte gib mir: 1) eine kurze Übersicht zum Unternehmen, 2) mögliche Herausforderungen, 3) 5 gute Fragen für das Gespräch. Sprache: Deutsch.',
              },
              {
                title: 'Texte verständlicher machen',
                situation: 'Ihre internen Texte sind zu lang oder zu technisch formuliert.',
                prompt: 'Vereinfache den folgenden Text für einen nicht-technischen Geschäftsführer. Nutze kurze Sätze, Überschriften und Stichpunkte. Bewahre alle wichtigen Inhalte. Sprache: Deutsch.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-gray-600 mb-4 italic">&ldquo;{item.situation}&rdquo;</p>
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="font-mono text-sm text-gray-800">{item.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                        Checkliste: Bin ich bereit für KI im Alltag?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-primary mb-4">Meine Arbeit am PC</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="mr-2">☐</span> Ich verbringe täglich mehrere Stunden mit E-Mails, Dokumenten oder Reports</li>
                            <li className="flex items-start"><span className="mr-2">☐</span> Ich schreibe oft ähnliche Texte immer wieder neu</li>
                            <li className="flex items-start"><span className="mr-2">☐</span> Ich habe das Gefühl, viele Routineaufgaben zu erledigen</li>
                            <li className="flex items-start"><span className="mr-2">☐</span> Meine To-do-Liste wird nie kürzer</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-primary mb-4">Meine Offenheit</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="mr-2">☐</span> Ich bin bereit, Neues auszuprobieren</li>
                            <li className="flex items-start"><span className="mr-2">☐</span> Ich bin einverstanden, erste Entwürfe durch KI erstellen zu lassen</li>
                            <li className="flex items-start"><span className="mr-2">☐</span> Ich sehe KI als Chance, nicht als Bedrohung</li>
                            <li className="flex items-start"><span className="mr-2">☐</span> Ich bin bereit, 30-60 Minuten in einen Test zu investieren</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-primary mb-4">Meine Umgebung</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="mr-2">☐</span> Mein Unternehmen ist offen für digitale Tools</li>
                            <li className="flex items-start"><span className="mr-2">☐</span> Ich kenne grob die Datenschutz-Regeln</li>
                            <li className="flex items-start"><span className="mr-2">☐</span> Es gibt Kollegen, die KI mit vorantreiben würden</li>
                            <li className="flex items-start"><span className="mr-2">☐</span> Ich habe Zugang zu KI-Tools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                Sicherheit & Grenzen: Do&apos;s and Don&apos;ts
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-4">✓ Do: Das sollten Sie tun</h3>
                <ul className="space-y-2 text-green-700">
                  <li>Sensible Daten schwärzen oder komplett weglassen</li>
                  <li>Eigene Prüfung vor dem Versenden durchführen</li>
                  <li>KI-Ergebnisse anpassen an Ihren persönlichen Stil</li>
                  <li>Klein starten mit unkritischen Anwendungsfällen</li>
                  <li>Kollegen einbeziehen und Erfahrungen teilen</li>
                  <li>Datenschutz-Regeln Ihres Unternehmens beachten</li>
                </ul>
              </div>
              <div className="bg-red-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-red-800 mb-4">✗ Don&apos;t: Das sollten Sie vermeiden</h3>
                <ul className="space-y-2 text-red-700">
                  <li>Verträge, Gehaltslisten oder interne Geheimnisse 1:1 einfügen</li>
                  <li>Zahlen oder Fakten ungeprüft übernehmen</li>
                  <li>KI-Text blind an Kunden schicken</li>
                  <li>Personenbezogene Daten ohne Anonymisierung verwenden</li>
                  <li>Strategische Informationen in öffentliche KI-Tools eingeben</li>
                  <li>Vollständig auf KI verlassen ohne eigene Kontrolle</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center bg-yellow-100 p-4 rounded-lg">
              <p className="text-lg font-semibold text-yellow-800">
                Wichtiger Hinweis: Behandeln Sie KI-Tools wie einen externen Dienstleister. Was Sie nicht per E-Mail an einen Fremden schicken würden, sollten Sie auch nicht in ein KI-Tool eingeben. Im Zweifel: Anonymisieren, abstrahieren oder weglassen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Ihr nächster Schritt: Einfach anfangen
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              KI ist kein Hype mehr, sondern ein zusätzlicher Mitarbeiter, der immer Zeit hat und nie müde wird. Sie müssen nicht alles auf einmal machen und auch kein Technik-Experte sein. Es reicht, wenn Sie klein anfangen und Schritt für Schritt Ihre Prozesse optimieren.
            </p>
            <div className="text-lg text-gray-600 mb-8 font-semibold italic max-w-3xl mx-auto">
              &ldquo;Der beste Zeitpunkt, mit KI anzufangen, war gestern. Der zweitbeste ist heute.&rdquo;
            </div>
            <Link href="/kontakt" className="bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-secondary transition-colors text-xl">
                Kostenloses 15-Minuten-Gespräch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeinenAngstVonKiPage;
