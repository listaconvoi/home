// Endpoint Formspree per la raccolta email dal popup "registrati per
// votare". Vai su formspree.io, crea un form gratuito, e incolla qui
// l'indirizzo che ti danno (tipo "https://formspree.io/f/xxxxabcd").
// Finché è vuoto, il popup non compare.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mljerdvz";

// Candidati alla carica di membri del Comites di Manchester — Lista "Con Voi"
//
// Città: città di residenza nel Regno Unito. Le voci con "" sono da
// completare.
//
// Tutti i percorsi delle foto sono già predisposti in assets/candidati/,
// con il cognome in minuscolo (es. ardito.jpg). Quando aggiungi il file, la
// foto compare automaticamente. Finche il file manca, restano visibili le
// iniziali su sfondo blu, senza icone di immagine rotta.
//
// Per aggiungere una bio: scrivi il testo nel campo "bio". Senza bio, la
// card non mostra il pulsante "Leggi la bio".
const CANDIDATI = [
  { n: 1,  cognome: "Ardito",     nome: "Cesare Giulio",      citta: "Manchester",                    foto: "assets/candidati/ardito.jpg", bio: "Matematico di professione, originario di Roma e residente a Manchester da dieci anni. Da anni è attivo nella comunità italiana locale ed è fondatore di I3Italy, progetto dedicato all’informazione e all’assistenza per gli italiani in Inghilterra. Nel 2021 è stato eletto nel Comites di Manchester con la lista Italia4Italy e, dal giugno 2024, ne è presidente. La sua attività si è concentrata soprattutto sulla rappresentanza istituzionale della comunità italiana del Nord dell’Inghilterra, portandone le istanze fino alle sedi nazionali, tra cui un’audizione alla Camera dei deputati lo scorso febbraio" },
  { n: 2,  cognome: "Islam",      nome: "Safiqul",            citta: "Birmingham",                    foto: "assets/candidati/islam.jpg", bio: "" },
  { n: 3,  cognome: "Aait",       nome: "Assia",               citta: "Birmingham",                              foto: "assets/candidati/aait.jpg", bio: "Sono Assia, nata a Torino e italo-marocchina, con una laurea francese in Lingue Moderne Applicate e un Master in Psicologia presso la Birmingham City University. Il mio percorso tra culture, lingue e Paesi diversi mi ha dato una forte sensibilità interculturale e una grande capacità di ascolto.  Il mio obbiettivo è mettere la mia esperienza al servizio della comunità italiana nel Regno Unito, valorizzandone la diversità, creando connessioni e dando voce alle nuove generazioni." },
  { n: 4,  cognome: "Akram",      nome: "Imran",               citta: "Nelson",                        foto: "assets/candidati/akram.jpg", bio: "" },
  { n: 5,  cognome: "Ansah",      nome: "Ernest Asiedu",       citta: "",                              foto: "assets/candidati/ansah.jpg", bio: "" },
  { n: 6,  cognome: "Asif",       nome: "Farwa",                citta: "",                              foto: "assets/candidati/asif.jpg", bio: "" },
  { n: 7,  cognome: "Awan",       nome: "Khalid Mahmood",      citta: "",                              foto: "assets/candidati/awan.jpg", bio: "" },
  { n: 8,  cognome: "Beneventi",  nome: "Alessia",              citta: "Nottingham",                    foto: "assets/candidati/beneventi.jpg", bio: "Alessia è insegnante di italiano e direttrice dell’Italian School of Nottingham. Da anni lavora nel nord del Regno Unito, dove promuove la lingua e la cultura italiana collaborando con scuole, famiglie e associazioni del territorio. Opera nell’area di competenza del Consolato di Manchester ed è diventata un punto di riferimento per molti italiani che vivono nella regione, grazie alla sua esperienza nel settore educativo e alla costante attenzione verso la comunità." },
  { n: 9,  cognome: "Boateng",    nome: "Nana Adjei",          citta: "Leeds",                         foto: "assets/candidati/boateng.jpg", bio: "" },
  { n: 10, cognome: "Buccelli",   nome: "Bruno",                citta: "Lancaster",                     foto: "assets/candidati/buccelli.jpg", bio: "Bruno Buccelli è un imprenditore e organizzatore di eventi con oltre dieci anni di esperienza nel settore dell’ospitalità, della cultura e della promozione del territorio. Nel corso della sua attività ha ideato e organizzato importanti eventi a Lancaster, tra cui Lancaster Festa Italia, una delle principali manifestazioni dedicate alla cultura e alla tradizione italiana nel Regno Unito, e il Lancaster International Film Festival, del quale è fondatore e direttore. È inoltre il proprietario e fondatore di Buccelli’s, ristorante italiano nel centro di Lancaster, aperto nel 2016. Originario di Roma, Bruno ha costruito il ristorante intorno ai valori dell’autenticità, della tradizione e della qualità della cucina italiana, con particolare attenzione alle ricette regionali, ai prodotti italiani e alla preparazione artigianale. Sotto la sua guida, Buccelli’s ha ottenuto importanti riconoscimenti a livello nazionale nel Regno Unito. Nel 2022 il ristorante ha ricevuto il prestigioso ITA0039 Award, riconoscimento dedicato alla migliore espressione del “100% Italian Taste”, mentre i suoi chef, sono stati premiati come Best Italian Chef agli Italian Awards. Nel 2026 Buccelli’s è stata inoltre Highly Recommended come Best Restaurant in the North West of England agli Italian Awards, confermando la presenza del ristorante tra le realtà italiane più riconosciute nel panorama gastronomico britannico. Attraverso la ristorazione, gli eventi e le iniziative culturali, Bruno Buccelli continua a promuovere la cultura italiana nel Regno Unito, creando un ponte tra la tradizione italiana e la comunità locale di Lancaster e Lancashire." },
  { n: 11, cognome: "Cardosi",    nome: "Patricia Marina",     citta: "",                              foto: "assets/candidati/cardosi.jpg", bio: "" },
  { n: 12, cognome: "Colamarco",  nome: "Adele",                citta: "Liverpool",                     foto: "assets/candidati/colamarco.jpg", bio: "Sono originaria di Avellino e vivo da 13 anni a Liverpool con mio marito e i miei ragazzi di 14 e 9 anni. Laureata in Scienze Naturali, ho vissuto e studiato anche ad Edimburgo e York, dove ho lavorato per RSPB. Voglio aiutare i miei connazionali ad avere un servizio consolare piu' snello ed efficace." },
  { n: 13, cognome: "Denegri",    nome: "Valentina",           citta: "Douglas (Isola di Man)",        foto: "assets/candidati/denegri.jpg", bio: "" },
  { n: 14, cognome: "Eshun",      nome: "Comfort",              citta: "",                              foto: "assets/candidati/eshun.jpg", bio: "" },
  { n: 15, cognome: "Fazzi",      nome: "Marco",                citta: "Sheffield",                     foto: "assets/candidati/fazzi.jpg", bio: "" },
  { n: 16, cognome: "Giona",      nome: "Ciro",                 citta: "Bradford",                      foto: "assets/candidati/giona.jpg", bio: "Nato nel 1964, residente Regno Unito dal 1983. Diploma Maestro d' Arte. Pensionato.  Si candida al Comites per continuare ad assistere i connazionali come fa ormai da decenni." },
  { n: 17, cognome: "Massini",    nome: "Silvia",               citta: "Manchester",                    foto: "assets/candidati/massini.jpg", bio: "Nata e cresciuta a Roma, si trasferisce in Inghilterra nel 1994 come visiting student a Brighton, dove conosce il compagno scozzese con cui vive e con cui ha due figli, nati e cresciuti a Manchester. Laureata in Scienze statistiche ed economiche alla Sapienza a Roma, ha continuato gli studi in Italia e Inghilterra dove ha intrapreso la carriera accademica, prima a Warwick Business School come ricercatrice (1999) e poi nella Business School dell’ Università di Manchester (dal 2000). Eletta nel Comites dal 2021." },
  { n: 18, cognome: "Pinto",      nome: "Giuseppe",             citta: "Liverpool",                     foto: "assets/candidati/pinto.jpg", bio: "Napoletano di 50 anni, vivo nel Regno Unito da 15 anni e dal 2017 risiedo a Warrington con la mia famiglia. Laureato in Ingegneria Civile, ricopro il ruolo di Associate Director presso una primaria multinazionale del settore, dove coordino e dirigo la progettazione di infrastrutture aeroportuali, lavorando in particolare con gli scali del Nord dell'Inghilterra e Scozia. Appassionato di musica, lettura, cucina e innovazione tecnologica, faccio volontariato per il gruppo Scout di Warrington East dove sono membro del Trustee Board. La mia candidatura al Comites nasce dal ricordo vivo delle difficoltà affrontate al mio arrivo in UK, senza ancora una rete sociale e dal conseguente desiderio di rappresentare con pragmatismo e trasparenza le esigenze della comunità italiana, favorendo l'integrazione e il supporto reciproco." },
  { n: 19, cognome: "Rosella",    nome: "Sarah",                citta: "Carlisle",                      foto: "assets/candidati/rosella.jpg", bio: "Nata e cresciuta a Roma, trasferita nel nord dell'Inghilterra nel 2012. Ho una piccola attività a Carlisle, e vorrei aprire una scuola di italiano, iniziando con i bambini e poi eventualmente per adulti." },
  { n: 20, cognome: "Saia",       nome: "Vittoria",             citta: "West Bromwich",                 foto: "assets/candidati/saia.jpg", bio: "" },
  { n: 21, cognome: "Singh",      nome: "Kamal Deep",          citta: "",                              foto: "assets/candidati/singh.jpg", bio: "" },
  { n: 22, cognome: "Totaro",     nome: "Immacolata",          citta: "Manchester",                    foto: "assets/candidati/totaro.jpg", bio: "" },
];

