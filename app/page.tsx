const navItems = [
  { label: "Homepage", href: "#home" },
  { label: "Menù", href: "#menu" },
  { label: "Location", href: "#location" },
  { label: "Recensioni", href: "#recensioni" },
  { label: "Contatti", href: "#contatti" },
];

const menuHighlights = [
  {
    title: "Pizze al forno a legna",
    text: "Classiche, stagionali e proposte più ricche per chi cerca una cena semplice ma curata.",
  },
  {
    title: "Primi e mare",
    text: "Piatti mediterranei, pasta, risotti e specialità di pesce per pranzi e cene in Riviera.",
  },
  {
    title: "Cucina ligure",
    text: "Sapori locali, ingredienti italiani e ricette pensate per chi arriva a Levanto per il mare.",
  },
  {
    title: "Scelte vegetariane",
    text: "Alternative leggere, verdure, impasti e combinazioni pensate per tavolate diverse.",
  },
];

const reviews = [
  {
    title: "Pizza e fritto misto apprezzati",
    text: "Nelle recensioni recenti tornano spesso pizza, fritto leggero e personale gentile.",
    source: "Recensioni online",
  },
  {
    title: "Comodo per il centro",
    text: "La posizione in Corso Italia è pratica per una cena prima o dopo una passeggiata a Levanto.",
    source: "Visit Levanto",
  },
  {
    title: "Tavoli all'aperto",
    text: "La terrazza e gli spazi esterni rendono il locale adatto a coppie, famiglie e gruppi.",
    source: "Schede pubbliche",
  },
];

