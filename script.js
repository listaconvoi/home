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
// Per aggiungere una foto: metti il file in assets/candidati/ e scrivi il
// percorso nel campo "foto", es. "assets/candidati/ardito.jpg". Senza foto,
// la card mostra le iniziali su sfondo blu.
//
// Per aggiungere una bio: scrivi il testo nel campo "bio". Senza bio, la
// card non mostra il pulsante "Leggi la bio".
const CANDIDATI = [
  { n: 1,  cognome: "Ardito",     nome: "Cesare Giulio",      citta: "Manchester",                    foto: "", bio: "" },
  { n: 2,  cognome: "Islam",      nome: "Safiqul",            citta: "Birmingham",                    foto: "", bio: "" },
  { n: 3,  cognome: "Aait",       nome: "Assia",               citta: "",                              foto: "", bio: "" },
  { n: 4,  cognome: "Akram",      nome: "Imran",               citta: "Nelson",                        foto: "", bio: "" },
  { n: 5,  cognome: "Ansah",      nome: "Ernest Asiedu",       citta: "",                              foto: "", bio: "" },
  { n: 6,  cognome: "Asif",       nome: "Farwa",                citta: "",                              foto: "", bio: "" },
  { n: 7,  cognome: "Awan",       nome: "Khalid Mahmood",      citta: "",                              foto: "", bio: "" },
  { n: 8,  cognome: "Beneventi",  nome: "Alessia",              citta: "Nottingham",                    foto: "", bio: "" },
  { n: 9,  cognome: "Boateng",    nome: "Nana Adjei",          citta: "Leeds",                         foto: "", bio: "" },
  { n: 10, cognome: "Buccelli",   nome: "Bruno",                citta: "Lancaster",                     foto: "", bio: "" },
  { n: 11, cognome: "Cardosi",    nome: "Patricia Marina",     citta: "",                              foto: "", bio: "" },
  { n: 12, cognome: "Colamarco",  nome: "Adele",                citta: "Liverpool",                     foto: "", bio: "" },
  { n: 13, cognome: "Denegri",    nome: "Valentina",           citta: "Douglas (Isola di Man)",        foto: "", bio: "" },
  { n: 14, cognome: "Eshun",      nome: "Comfort",              citta: "",                              foto: "", bio: "" },
  { n: 15, cognome: "Fazzi",      nome: "Marco",                citta: "Sheffield",                     foto: "", bio: "" },
  { n: 16, cognome: "Giona",      nome: "Ciro",                 citta: "Bradford",                      foto: "", bio: "" },
  { n: 17, cognome: "Massini",    nome: "Silvia",               citta: "Manchester",                    foto: "", bio: "" },
  { n: 18, cognome: "Pinto",      nome: "Giuseppe",             citta: "Liverpool",                     foto: "", bio: "" },
  { n: 19, cognome: "Rosella",    nome: "Sarah",                citta: "Carlisle",                      foto: "", bio: "" },
  { n: 20, cognome: "Saia",       nome: "Vittoria",             citta: "West Bromwich",                 foto: "", bio: "" },
  { n: 21, cognome: "Singh",      nome: "Kamal Deep",          citta: "",                              foto: "", bio: "" },
  { n: 22, cognome: "Totaro",     nome: "Immacolata",          citta: "Manchester",                    foto: "", bio: "" },
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
    const photoHtml = c.foto && c.foto.trim()
      ? `<img src="${c.foto}" alt="" class="candidato-foto">`
      : `<span class="candidato-foto candidato-foto-fallback" aria-hidden="true">${initials}</span>`;

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
