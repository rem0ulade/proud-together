const pillars = [
  { number: '01', label: 'Support', title: 'Hilfe, die ankommt.', text: 'Wir hören zu, vermitteln passende Beratungsangebote und wollen Betroffene in akuten Situationen unbürokratisch unterstützen.' },
  { number: '02', label: 'Bildung', title: 'Wissen, das verändert.', text: 'Mit verständlichen Informationen, Workshops und digitalen Formaten bauen wir Vorurteile ab und stärken queere Perspektiven.' },
  { number: '03', label: 'Community', title: 'Räume, die verbinden.', text: 'Wir bringen Menschen, Initiativen und Unterstützer*innen zusammen – für Austausch, Schutz und gemeinsames Handeln.' },
];

export default function Home() {
  return (
    <main id="start">
      <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
      <header className="site-header">
        <a className="brand" href="#start" aria-label="Proud Together – Startseite">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>Proud Together<small>Gemeinsam. Sicher. Sichtbar.</small></span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#mission">Über uns</a><a href="#projekte">Projekte</a><a href="#mitmachen">Mitmachen</a>
        </nav>
        <a className="button button-small" href="#spenden">Jetzt helfen</a>
      </header>

      <div id="inhalt">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Proud Together e.V. · in Gründung</p>
            <h1 id="hero-title">Weil niemand allein kämpfen sollte.</h1>
            <p className="intro">Wir schaffen Schutz, Wissen und echte Perspektiven für queere Menschen – direkt, solidarisch und gemeinsam mit der Community.</p>
            <div className="hero-actions">
              <a className="button" href="#spenden">Unsere Arbeit unterstützen</a>
              <a className="text-link" href="#mission">Mehr erfahren <span aria-hidden="true">→</span></a>
            </div>
            <ul className="trust-list" aria-label="Unsere Grundsätze">
              <li>Direkte Unterstützung</li><li>Transparenter Einsatz</li><li>Aus der Community</li>
            </ul>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="glow glow-one" /><div className="glow glow-two" />
            <div className="statement-card">
              <span className="mini-mark"><i /><i /><i /></span>
              <p>Du bist richtig.<br />Genau so, wie du bist.</p><small>Proud Together</small>
            </div>
          </div>
        </section>

        <section className="mission" id="mission" aria-labelledby="mission-title">
          <div><p className="eyebrow light">Unsere Mission</p><h2 id="mission-title">Eine Gesellschaft, in der alle sicher und selbstbestimmt leben können.</h2></div>
          <div className="mission-copy"><p>Queere Menschen erleben noch immer Ausgrenzung, Unsicherheit und Gewalt. Proud Together will dort ansetzen, wo Unterstützung gebraucht wird – nahbar, praktisch und auf Augenhöhe.</p><p>Wir verbinden direkte Hilfe mit nachhaltiger Aufklärung. Dabei arbeiten wir transparent, unabhängig und gemeinsam mit Menschen, die ihre Lebensrealitäten am besten kennen.</p></div>
        </section>

        <section className="pillars section-shell" id="projekte" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="eyebrow">Was wir bewegen</p><h2 id="work-title">Drei Säulen.<br />Ein gemeinsames Ziel.</h2></div><p>Unsere Arbeit wächst mit dem Verein. Diese Bereiche geben uns eine klare Richtung.</p></div>
          <div className="pillar-grid">
            {pillars.map((pillar) => <article className="pillar-card" key={pillar.number}><div className="card-top"><span>{pillar.number}</span><span>{pillar.label}</span></div><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}
          </div>
        </section>

        <section className="project-feature section-shell" aria-labelledby="project-title">
          <div className="project-panel">
            <div className="project-visual" aria-hidden="true"><span className="question one">?</span><span className="question two">?</span><div className="project-window"><div className="window-bar"><i /><i /><i /></div><div className="window-content"><span>Wo stehst du?</span><b>Verstehen beginnt<br />mit Einordnen.</b><i /></div></div></div>
            <div className="project-copy"><p className="eyebrow light">Digitales Vereinsprojekt</p><h2 id="project-title">Wo-stehst-du</h2><p>Ein digitales Bildungsprojekt, das Menschen dabei unterstützt, gesellschaftliche Positionen, Werte und Perspektiven besser einzuordnen – verständlich, differenziert und ohne erhobenen Zeigefinger.</p><p className="status"><span aria-hidden="true" /> Projekt in Konzeption</p></div>
          </div>
        </section>

        <section className="transparency section-shell" aria-labelledby="trust-title">
          <div className="section-heading"><div><p className="eyebrow">Vertrauen durch Klarheit</p><h2 id="trust-title">Verantwortung ist kein Kleingedrucktes.</h2></div><p>Wir bauen Proud Together mit klaren Regeln auf. Nach der Gründung veröffentlichen wir regelmäßig, wie Mittel eingesetzt werden und was damit erreicht wurde.</p></div>
          <div className="promise-row"><div><span>01</span><h3>Nachvollziehbar</h3><p>Klare Informationen über Projekte und Mittelverwendung.</p></div><div><span>02</span><h3>Community-nah</h3><p>Bedarfe werden gemeinsam mit Betroffenen entwickelt.</p></div><div><span>03</span><h3>Wirkungsorientiert</h3><p>Ressourcen fließen dorthin, wo sie konkret helfen.</p></div></div>
        </section>

        <section className="join" id="mitmachen" aria-labelledby="join-title">
          <div><p className="eyebrow light">Gemeinsam geht mehr</p><h2 id="join-title">Deine Stimme.<br />Deine Zeit.<br />Deine Unterstützung.</h2></div>
          <div className="join-options"><article><span aria-hidden="true">+</span><div><h3>Mitglied werden</h3><p>Gestalte den Verein und seine Projekte aktiv mit.</p><a href="#kontakt">Interesse vormerken <span aria-hidden="true">→</span></a></div></article><article id="spenden"><span aria-hidden="true">€</span><div><h3>Spenden</h3><p>Die Spendenmöglichkeit startet nach Vereinsgründung und Einrichtung des Vereinskontos.</p><a href="#kontakt">Start erfahren <span aria-hidden="true">→</span></a></div></article><article><span aria-hidden="true">↗</span><div><h3>Kooperieren</h3><p>Du vertrittst eine Initiative, ein Unternehmen oder eine Bildungseinrichtung?</p><a href="#kontakt">Gespräch starten <span aria-hidden="true">→</span></a></div></article></div>
        </section>

        <section className="contact section-shell" id="kontakt" aria-labelledby="contact-title">
          <div className="contact-card"><div><p className="eyebrow">Kontakt</p><h2 id="contact-title">Lass uns etwas<br />bewegen.</h2></div><div><p>Du möchtest mitgründen, unterstützen oder eine Idee einbringen? Wir freuen uns, von dir zu hören.</p><p className="placeholder-note"><strong>Kontakt folgt:</strong> Die offizielle Vereins-E-Mail-Adresse wird nach Einrichtung hier ergänzt.</p></div></div>
        </section>
      </div>

      <footer><div className="footer-main"><a className="brand footer-brand" href="#start"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>Proud Together<small>Gemeinsam. Sicher. Sichtbar.</small></span></a><p>Für eine Zukunft, in der alle dazugehören.</p><div className="footer-links"><a href="#mission">Über uns</a><a href="#projekte">Projekte</a><a href="#mitmachen">Mitmachen</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Proud Together e.V. (in Gründung)</span><div><a href="./impressum/">Impressum</a><a href="./datenschutz/">Datenschutz</a></div></div></footer>
    </main>
  );
}
