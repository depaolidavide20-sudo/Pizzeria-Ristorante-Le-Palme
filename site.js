const body = document.body;
const toggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];
const menuModal = document.getElementById("menuModal");
const menuModalTriggers = document.querySelectorAll("[data-open-menu-modal]");
const menuModalClosers = document.querySelectorAll("[data-close-menu-modal]");
const bookingModal = document.getElementById("bookingModal");
const bookingModalTriggers = document.querySelectorAll("[data-open-booking-modal]");
const bookingModalClosers = document.querySelectorAll("[data-close-booking-modal]");
const menuTabs = document.querySelectorAll(".menu-tab");
const menuPanels = document.querySelectorAll("[data-menu-panel]");
const menuCarouselGrid = document.querySelector(".menu-visual-grid");
const menuCarouselButtons = document.querySelectorAll("[data-menu-carousel-step]");
const locationTrack = document.querySelector("[data-location-track]");
const locationButtons = document.querySelectorAll("[data-location-step]");
const bookingForm = document.querySelector("[data-whatsapp-form]");
const bookingDate = document.getElementById("booking-date");
const bookingKindInput = document.getElementById("booking-kind");
const bookingModalTitle = document.getElementById("bookingModalTitle");
const bookingIntro = document.getElementById("bookingIntro");
const languageButtons = document.querySelectorAll("[data-language]");
const whatsappNumber = "390187808185";
let currentLanguage = "it";
let bookingScrollY = 0;
let bookingScrollLocked = false;
let bookingBodyStyleBackup = {};
let bookingHtmlOverflowX = "";