function initCandidati() {
  const grid = document.getElementById("candidati-grid");
  if (!grid) return;
  const frag = document.createDocumentFragment();
  CANDIDATI.forEach(c => {
    const li = document.createElement("li");
    li.className = "candidato";
    const initials = (c.nome.trim()[0] + c.cognome.trim()[0]).toUpperCase();
    const hasBio = Boolean(c.bio && c.bio.trim());
    const hasCitta = Boolean(c.citta && c.citta.trim());
    const photoHtml = `
      <span class="candidato-foto-shell">
        <span class="candidato-foto candidato-foto-fallback" aria-hidden="true">${initials}</span>
        ${c.foto && c.foto.trim()
          ? `<img src="${c.foto}" alt="Foto di ${c.nome} ${c.cognome}" class="candidato-foto candidato-foto-img" loading="lazy" decoding="async">`
          : ""}
      </span>`;

    li.innerHTML = `
      <div class="candidato-top">
        ${photoHtml}
        <div class="candidato-id">
          <span class="candidato-name">${c.nome} ${c.cognome}</span>
          ${hasCitta ? `<span class="candidato-luogo">${c.citta}</span>` : ""}
        </div>
      </div>
      ${hasBio ? `
        <button class="candidato-bio-toggle" type="button" aria-expanded="false">Leggi la bio</button>
        <p class="candidato-bio" hidden>${c.bio}</p>
      ` : ""}
    `;

    const foto = li.querySelector(".candidato-foto-img");
    if (foto) {
      const mostraFallback = () => { foto.hidden = true; };
      foto.addEventListener("error", mostraFallback, { once: true });
      if (foto.complete && foto.naturalWidth === 0) mostraFallback();
    }

    if (hasBio) {
      const btn = li.querySelector(".candidato-bio-toggle");
      const bio = li.querySelector(".candidato-bio");
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        btn.textContent = open ? "Leggi la bio" : "Nascondi la bio";
        bio.hidden = open;
      });
    }

    frag.appendChild(li);
  });
  grid.appendChild(frag);
}

