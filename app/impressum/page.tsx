import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum - Strachwitz Consulting',
  description: 'Impressum und rechtliche Informationen von Strachwitz Consulting.',
};

export default function ImpressumPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
            Impressum
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Angaben gemäß § 5 DDG
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-600">
                  António Freiherr von Strachwitz<br />
                  Wüstenfelden 3<br />
                  97355 Castell<br />
                  Deutschland
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Kontakt
                </h3>
                <p className="text-gray-600">
                  Telefon: +49 9325 391 99 63<br />
                  E-Mail: webmaster@strachwitzconsulting.com<br />
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE456847758
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV
                </h3>
                <p className="text-gray-600">
                  António Freiherr von Strachwitz<br />
                  Wüstenfelden 3, 97355 Castell, Deutschland
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              Haftungsausschluss (Disclaimer)
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Haftung für Inhalte
                </h3>
                <p className="text-gray-600">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Haftung für Links
                </h3>
                <p className="text-gray-600">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr; hierfür ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Urheberrecht
                </h3>
                <p className="text-gray-600">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und Inhalte Dritter als solche gekennzeichnet. Sollten Sie dennoch eine Urheberrechtsverletzung bemerken, bitten wir um einen entsprechenden Hinweis; bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              Verbraucherstreitbeilegung (§ 36 VSBG)
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