const translations = {
  it: {
    navMenu: "Menù",
    navAperitivi: "I nostri Aperitivi",
    navReviews: "Recensioni",
    navContacts: "Contatti",
    call: "Chiama ora",
    heroEyebrow: "Levanto, Corso Italia 41",
    heroTitle: "Pizzeria Ristorante Le Palme a Levanto",
    heroText: "Pizza al forno a legna, cucina ligure e piatti di mare in Corso Italia, a pochi passi dalla spiaggia e dal centro di Levanto.",
    book: "Prenota ora",
    follow: "Seguici",
    menuTitle: "Pizze, mare e Liguria <span>con passo da ristorante.</span>",
    menuCta: "Apri il menù completo",
    menuModalEyebrow: "Menù Le Palme",
    menuModalTitle: "Il nostro menù",
    menuModalText: "Pizze, focacce, farinata e cucina di mare, dal forno alla tradizione ligure.",
    aperitiviTitle: "Aperitivo a Levanto, prima di cena o dopo il mare.",
    aperitiviTextOne: "Fermati da Le Palme per un aperitivo fresco, luminoso e informale: cocktail, calici, stuzzichini e il piacere di sedersi in centro a Levanto dopo la spiaggia.",
    aperitiviTextTwo: "È il momento giusto per iniziare la serata senza fretta, aspettare gli amici o prenotare un tavolo prima di cena nella Riviera ligure.",
    aperitiviCta: "Prenota Ora",
    reviewsTitle: "Le parole dei nostri clienti",
    reviewsScroll: "Scorri le recensioni",
    reviewsCta: "Lascia una recensione su Google",
    reviewsHint: "Ci vogliono solo 10 secondi",
    contactsTitle: "Vieni a trovarci.",
    addressLabel: "Indirizzo",
    phoneLabel: "Numero fisso",
    emailLabel: "Email",
    hoursLabel: "Orari",
    mapTitle: "Levanto, centro mare",
    route: "Apri percorso",
    bookingEyebrow: "Prenota il tuo tavolo",
    bookingTableTitle: "Richiedi il tuo tavolo.",
    bookingTableIntro: "Scegli giorno, orario e numero di persone: la richiesta arriva già ordinata, pronta per la conferma.",
    bookingAperitivoTitle: "Prenota il tuo aperitivo.",
    bookingAperitivoIntro: "Scegli giorno, orario e numero di persone: prepariamo una richiesta WhatsApp dedicata al tuo aperitivo.",
    bookingSubmit: "Apri WhatsApp e prenota",
    directPhone: "Preferisci parlare con noi? Chiama +39 0187 808185",
  },
  en: {
    navMenu: "Menu",
    navAperitivi: "Our Aperitifs",
    navReviews: "Reviews",
    navContacts: "Contact",
    call: "Call now",
    heroEyebrow: "Levanto, Corso Italia 41",
    heroTitle: "Pizzeria Ristorante Le Palme in Levanto",
    heroText: "Wood-fired pizza, Ligurian cuisine and seafood dishes on Corso Italia, just a few steps from the beach and the centre of Levanto.",
    book: "Book now",
    follow: "Follow",
    menuTitle: "Pizza, seafood and Liguria <span>with restaurant-level care.</span>",
    menuCta: "Open the full menu",
    menuModalEyebrow: "Le Palme Menu",
    menuModalTitle: "Our menu",
    menuModalText: "Pizza, focaccia, farinata and seafood cuisine, from the oven to Ligurian tradition.",
    aperitiviTitle: "Aperitif in Levanto, before dinner or after the sea.",
    aperitiviTextOne: "Stop at Le Palme for a fresh, bright and relaxed aperitif: cocktails, wine, small bites and the pleasure of sitting in central Levanto after the beach.",
    aperitiviTextTwo: "It is the right moment to start the evening slowly, wait for friends or reserve a table before dinner on the Ligurian Riviera.",
    aperitiviCta: "Book Now",
    reviewsTitle: "What our guests say",
    reviewsScroll: "Swipe reviews",
    reviewsCta: "Leave a Google review",
    reviewsHint: "It only takes 10 seconds",
    contactsTitle: "Come and visit us.",
    addressLabel: "Address",
    phoneLabel: "Landline",
    emailLabel: "Email",
    hoursLabel: "Opening hours",
    mapTitle: "Levanto, central seaside",
    route: "Open directions",
    bookingEyebrow: "Book your table",
    bookingTableTitle: "Request your table.",
    bookingTableIntro: "Choose date, time and number of guests: your request will be ready to confirm.",
    bookingAperitivoTitle: "Book your aperitif.",
    bookingAperitivoIntro: "Choose date, time and number of guests: we will prepare a WhatsApp request dedicated to your aperitif.",
    bookingSubmit: "Open WhatsApp and book",
    directPhone: "Prefer to speak with us? Call +39 0187 808185",
  },
};

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setHtml(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.innerHTML = value;
  });
}

function setBookingCopy(kind = bookingKindInput?.value || "tavolo") {
  const copy = translations[currentLanguage];
  setText("#prenota > .eyebrow", copy.bookingEyebrow);
  setText(".booking-submit", copy.bookingSubmit);
  setText(".direct-phone", copy.directPhone);

  if (bookingModalTitle) {
    bookingModalTitle.textContent = kind === "aperitivo"
      ? copy.bookingAperitivoTitle
      : copy.bookingTableTitle;
  }

  if (bookingIntro) {
    bookingIntro.textContent = kind === "aperitivo"
      ? copy.bookingAperitivoIntro
      : copy.bookingTableIntro;
  }
}

