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
  { n: 1,  cognome: "Ardito",     nome: "Cesare Giulio",      citta: "Manchester",                    foto: "assets/candidati/ardito.jpg", bio: "Attuale Presidente del Comites di Manchester. Matematico di professione, originario di Roma e residente a Manchester da dieci anni. Amministratore della comunità Italiani a Manchester e fondatore di I3Italy, progetto dedicato all’informazione e all’assistenza per gli italiani in Inghilterra. Nel 2021 è stato eletto nel Comites di Manchester con la lista Italia4Italy. La sua attività si è concentrata soprattutto sulla rappresentanza istituzionale della comunità italiana del Nord dell’Inghilterra, portandone le istanze fino alle sedi nazionali, tra cui un’audizione alla Camera dei deputati lo scorso febbraio." },
  { n: 2,  cognome: "Islam",      nome: "Safiqul",            citta: "Birmingham",                    foto: "assets/candidati/islam.jpg", bio: "Attuale Vice-Presidente del Comites di Manchester. Fondatore dell'associazione UIB (United Italian Bangladesh) che opera per assistere la comunità italiana di Birmingham con permessi, visti, traduzioni, pratiche consolari e domande di cittadinanza e benefit. Inoltre promuove l'apprendimento della lingua italiana per le nuove generazioni, offrendo corsi di livello B1." },
  { n: 3,  cognome: "Aait",       nome: "Assia",               citta: "Birmingham",                              foto: "assets/candidati/aait.jpg", bio: "Sono Assia, nata a Torino e italo-marocchina, con una laurea francese in Lingue Moderne Applicate e un Master in Psicologia presso la Birmingham City University. Il mio percorso tra culture, lingue e Paesi diversi mi ha dato una forte sensibilità interculturale e una grande capacità di ascolto.  Il mio obiettivo è mettere la mia esperienza al servizio della comunità italiana nel Regno Unito, valorizzandone la diversità, creando connessioni e dando voce alle nuove generazioni." },
  { n: 4,  cognome: "Akram",      nome: "Imran",               citta: "Nelson",                        foto: "assets/candidati/akram.jpg", bio: "" },
  { n: 5,  cognome: "Ansah",      nome: "Ernest Asiedu",       citta: "",                              foto: "assets/candidati/ansah.jpg", bio: "" },
  { n: 6,  cognome: "Asif",       nome: "Farwa",                citta: "",                              foto: "assets/candidati/asif.jpg", bio: "" },
  { n: 7,  cognome: "Awan",       nome: "Khalid Mahmood",      citta: "",                              foto: "assets/candidati/awan.jpg", bio: "" },
  { n: 8,  cognome: "Beneventi",  nome: "Alessia",              citta: "Nottingham",                    foto: "assets/candidati/beneventi.jpg", bio: "Insegnante di italiano e direttrice dell’Italian School of Nottingham. Da anni lavora nel nord del Regno Unito, dove promuove la lingua e la cultura italiana collaborando con scuole, famiglie e associazioni del territorio. Opera nell’area di competenza del Consolato di Manchester ed è diventata un punto di riferimento per molti italiani che vivono nella regione, grazie alla sua esperienza nel settore educativo e alla costante attenzione verso la comunità." },
  { n: 9,  cognome: "Boateng",    nome: "Nana Adjei",          citta: "Leeds",                         foto: "assets/candidati/boateng.jpg", bio: "" },
  { n: 10, cognome: "Buccelli",   nome: "Bruno",                citta: "Lancaster",                     foto: "assets/candidati/buccelli.jpg", bio: "Imprenditore e organizzatore di eventi con oltre dieci anni di esperienza nel settore dell’ospitalità, della cultura e della promozione del territorio. Nel corso della sua attività ha ideato e organizzato importanti eventi a Lancaster, tra cui Lancaster Festa Italia, una delle principali manifestazioni dedicate alla cultura e alla tradizione italiana nel Regno Unito, e il Lancaster International Film Festival, del quale è fondatore e direttore. È inoltre il proprietario e fondatore di Buccelli’s, ristorante italiano nel centro di Lancaster, aperto nel 2016. Originario di Roma, Bruno ha costruito il ristorante intorno ai valori dell’autenticità, della tradizione e della qualità della cucina italiana, con particolare attenzione alle ricette regionali, ai prodotti italiani e alla preparazione artigianale. Sotto la sua guida, Buccelli’s ha ottenuto importanti riconoscimenti a livello nazionale nel Regno Unito. Nel 2022 il ristorante ha ricevuto il prestigioso ITA0039 Award, riconoscimento dedicato alla migliore espressione del “100% Italian Taste”, mentre i suoi chef, sono stati premiati come Best Italian Chef agli Italian Awards. Nel 2026 Buccelli’s è stata inoltre Highly Recommended come Best Restaurant in the North West of England agli Italian Awards, confermando la presenza del ristorante tra le realtà italiane più riconosciute nel panorama gastronomico britannico. Attraverso la ristorazione, gli eventi e le iniziative culturali, Bruno Buccelli continua a promuovere la cultura italiana nel Regno Unito, creando un ponte tra la tradizione italiana e la comunità locale di Lancaster e Lancashire." },
  { n: 11, cognome: "Cardosi",    nome: "Patricia Marina",     citta: "",                              foto: "assets/candidati/cardosi.jpg", bio: "" },
  { n: 12, cognome: "Colamarco",  nome: "Adele",                citta: "Liverpool",                     foto: "assets/candidati/colamarco.jpg", bio: "Originaria di Avellino e vive da 13 anni a Liverpool con il marito e i figli di 14 e 9 anni. Laureata in Scienze Naturali, ha vissuto e studiato anche ad Edimburgo e York, dove ha lavorato per RSPB. Si candida per aiutare i connazionali ad avere un servizio consolare più snello ed efficace." },
  { n: 13, cognome: "Denegri",    nome: "Valentina",           citta: "Douglas (Isola di Man)",        foto: "assets/candidati/denegri.jpg", bio: "Nata a Torino e, dopo aver vissuto in Italia fino ai trent'anni, si è trasferita sull'Isola di Man per quello che doveva essere un soggiorno temporaneo. Partita semplicemente per aiutare un amico a traslocare, ma la vita aveva altri progetti e, a distanza di molti anni, è ancora sull'Isola. In seguito si è sposata con quell'amico, ha avuto una figlia e, pur avendo successivamente intrapreso strade diverse, ha mantenuto un legame importante come genitore. Da oltre vent'anni lavora presso una scuola superiore, dove ha ricoperto diversi ruoli e acquisito una vasta esperienza professionale. Attualmente svolge l'incarico di School Business Manager, un ruolo che considera particolarmente gratificante e che le permette di contribuire concretamente alla crescita e al buon funzionamento della comunità scolastica. Pur vivendo all'estero da molti anni, ha mantenuto un forte legame con l'Italia, la cultura e la comunità italiana, valori che continua a promuovere e sostenere nel contesto in cui vive e lavora: infatti, insegna italiano al college." },
  { n: 14, cognome: "Eshun",      nome: "Comfort",              citta: "",                              foto: "assets/candidati/eshun.jpg", bio: "" },
  { n: 15, cognome: "Fazzi",      nome: "Marco",                citta: "Sheffield",                     foto: "assets/candidati/fazzi.jpg", bio: "" },
  { n: 16, cognome: "Giona",      nome: "Ciro",                 citta: "Bradford",                      foto: "assets/candidati/giona.jpg", bio: "Nato nel 1964, residente Regno Unito dal 1983. Diploma Maestro d'Arte. Pensionato.  Si candida al Comites per continuare ad assistere i connazionali come fa da decenni." },
  { n: 17, cognome: "Massini",    nome: "Silvia",               citta: "Manchester",                    foto: "assets/candidati/massini.jpg", bio: "Nata e cresciuta a Roma, si trasferisce in Inghilterra nel 1994 come visiting student a Brighton, dove conosce il compagno scozzese con cui vive e con cui ha due figli, nati e cresciuti a Manchester. Laureata in Scienze statistiche ed economiche alla Sapienza a Roma, ha continuato gli studi in Italia e Inghilterra dove ha intrapreso la carriera accademica, prima a Warwick Business School come ricercatrice (1999) e poi nella Business School dell'Università di Manchester (dal 2000). Consigliera nel Comites dal 2023." },
  { n: 18, cognome: "Pinto",      nome: "Giuseppe",             citta: "Warrington",                     foto: "assets/candidati/pinto.jpg", bio: "Napoletano di 50 anni, vive nel Regno Unito da 15 anni e dal 2017 risiede a Warrington con la sua famiglia. Laureato in Ingegneria Civile, ricopre il ruolo di Associate Director presso una multinazionale del settore, dove coordina e dirige la progettazione di infrastrutture aeroportuali, lavorando in particolare con gli scali del Nord dell'Inghilterra e Scozia. Appassionato di musica, lettura, cucina e innovazione tecnologica, fa volontariato per il gruppo Scout di Warrington East dove è membro del Trustee Board. La candidatura al Comites nasce dal ricordo vivo delle difficoltà affrontate al suo arrivo in UK, senza ancora una rete sociale e dal conseguente desiderio di rappresentare con pragmatismo e trasparenza le esigenze della comunità italiana, favorendone l'integrazione e il supporto reciproco." },
  { n: 19, cognome: "Rosella",    nome: "Sarah",                citta: "Carlisle",                      foto: "assets/candidati/rosella.jpg", bio: "Nata e cresciuta a Roma, si è trasferita nel nord dell'Inghilterra nel 2012. Ha una piccola attività a Carlisle, e vorrebbe aprire una scuola di italiano, iniziando con i bambini e poi eventualmente per adulti." },
  { n: 20, cognome: "Saia",       nome: "Vittoria",             citta: "West Bromwich",                 foto: "assets/candidati/saia.jpg", bio: "" },
  { n: 21, cognome: "Singh",      nome: "Kamal Deep",          citta: "Birmingham",                              foto: "assets/candidati/singh.jpg", bio: "Vive e lavora nel Regno Unito. Ha scelto di candidarsi per contribuire concretamente alla nostra comunità italiana, promuovendo una rappresentanza attenta, trasparente e vicina alle esigenze degli italiani all'estero." },
  { n: 22, cognome: "Totaro",     nome: "Immacolata",          citta: "Manchester",                    foto: "assets/candidati/totaro.jpg", bio: `"Un ponte tra culture, menti e soluzioni."<br>
"Nata a Napoli e venuta in UK nel 2011, il mio percorso è stato tutt'altro che lineare, e questa è proprio la mia forza. Con una formazione da Elettrotecnico in Italia, ho imparato la disciplina della logica e dei sistemi. Ma la mia vera passione sono sempre state le persone, ed è per questo che ho intrapreso gli studi in Psicologia e Consulenza, che sto attualmente approfondendo all'università per comprendere sempre meglio la mente umana. Segretaria del PD Manchester nel 2022/2023, che ha permesso al circolo di esistere qui nel North West in UK, sono una persona multitasking per natura e pronta ad aiutare per scelta. Per anni ho ricoperto il ruolo di Direttrice della Dunia Ltd, dove sono diventata un punto di riferimento per gli italiani in arrivo nel Regno Unito. Ho affrontato per loro le complessità della burocrazia, trasformando confusione in chiarezza e aiutando i nuovi arrivati a costruirsi una vita stabile e di successo in un paese straniero.<br>
Oltre alla gestione pratica e amministrativa, porto con me un approccio olistico al benessere. Negli ultimi anni ho svolto laboratori come terapista e come tale so che una comunità sana si fonda sull'equilibrio emotivo e mentale di chi la compone.<br>
Oggi sono pronta a mettere questo mix unico, fatto di capacità pratiche, empatia culturale al servizio del comitato. Non vedo solo problemi, ma sistemi da migliorare e persone da sostenere. Sono qui per ascoltare, per difendere i vostri interessi e per costruire ponti per ogni membro della nostra comunità."` },
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


function initPrivacyPolicy() {
  const dialog = document.getElementById("privacy-policy-dialog");
  const apri = document.querySelector(".privacy-policy-open");
  if (!dialog || !apri) return;

  function apriDialog() {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function chiudiDialog() {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  apri.addEventListener("click", apriDialog);
  dialog.querySelectorAll("[data-privacy-policy-close]").forEach((pulsante) => {
    pulsante.addEventListener("click", chiudiDialog);
  });
  dialog.addEventListener("click", (evento) => {
    if (evento.target === dialog) chiudiDialog();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCandidati();
  initPopupVoto();
  initPrivacyPolicy();
});