// Popup "registrati per votare", mostrato una volta sola quando l'utente
// arriva in fondo alla pagina. Il cookie dura 180 giorni: chi lo ha già
// visto (o chiuso) non lo rivede più su quel browser.
const POPUP_COOKIE = "convoi_popup_visto";
const POPUP_COOKIE_GIORNI = 180;
// Quanto deve scorrere la pagina prima che compaia, in pixel. 500px equivale
// a circa due o tre "rotelline" di mouse su uno schermo normale.
const POPUP_SCROLL_SOGLIA = 500;

function setCookie(nome, valore, giorni) {
  const scadenza = new Date();
  scadenza.setTime(scadenza.getTime() + giorni * 24 * 60 * 60 * 1000);
  document.cookie = `${nome}=${valore}; expires=${scadenza.toUTCString()}; path=/; SameSite=Lax`;
}

function getCookie(nome) {
  return document.cookie
    .split("; ")
    .some(riga => riga.startsWith(`${nome}=`));
}

function initPopupVoto() {
  const popup = document.getElementById("popup-voto");
  if (!popup) return;
  if (!FORMSPREE_ENDPOINT) return; // non configurato: il popup resta spento
  if (getCookie(POPUP_COOKIE)) return;

  const form = popup.querySelector(".popup-voto-form");
  const input = popup.querySelector(".popup-voto-input");
  const stato = popup.querySelector(".popup-voto-stato");
  form.action = FORMSPREE_ENDPOINT;

  function mostra() {
    popup.classList.add("is-visible");
    popup.removeAttribute("hidden");
  }

  function chiudi() {
    popup.classList.remove("is-visible");
    setCookie(POPUP_COOKIE, "1", POPUP_COOKIE_GIORNI);
    window.removeEventListener("scroll", onScroll);
  }

  function onScroll() {
    const scrollAbbastanza = window.scrollY >= POPUP_SCROLL_SOGLIA;
    if (scrollAbbastanza) mostra();
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!input.value || !input.checkValidity()) {
      input.reportValidity();
      return;
    }
    form.querySelector("button[type=submit]").disabled = true;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        stato.textContent = "Riceverai presto il modulo al tuo indirizzo email. Dovrai stamparlo, firmarlo e inviarlo al Consolato.";
        stato.hidden = false;
        form.hidden = true;
        setCookie(POPUP_COOKIE, "1", POPUP_COOKIE_GIORNI);
        window.removeEventListener("scroll", onScroll);
        setTimeout(chiudi, 6000);
      } else {
        stato.textContent = "Invio non riuscito, riprova tra poco.";
        stato.hidden = false;
        form.querySelector("button[type=submit]").disabled = false;
      }
    } catch {
      stato.textContent = "Invio non riuscito, controlla la connessione.";
      stato.hidden = false;
      form.querySelector("button[type=submit]").disabled = false;
    }
  });

  popup.querySelector(".popup-voto-close").addEventListener("click", chiudi);
  popup.addEventListener("click", (e) => {
    if (e.target === popup) chiudi();
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  initCandidati();
  initPopupVoto();
});