function setLanguage(language) {
  const copy = translations[language] || translations.it;
  currentLanguage = translations[language] ? language : "it";
  document.documentElement.lang = currentLanguage;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  setText(".nav-links a[href='#menu'], .mobile-menu a[href='#menu'], .footer-links-row a[href='#menu'], .mobile-bottom-cta a[href='#menu']", copy.navMenu);
  setText(".nav-links a[href='#location'], .mobile-menu a[href='#location'], .footer-links-row a[href='#location']", copy.navAperitivi);
  setText(".nav-links a[href='#recensioni'], .mobile-menu a[href='#recensioni'], .footer-links-row a[href='#recensioni']", copy.navReviews);
  setText(".nav-links a[href='#contatti'], .mobile-menu a[href='#contatti'], .footer-links-row a[href='#contatti']", copy.navContacts);
  setText(".header-phone, .mobile-menu a[href='tel:+390187808185'], .contact-actions a[href='tel:+390187808185']", copy.call);
  setText(".hero-eyebrow", copy.heroEyebrow);
  setText(".hero h1", copy.heroTitle);
  setText(".hero-copy > p", copy.heroText);
  setText(".hero-booking-button, .contact-actions button[data-open-booking-modal], .mobile-bottom-booking", copy.book);
  setText(".reviews-scroll-hint", copy.reviewsScroll);
  document.querySelectorAll(".mobile-bottom-phone").forEach((element) => {
    element.setAttribute("aria-label", copy.call);
  });
  setText(".hero-social-label", copy.follow);
  setHtml(".menu-header .section-title h2", copy.menuTitle);
  setText(".menu-cta-button", copy.menuCta);
  setText(".menu-modal-head .eyebrow", copy.menuModalEyebrow);
  setText("#menuModalTitle", copy.menuModalTitle);
  setText(".menu-modal-head p", copy.menuModalText);
  setText(".aperitivo-eyebrow", copy.navAperitivi);
  setText(".location-story-card h2", copy.aperitiviTitle);
  setText(".location-story-card p:nth-of-type(1)", copy.aperitiviTextOne);
  setText(".location-story-card p:nth-of-type(2)", copy.aperitiviTextTwo);
  setText(".aperitivo-booking-button", copy.aperitiviCta);
  setText(".reviews-pill", copy.navReviews);
  setText(".reviews-header h2", copy.reviewsTitle);
  setHtml(".review-cta .btn", `<span class="google-g inline">G</span> ${copy.reviewsCta}`);
  setText(".review-cta > span", copy.reviewsHint);
  setText(".contact-pill", copy.navContacts);
  setText(".contact-card h2", copy.contactsTitle);
  setText(".contact-row:nth-of-type(1) strong", copy.addressLabel);
  setText(".contact-row:nth-of-type(2) strong", copy.phoneLabel);
  setText(".contact-row:nth-of-type(3) strong", copy.emailLabel);
  setText(".contact-row:nth-of-type(4) strong", copy.hoursLabel);
  setText(".map-card-badge strong", copy.mapTitle);
  setText(".map-card-badge a", copy.route);
  setBookingCopy();
}

function closeMobileMenu() {
  if (!toggle || !mobileMenu) {
    return;
  }

  toggle.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
  mobileMenu.classList.remove("open");
  body.classList.remove("menu-open");
}

function openMenuModal() {
  if (!menuModal) {
    return;
  }

  menuModal.classList.add("open");
  menuModal.setAttribute("aria-hidden", "false");
  body.classList.add("menu-modal-open");
}

function closeMenuModal() {
  if (!menuModal) {
    return;
  }

  menuModal.classList.remove("open");
  menuModal.setAttribute("aria-hidden", "true");
  body.classList.remove("menu-modal-open");
}

function openBookingModal(trigger) {
  if (!bookingModal) {
    return;
  }

  const kind = trigger?.dataset.bookingKind || "tavolo";

  if (bookingKindInput) {
    bookingKindInput.value = kind;
  }

  setBookingCopy(kind);

  bookingModal.classList.add("open");
  bookingModal.setAttribute("aria-hidden", "false");
  body.classList.add("booking-modal-open");
  lockBookingScroll();
}

function closeBookingModal() {
  if (!bookingModal) {
    return;
  }

  bookingModal.classList.remove("open");
  bookingModal.setAttribute("aria-hidden", "true");
  body.classList.remove("booking-modal-open");
  unlockBookingScroll();
}