function ImageSlot({ className = "" }: { className?: string }) {
  return <div className={`image-slot ${className}`} aria-hidden="true" />;
}

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Pizzeria Ristorante Le Palme">
          <span className="brand-mark" aria-hidden="true">
            LP
          </span>
          <span>
            <strong>Le Palme</strong>
            <small>Ristorante Pizzeria</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Sezioni principali">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="tel:+390187808185">
          Prenota
        </a>

        <details className="mobile-nav">
          <summary aria-label="Apri menu">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Menu mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="tel:+390187808185">Prenota</a>
          </nav>
        </details>
      </header>

      <main id="home">
        <section className="hero section-band">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">A Levanto, in Corso Italia</p>
              <h1>Le Palme, pizza e cucina ligure nel cuore della Riviera.</h1>
              <p className="hero-text">
                Una pizzeria ristorante mediterranea con forno a legna, piatti di
                mare e tavoli all'aperto, pensata per trasformare una cena a
                Levanto in una scelta facile, piacevole e memorabile.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="tel:+390187808185">
                  Chiama per prenotare
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://www.google.com/maps/search/?api=1&query=Corso+Italia+41+19015+Levanto+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apri indicazioni
                </a>
              </div>
              <div className="trust-row" aria-label="Punti di forza">
                <span>Forno a legna</span>
                <span>Tavoli all'aperto</span>
                <span>Pranzo e cena</span>
              </div>
            </div>

            <aside className="reservation-panel" aria-labelledby="reservation-title">
              <ImageSlot className="hero-slot" />
              <div className="reservation-body">
                <p className="panel-kicker">Prenotazione rapida</p>
                <h2 id="reservation-title">Il tavolo si conferma meglio a voce.</h2>
                <p>
                  Per gruppi, terrazza o serate di alta stagione, una chiamata è
                  il modo più veloce per bloccare disponibilità e orario.
                </p>
                <a className="panel-phone" href="tel:+390187808185">
                  +39 0187 808185
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="section menu-section" id="menu">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Menù</p>
                <h2>Pizza, cucina ligure e piatti di mare per ogni momento.</h2>
              </div>
              <p>
                La proposta è costruita per tavoli diversi: chi vuole una pizza
                veloce, chi sceglie il pesce, chi arriva con la famiglia e chi
                cerca un pranzo comodo prima di ripartire verso le Cinque Terre.
              </p>
            </div>

            <div className="menu-grid">
              {menuHighlights.map((item, index) => (
                <article className="menu-card" key={item.title}>
                  <ImageSlot />
                  <div className="menu-card-body">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="menu-cta">
              <div>
                <strong>Vuoi verificare disponibilità o piatti del giorno?</strong>
                <p>Chiama il ristorante e ricevi subito conferma.</p>
              </div>
              <a className="btn btn-primary" href="tel:+390187808185">
                Chiedi il menù aggiornato
              </a>
            </div>
          </div>
        </section>

        <section className="section location-section" id="location">
          <div className="container location-grid">
            <ImageSlot className="location-slot" />
            <div className="location-copy">
              <p className="eyebrow">Location</p>
              <h2>In centro a Levanto, comoda per mare, passeggiata e Cinque Terre.</h2>
              <p>
                Le Palme si trova in Corso Italia 41, una posizione semplice da
                raggiungere e naturale da scegliere quando vuoi restare vicino al
                centro, alla spiaggia e al flusso della serata.
              </p>
              <div className="location-list">
                <div>
                  <strong>Indirizzo</strong>
                  <span>Corso Italia, 41 - 19015 Levanto (SP)</span>
                </div>
                <div>
                  <strong>Ideale per</strong>
                  <span>Coppie, famiglie, gruppi e cene dopo il mare</span>
                </div>
                <div>
                  <strong>Spazi</strong>
                  <span>Sala interna, servizio al tavolo e tavoli all'aperto</span>
                </div>
              </div>
              <a
                className="btn btn-secondary"
                href="https://www.google.com/maps/search/?api=1&query=Corso+Italia+41+19015+Levanto+SP"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vai alla mappa
              </a>
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="recensioni">
          <div className="container">
            <div className="section-heading center-heading">
              <p className="eyebrow">Recensioni</p>
              <h2>Una scelta conosciuta da chi passa per Levanto.</h2>
              <p>
                Le schede pubbliche raccolgono centinaia di esperienze: qui
                valorizziamo i segnali più utili per chi deve decidere dove
                prenotare oggi.
              </p>
            </div>

            <div className="review-metrics" aria-label="Dati dalle schede pubbliche">
              <div>
                <strong>580+</strong>
                <span>recensioni su Tripadvisor</span>
              </div>
              <div>
                <strong>865</strong>
                <span>valutazioni Google rilevate online</span>
              </div>
              <div>
                <strong>Centro</strong>
                <span>Corso Italia, Levanto</span>
              </div>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.title}>
                  <div className="stars" aria-label="Valutazione positiva">
                    ★★★★★
                  </div>
                  <h3>{review.title}</h3>
                  <p>{review.text}</p>
                  <span>{review.source}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contatti">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contatti</p>
              <h2>Chiama, prenota e raggiungi il tavolo senza complicazioni.</h2>
              <p>
                Per orari aggiornati, disponibilità in terrazza e richieste per
                gruppi, il contatto telefonico resta il canale più immediato.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href="tel:+390187808185">
                  Chiama ora
                </a>
                <a
                  className="btn btn-secondary"
                  href="mailto:srllepalme@gmail.com"
                >
                  Scrivi una email
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div>
                <span>Telefono</span>
                <a href="tel:+390187808185">+39 0187 808185</a>
              </div>
              <div>
                <span>Email</span>
                <a href="mailto:srllepalme@gmail.com">srllepalme@gmail.com</a>
              </div>
              <div>
                <span>Indirizzo</span>
                <p>Corso Italia, 41 - 19015 Levanto (SP)</p>
              </div>
              <div>
                <span>Orari</span>
                <p>Pranzo e cena: chiama per confermare gli orari di oggi.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="footer-brand" href="#home">
              Pizzeria Ristorante Le Palme
            </a>
            <p>
              Pizza al forno a legna, cucina ligure e tavoli all'aperto in
              Corso Italia, a Levanto.
            </p>
          </div>
          <nav aria-label="Link footer">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <a href="tel:+390187808185">+39 0187 808185</a>
            <a href="mailto:srllepalme@gmail.com">srllepalme@gmail.com</a>
            <span>© {currentYear} Le Palme S.r.l.</span>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Pizzeria Ristorante Le Palme",
            servesCuisine: ["Pizza", "Cucina ligure", "Cucina mediterranea"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Corso Italia, 41",
              postalCode: "19015",
              addressLocality: "Levanto",
              addressRegion: "SP",
              addressCountry: "IT",
            },
            telephone: "+390187808185",
            email: "srllepalme@gmail.com",
            url: "https://www.lepalmelevanto.com/",
          }),
        }}
      />
    </>
  );
}