function lockBookingScroll() {
  if (bookingScrollLocked) {
    return;
  }

  bookingScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  bookingBodyStyleBackup = {
    left: body.style.left,
    maxWidth: body.style.maxWidth,
    overflow: body.style.overflow,
    position: body.style.position,
    right: body.style.right,
    top: body.style.top,
    width: body.style.width,
  };
  bookingHtmlOverflowX = document.documentElement.style.overflowX;

  body.style.position = "fixed";
  body.style.top = `-${bookingScrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
  body.style.maxWidth = "100vw";
  body.style.overflow = "hidden";
  document.documentElement.style.overflowX = "hidden";
  bookingScrollLocked = true;
}

function unlockBookingScroll() {
  if (!bookingScrollLocked) {
    return;
  }

  body.style.position = bookingBodyStyleBackup.position || "";
  body.style.top = bookingBodyStyleBackup.top || "";
  body.style.left = bookingBodyStyleBackup.left || "";
  body.style.right = bookingBodyStyleBackup.right || "";
  body.style.width = bookingBodyStyleBackup.width || "";
  body.style.maxWidth = bookingBodyStyleBackup.maxWidth || "";
  body.style.overflow = bookingBodyStyleBackup.overflow || "";
  document.documentElement.style.overflowX = bookingHtmlOverflowX || "";
  window.scrollTo(0, bookingScrollY);
  bookingScrollLocked = false;
}

function setMenuTab(tabName) {
  menuTabs.forEach((button) => {
    const isActive = button.dataset.menuTab === tabName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  menuPanels.forEach((panel) => {
    panel.hidden = panel.dataset.menuPanel !== tabName;
  });
}

toggle?.addEventListener("click", () => {
  if (!mobileMenu) {
    return;
  }

  const isOpen = mobileMenu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  body.classList.toggle("menu-open", isOpen);
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

menuModalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", openMenuModal);
});

menuModalClosers.forEach((trigger) => {
  trigger.addEventListener("click", closeMenuModal);
});

bookingModalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openBookingModal(trigger));
});

bookingModalClosers.forEach((trigger) => {
  trigger.addEventListener("click", closeBookingModal);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language || "it");
  });
});

menuModal?.addEventListener("click", (event) => {
  if (event.target === menuModal) {
    closeMenuModal();
  }
});

bookingModal?.addEventListener("click", (event) => {
  if (event.target === bookingModal) {
    closeBookingModal();
  }
});

menuTabs.forEach((button) => {
  button.addEventListener("click", () => {
    setMenuTab(button.dataset.menuTab);
  });
});

menuCarouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!menuCarouselGrid) {
      return;
    }

    const step = Number(button.dataset.menuCarouselStep || 0);
    const card = menuCarouselGrid.querySelector(".menu-visual-card");
    const cardWidth = card ? card.getBoundingClientRect().width : menuCarouselGrid.clientWidth;
    menuCarouselGrid.scrollBy({
      left: step * (cardWidth + 18),
      behavior: "smooth",
    });
  });
});

locationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!locationTrack) {
      return;
    }

    const step = Number(button.dataset.locationStep || 0);
    locationTrack.scrollBy({
      left: step * locationTrack.clientWidth,
      behavior: "smooth",
    });
  });
});

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const date = String(formData.get("date") || "").trim();
  const guests = String(formData.get("guests") || "").trim();
  const time = String(formData.get("time") || "").trim();
  const notes = String(formData.get("notes") || "").trim();
  const kind = String(formData.get("kind") || "tavolo");
  const readableDate = date
    ? new Intl.DateTimeFormat("it-IT", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(`${date}T00:00:00`))
    : "";
  const message = [
    kind === "aperitivo"
      ? "Ciao Le Palme, vorrei prenotare un tavolo per fare aperitivo."
      : "Ciao Le Palme, vorrei prenotare un tavolo.",
    `Nome: ${name}`,
    `Telefono: ${phone}`,
    `Data: ${readableDate || date}`,
    `Orario: ${time}`,
    `Persone: ${guests}`,
    notes ? `Note: ${notes}` : "",
    "Grazie.",
  ].filter(Boolean).join("\n");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappUrl;
});

if (bookingDate) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  bookingDate.min = localToday;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
    closeMenuModal();
    closeBookingModal();
  }
});

const animatedItems = document.querySelectorAll("[data-animate]");
const observer = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    )
  : null;

animatedItems.forEach((item) => {
  if (observer) {
    observer.observe(item);
  } else {
    item.classList.add("is-visible");
  }
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

setLanguage("it");
