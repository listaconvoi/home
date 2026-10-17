// Web3Forms handles the optional email registration request.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// Candidate biographies remain the original supplied text.
// Photo paths are converted to the optimized WebP copies when rendering.
// Farwa Asif has no photo on the server: add its path to foto when available.
const CANDIDATI = [
  { n: 1,  cognome: "Ardito",     nome: "Cesare Giulio",      citta: "Manchester",                    foto: "assets/candidati/ardito.jpg", bio: "Attuale Presidente del Comites di Manchester. Matematico di professione, originario di Roma e residente a Manchester da dieci anni. Amministratore della comunità Italiani a Manchester e fondatore di I3Italy, progetto dedicato all’informazione e all’assistenza per gli italiani in Inghilterra. Nel 2021 è stato eletto nel Comites di Manchester con la lista Italia4Italy. La sua attività si è concentrata soprattutto sulla rappresentanza istituzionale della comunità italiana del Nord dell’Inghilterra, portandone le istanze fino alle sedi nazionali, tra cui un’audizione alla Camera dei deputati lo scorso febbraio." },
  { n: 2,  cognome: "Islam",      nome: "Safiqul",            citta: "Birmingham",                    foto: "assets/candidati/islam.jpg", bio: "Attuale Vice-Presidente del Comites di Manchester. MA (Università di Leeds Trinity) e Dottorato onorario in Filosofia con specializzazione in Business internazionale e Leadership comunitaria (Università Kennedy), Amministratore delegato (UIB Housing Ltd., UIB Service & Multi Centre Ltd., LBC Builders Ltd.). Fondatore dell'associazione UIB (United Italian Bangladesh) e della scuola ASTON Bangla, che assiste la comunità italiana di Birmingham e delle West Midlands con permessi, visti, traduzioni, procedure consolari e domande di cittadinanza e sussidi. Promuove inoltre l'apprendimento della lingua italiana per le giovani generazioni, offrendo corsi di livello B1." },
  { n: 3,  cognome: "Aait",       nome: "Assia",               citta: "Birmingham",                              foto: "assets/candidati/aait.jpg", bio: "Sono Assia, nata a Torino e italo-marocchina, con una laurea francese in Lingue Moderne Applicate e un Master in Psicologia presso la Birmingham City University. Il mio percorso tra culture, lingue e Paesi diversi mi ha dato una forte sensibilità interculturale e una grande capacità di ascolto.  Il mio obiettivo è mettere la mia esperienza al servizio della comunità italiana nel Regno Unito, valorizzandone la diversità, creando connessioni e dando voce alle nuove generazioni." },
  { n: 4,  cognome: "Akram",      nome: "Imran",               citta: "Nelson",                        foto: "assets/candidati/akram.jpg", bio: "Vive a Nelson (Regno Unito) da oltre 12 anni. È cittadino italiano di origine pakistana e ha vissuto in Italia per circa 18 anni. È sempre stato molto vicino alla comunità, con un costante impegno ad ascoltare le persone e ad aiutarle a risolvere i loro problemi. Crede nell'importanza della solidarietà, dell'integrazione e del sostegno reciproco, e continua a lavorare con dedizione per offrire supporto a chi ne ha bisogno." },
  { n: 5,  cognome: "Ansah",      nome: "Ernest Asiedu",       citta: "Telford",                              foto: "assets/candidati/ansah.jpg", bio: "Chairman della Ghanaian-Italian Association di Telford, con il motto 'Unity is Strength'. Crea da anni sinergie e connessioni culturali per unire e valorizzare la diaspora." },
  { n: 6,  cognome: "Asif",       nome: "Farwa",                citta: "Coventry",                              foto: "", bio: "Nata e cresciuta in Italia, di origini pakistane, vive nel Regno Unito dall’età di diciassette anni. Laureata in Relazioni Internazionali presso l’Università di Coventry, ha lavorato per tre anni nel settore dell’istruzione e svolto volontariato per due anni presso il Vice Consolato Italiano a Birmingham. Parla correntemente italiano, inglese e urdu. Da anni organizza e promuove raccolte fondi e progetti di beneficenza a sostegno delle comunità più vulnerabili in diversi Paesi. Si candida al Comites con il desiderio di essere utile, ascoltare le esigenze dei connazionali, offrire un sostegno concreto e contribuire a una comunità italiana più unita, inclusiva e vicina alle persone." },
  { n: 7,  cognome: "Awan",       nome: "Khalid Mahmood",      citta: "Birmingham",                              foto: "assets/candidati/awan.jpg", bio: "Mi chiamo Khalid Mahmood Awan. Sono nato in Pakistan e ho vissuto in Italia per 19 anni, un’esperienza importante che mi ha permesso di conoscere profondamente la cultura, la società e i valori italiani. Da circa 10 anni vivo a Birmingham, nel Regno Unito. Nel corso degli anni ho mantenuto un forte legame con la comunità italiana e con le persone di origine pakistana residenti nel Regno Unito. Mi piace essere disponibile per gli altri, ascoltare le loro esigenze e contribuire, quando possibile, a trovare soluzioni alle difficoltà della vita quotidiana." },
  { n: 8,  cognome: "Beneventi",  nome: "Alessia",              citta: "Nottingham",                    foto: "assets/candidati/beneventi.jpg", bio: "Insegnante di italiano e direttrice dell’Italian School of Nottingham. Da anni lavora nel nord del Regno Unito, dove promuove la lingua e la cultura italiana collaborando con scuole, famiglie e associazioni del territorio. Opera nell’area di competenza del Consolato di Manchester ed è diventata un punto di riferimento per molti italiani che vivono nella regione, grazie alla sua esperienza nel settore educativo e alla costante attenzione verso la comunità." },
  { n: 9,  cognome: "Boateng",    nome: "Nana Adjei",          citta: "Leeds",                         foto: "assets/candidati/boateng.jpg", bio: "Nana Adjei Boateng è attivo da molti anni nella vita associativa di Leeds e del West Yorkshire, con una consolidata esperienza in ruoli di responsabilità e nel dialogo tra comunità diverse. Ha studiato Ingegneria presso il Polytechnic School in Ghana, acquisendo competenze tecniche e organizzative che ha poi applicato anche alla propria attività comunitaria. A Leeds è stato Vice-Presidente del Men Executives Club e successivamente Presidente del VIP Men's Club. Ha inoltre ricoperto il ruolo di Vicepresidente della Ghana Union Leeds, contribuendo alle attività della comunità ghanese e alla promozione della coesione sociale e culturale. Attualmente è Presidente della Yorkshire Italian Diaspora Association a Leeds, attraverso la quale promuove la cultura italiana, organizza iniziative sociali e culturali e sostiene la comunità italiana di Leeds e del West Yorkshire. La sua esperienza associativa e multiculturale gli consentirebbe, se eletto, di portare nel ruolo di delegato Comites una conoscenza diretta delle comunità locali e delle loro esigenze." },
  { n: 10, cognome: "Buccelli",   nome: "Bruno",                citta: "Lancaster",                     foto: "assets/candidati/buccelli.jpg", bio: "Imprenditore e organizzatore di eventi con oltre dieci anni di esperienza nel settore dell’ospitalità, della cultura e della promozione del territorio. Nel corso della sua attività ha ideato e organizzato importanti eventi a Lancaster, tra cui Lancaster Festa Italia, una delle principali manifestazioni dedicate alla cultura e alla tradizione italiana nel Regno Unito, e il Lancaster International Film Festival, del quale è fondatore e direttore. È inoltre il proprietario e fondatore di Buccelli’s, ristorante italiano nel centro di Lancaster, aperto nel 2016. Originario di Roma, Bruno ha costruito il ristorante intorno ai valori dell’autenticità, della tradizione e della qualità della cucina italiana, con particolare attenzione alle ricette regionali, ai prodotti italiani e alla preparazione artigianale. Sotto la sua guida, Buccelli’s ha ottenuto importanti riconoscimenti a livello nazionale nel Regno Unito. Nel 2022 il ristorante ha ricevuto il prestigioso ITA0039 Award, riconoscimento dedicato alla migliore espressione del “100% Italian Taste”, mentre i suoi chef, sono stati premiati come Best Italian Chef agli Italian Awards. Nel 2026 Buccelli’s è stata inoltre Highly Recommended come Best Restaurant in the North West of England agli Italian Awards, confermando la presenza del ristorante tra le realtà italiane più riconosciute nel panorama gastronomico britannico. Attraverso la ristorazione, gli eventi e le iniziative culturali, Bruno Buccelli continua a promuovere la cultura italiana nel Regno Unito, creando un ponte tra la tradizione italiana e la comunità locale di Lancaster e Lancashire." },
  { n: 11, cognome: "Cardosi",    nome: "Patricia Marina",     citta: "Birmingham",                              foto: "assets/candidati/cardosi.jpg", bio: "Nata a Barquisimeto, in Venezuela, da una famiglia di emigrati italiani del dopoguerra. Laureata in Giurisprudenza presso l’Università Cattolica di Caracas, ha esercitato la professione di avvocato per 35 anni. Dal 1995 al 2004 ha inoltre ricoperto l’incarico di Vice Console Onorario d’Italia a Barquisimeto, maturando una lunga esperienza nei rapporti tra cittadini e istituzioni italiane. Vive in Inghilterra dal 2017 e continua a mantenere un forte legame con la comunità italiana, con particolare attenzione alla promozione della lingua e della cultura italiana. Si candida al Comites per mettere la propria esperienza professionale e consolare al servizio dei connazionali e contribuire a facilitare i rapporti con le autorità italiane." },
  { n: 12, cognome: "Colamarco",  nome: "Adele",                citta: "Liverpool",                     foto: "assets/candidati/colamarco.jpg", bio: "Originaria di Avellino e vive da 13 anni a Liverpool con il marito e i figli di 14 e 9 anni. Laureata in Scienze Naturali, ha vissuto e studiato anche ad Edimburgo e York, dove ha lavorato per RSPB. Si candida per aiutare i connazionali ad avere un servizio consolare più snello ed efficace." },
  { n: 13, cognome: "Denegri",    nome: "Valentina",           citta: "Douglas (Isola di Man)",        foto: "assets/candidati/denegri.jpg", bio: "Nata a Torino e, dopo aver vissuto in Italia fino ai trent'anni, si è trasferita sull'Isola di Man per quello che doveva essere un soggiorno temporaneo. Partita semplicemente per aiutare un amico a traslocare, ma la vita aveva altri progetti e, a distanza di molti anni, è ancora sull'Isola. In seguito si è sposata con quell'amico, ha avuto una figlia e, pur avendo successivamente intrapreso strade diverse, ha mantenuto un legame importante come genitore. Da oltre vent'anni lavora presso una scuola superiore, dove ha ricoperto diversi ruoli e acquisito una vasta esperienza professionale. Attualmente svolge l'incarico di School Business Manager, un ruolo che considera particolarmente gratificante e che le permette di contribuire concretamente alla crescita e al buon funzionamento della comunità scolastica. Pur vivendo all'estero da molti anni, ha mantenuto un forte legame con l'Italia, la cultura e la comunità italiana, valori che continua a promuovere e sostenere nel contesto in cui vive e lavora: infatti, insegna italiano al college." },
  { n: 14, cognome: "Eshun",      nome: "Comfort",              citta: "Solihull",                              foto: "assets/candidati/eshun.jpg", bio: "Madre devota di quattro figli, professionista attenta alle esigenze degli altri e studentessa di terapia occupazionale. È particolarmente impegnata nel sostegno agli altri, soprattutto a chi ha bisogno di assistenza e incoraggiamento. Resiliente, laboriosa e profondamente legata alla famiglia, affronta le sfide della vita con fede, forza e determinazione, costruendo al tempo stesso un futuro migliore per sé e per i suoi figli." },
  { n: 15, cognome: "Fazzi",      nome: "Marco",                citta: "Sheffield",                     foto: "assets/candidati/fazzi.jpg", bio: "Nato a Monza e residente a Manchester da circa tre anni, è un fisico teorico con 15 anni di esperienza di ricerca vissuti tra Belgio, Stati Uniti, Israele, Italia, Svezia e Regno Unito. Da autentico expat di professione, conosce in prima persona le sfide pratiche affrontate da chi si trasferisce all'estero per lavoro, studio o esigenze personali. Nel suo percorso professionale ha ricoperto il ruolo di school fellowships lead, maturando una solida competenza nel coordinamento di progetti, nella partecipazione a bandi internazionali, nella gestione di priorità e scadenze e nell'organizzazione di eventi per oltre 200 partecipanti. Metterà a disposizione del Comites di Manchester il proprio background analitico per lo studio dei dati del territorio e un'esperienza gestionale pragmatica al servizio della comunità." },
  { n: 16, cognome: "Giona",      nome: "Ciro",                 citta: "Bradford",                      foto: "assets/candidati/giona.jpg", bio: "Nato nel 1964, residente Regno Unito dal 1983. Diploma Maestro d'Arte. Si candida al Comites per continuare ad assistere i connazionali come fa da decenni." },
  { n: 17, cognome: "Howlader",      nome: "Almas",                 citta: "Walsall",                      foto: "assets/candidati/howlader.jpg", bio: "Lavora nella ristorazione a Walsall. Si candida per impegnarsi nel migliorare il benessere dei cittadini italiani nella circoscrizione, semplificando le procedure burocratiche e migliorando l'assistenza per tutti gli italiani." },
  { n: 18, cognome: "Massini",    nome: "Silvia",               citta: "Manchester",                    foto: "assets/candidati/massini.jpg", bio: "Nata e cresciuta a Roma, si trasferisce in Inghilterra nel 1994 come visiting student a Brighton, dove conosce il compagno scozzese con cui vive e con cui ha due figli, nati e cresciuti a Manchester. Laureata in Scienze statistiche ed economiche alla Sapienza a Roma, ha continuato gli studi in Italia e Inghilterra dove ha intrapreso la carriera accademica, prima a Warwick Business School come ricercatrice (1999) e poi nella Business School dell'Università di Manchester (dal 2000). Consigliera nel Comites dal 2023." },
  { n: 19, cognome: "Pinto",      nome: "Giuseppe",             citta: "Warrington",                     foto: "assets/candidati/pinto.jpg", bio: "Napoletano di 50 anni, vive nel Regno Unito da 15 anni e dal 2017 risiede a Warrington con la sua famiglia. Laureato in Ingegneria Civile, ricopre il ruolo di Associate Director presso una multinazionale del settore, dove coordina e dirige la progettazione di infrastrutture aeroportuali, lavorando in particolare con gli scali del Nord dell'Inghilterra e Scozia. Appassionato di musica, lettura, cucina e innovazione tecnologica, fa volontariato per il gruppo Scout di Warrington East dove è membro del Trustee Board. La candidatura al Comites nasce dal ricordo vivo delle difficoltà affrontate al suo arrivo in UK, senza ancora una rete sociale e dal conseguente desiderio di rappresentare con pragmatismo e trasparenza le esigenze della comunità italiana, favorendone l'integrazione e il supporto reciproco." },
  { n: 20, cognome: "Rosella",    nome: "Sarah",                citta: "Carlisle",                      foto: "assets/candidati/rosella.jpg", bio: "Nata e cresciuta a Roma, si è trasferita nel nord dell'Inghilterra nel 2012. Ha una piccola attività a Carlisle, e vorrebbe aprire una scuola di italiano, iniziando con i bambini e poi eventualmente per adulti." },
   { n: 21, cognome: "Singh",      nome: "Kamal Deep",          citta: "Birmingham",                              foto: "assets/candidati/singh.jpg", bio: "Vive e lavora nel Regno Unito. Ha scelto di candidarsi per contribuire concretamente alla nostra comunità italiana, promuovendo una rappresentanza attenta, trasparente e vicina alle esigenze degli italiani all'estero. L'obiettivo è quello di aiutare le persone ad orientarsi, creare connessioni e fare in modo che ogni voce, soprattutto quella delle nuove generazioni, possa essere ascoltata." },
  { n: 22, cognome: "Totaro",     nome: "Immacolata",          citta: "Manchester",                    foto: "assets/candidati/totaro.jpg", bio: `"Un ponte tra culture, menti e soluzioni."<br>
"Nata a Napoli e venuta in UK nel 2011, il mio percorso è stato tutt'altro che lineare, e questa è proprio la mia forza. Con una formazione da Elettrotecnico in Italia, ho imparato la disciplina della logica e dei sistemi. Ma la mia vera passione sono sempre state le persone, ed è per questo che ho intrapreso gli studi in Psicologia e Consulenza, che sto attualmente approfondendo all'università per comprendere sempre meglio la mente umana. Segretaria del PD Manchester nel 2022/2023, che ha permesso al circolo di esistere qui nel North West in UK, sono una persona multitasking per natura e pronta ad aiutare per scelta. Per anni ho ricoperto il ruolo di Direttrice della Dunia Ltd, dove sono diventata un punto di riferimento per gli italiani in arrivo nel Regno Unito. Ho affrontato per loro le complessità della burocrazia, trasformando confusione in chiarezza e aiutando i nuovi arrivati a costruirsi una vita stabile e di successo in un paese straniero.<br>
Oltre alla gestione pratica e amministrativa, porto con me un approccio olistico al benessere. Negli ultimi anni ho svolto laboratori come terapista e come tale so che una comunità sana si fonda sull'equilibrio emotivo e mentale di chi la compone.<br>
Oggi sono pronta a mettere questo mix unico, fatto di capacità pratiche, empatia culturale al servizio del comitato. Non vedo solo problemi, ma sistemi da migliorare e persone da sostenere. Sono qui per ascoltare, per difendere i vostri interessi e per costruire ponti per ogni membro della nostra comunità."` },
];

const UI = {
  "photoOf": "Foto di ",
  "readBio": "Leggi la bio",
  "hideBio": "Nascondi la bio",
  "sending": "Invio in corso…",
  "sent": "Riceverai presto il modulo al tuo indirizzo email. Dovrai stamparlo, firmarlo e inviarlo al Consolato.",
  "sendFailed": "Invio non riuscito, riprova tra poco.",
  "networkFailed": "Invio non riuscito, controlla la connessione.",
  "mapLoading": "Caricamento mappa…",
  "mapFailed": "Mappa non disponibile. Le città sono elencate nelle schede dei candidati.",
  "mapHelp": "Usa Tab per esplorare le città e i nomi dei candidati. Le frecce spostano la mappa; + e − cambiano lo zoom. Le stesse informazioni sono nelle schede dei candidati.",
  "retry": "Riprova",
  "video": "Video del programma"
};

function escapeMarkup(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function candidateMarkup(c) {
  const name = `${c.nome} ${c.cognome}`;
  const initials = (c.nome.trim()[0] + c.cognome.trim()[0]).toUpperCase();
  const photo = c.foto && c.foto.trim();
  const optimizedPhoto = photo && photo.replace("assets/candidati/", "assets/optimized/candidati/").replace(/\.[^.]+$/, ".webp");
  const hasBio = Boolean(c.bio && c.bio.trim());
  return `<li class="candidato" data-candidate-index="${c.n}">
    <div class="candidato-top">
      <span class="candidato-foto-shell">
        <span class="candidato-foto candidato-foto-fallback" aria-hidden="true">${escapeMarkup(initials)}</span>
        ${photo ? `<img src="${escapeMarkup(optimizedPhoto)}" srcset="${escapeMarkup(optimizedPhoto.replace(/\.webp$/, '-90.webp'))} 90w, ${escapeMarkup(optimizedPhoto)} 180w" sizes="(max-width: 700px) 72px, 90px" data-original-src="${escapeMarkup(photo)}" alt="${escapeMarkup(UI.photoOf + name)}" class="candidato-foto candidato-foto-img" width="180" height="180" loading="lazy" decoding="async">` : ""}
      </span>
      <div class="candidato-id">
        <span class="candidato-name" id="candidato-name-${c.n}">${escapeMarkup(name)}</span>
        ${c.citta && c.citta.trim() ? `<span class="candidato-luogo">${escapeMarkup(c.citta)}</span>` : ""}
      </div>
    </div>
    ${hasBio ? `<button class="candidato-bio-toggle" type="button" aria-expanded="false" aria-controls="candidato-bio-${c.n}" aria-label="${escapeMarkup(UI.readBio + ': ' + name)}">${UI.readBio}</button>
    <p class="candidato-bio" id="candidato-bio-${c.n}" hidden>${c.bio}</p>` : ""}
  </li>`;
}

function initCandidati() {
  const grid = document.getElementById("candidati-grid");
  if (!grid || grid.dataset.initialized) return;
  grid.dataset.initialized = "true";
  if (!grid.querySelector(".candidato")) {
    grid.innerHTML = CANDIDATI.map(candidateMarkup).join("");
  }
  grid.querySelectorAll(".candidato-foto-img").forEach(photo => {
    let triedOriginal = false;
    function fallback() {
      if (!triedOriginal && photo.dataset.originalSrc) {
        triedOriginal = true;
        photo.removeAttribute("srcset");
        photo.src = photo.dataset.originalSrc;
      } else {
        photo.hidden = true;
      }
    }
    photo.addEventListener("error", fallback);
    if (photo.complete && photo.naturalWidth === 0) fallback();
  });
  grid.addEventListener("click", event => {
    const button = event.target.closest(".candidato-bio-toggle");
    if (!button || !grid.contains(button)) return;
    const bio = document.getElementById(button.getAttribute("aria-controls"));
    if (!bio) return;
    const open = button.getAttribute("aria-expanded") === "true";
    const label = open ? UI.readBio : UI.hideBio;
    const name = button.closest(".candidato").querySelector(".candidato-name").textContent;
    button.setAttribute("aria-expanded", String(!open));
    button.setAttribute("aria-label", `${label}: ${name}`);
    button.textContent = label;
    bio.hidden = open;
  });
}

// Keep the existing 180-day preference and 500px scroll trigger.
const POPUP_COOKIE = "convoi_popup_visto";
const POPUP_COOKIE_GIORNI = 180;
const POPUP_SCROLL_SOGLIA = 500;

function setCookie(nome, valore, giorni) {
  const expires = new Date(Date.now() + giorni * 86400000).toUTCString();
  try {
    document.cookie = `${nome}=${valore}; expires=${expires}; path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
  } catch {
    // Browsers which block storage can still use the rest of the page.
  }
}

function getCookie(nome) {
  try {
    return document.cookie.split(";").some(row => row.trim().startsWith(`${nome}=`));
  } catch {
    return false;
  }
}

function initPopupVoto(initialScrollY = window.scrollY) {
  const popup = document.getElementById("popup-voto");
  // Native dialogs provide focus containment, Escape, and focus restoration.
  if (!popup || typeof popup.showModal !== "function" || getCookie(POPUP_COOKIE)) return;
  const form = popup.querySelector(".popup-voto-form");
  const input = popup.querySelector(".popup-voto-input");
  const status = popup.querySelector(".popup-voto-stato");
  const closeButton = popup.querySelector(".popup-voto-close");
  const submitButton = form && form.querySelector("button[type=submit]");
  const accessKey = form && form.querySelector('[name="access_key"]');
  if (!form || !input || !status || !closeButton || !submitButton || !accessKey || !accessKey.value) return;
  form.action = WEB3FORMS_ENDPOINT;
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  status.setAttribute("tabindex", "-1");
  let shown = false;
  let submitting = false;

  function closePopup() {
    if (popup.open) popup.close();
  }

  function showIfScrolled(scrollY) {
    if (shown || scrollY < POPUP_SCROLL_SOGLIA || document.querySelector("dialog[open]")) return;
    shown = true;
    window.removeEventListener("scroll", onScroll);
    popup.hidden = false;
    popup.classList.add("is-visible");
    popup.showModal();
  }

  function onScroll() {
    showIfScrolled(window.scrollY);
  }

  function showStatus(message) {
    status.textContent = message;
    status.hidden = false;
  }

  popup.addEventListener("close", () => {
    popup.classList.remove("is-visible");
    popup.hidden = true;
    setCookie(POPUP_COOKIE, "1", POPUP_COOKIE_GIORNI);
    window.removeEventListener("scroll", onScroll);
  });
  closeButton.addEventListener("click", closePopup);
  popup.addEventListener("click", event => {
    if (event.target === popup) closePopup();
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (submitting || !form.reportValidity()) return;
    submitting = true;
    submitButton.disabled = true;
    form.setAttribute("aria-busy", "true");
    showStatus(UI.sending);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
        signal: controller.signal
      });
      const result = await response.json();
      if (response.ok && result.success === true) {
        showStatus(UI.sent);
        form.hidden = true;
        setCookie(POPUP_COOKIE, "1", POPUP_COOKIE_GIORNI);
        if (popup.open) status.focus({ preventScroll: true });
      } else {
        showStatus(UI.sendFailed);
      }
    } catch {
      showStatus(UI.networkFailed);
    } finally {
      window.clearTimeout(timeout);
      form.removeAttribute("aria-busy");
      submitButton.disabled = false;
      submitting = false;
    }
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  showIfScrolled(initialScrollY);
}

function initPrivacyPolicy() {
  const dialog = document.getElementById("privacy-policy-dialog");
  const openButton = document.querySelector(".privacy-policy-open");
  if (!dialog || !openButton) return;
  openButton.addEventListener("click", () => {
    if (dialog.open) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  });
  function closeDialog() {
    if (typeof dialog.close === "function") dialog.close();
    else {
      dialog.removeAttribute("open");
      openButton.focus();
    }
  }
  dialog.querySelectorAll("[data-privacy-policy-close]").forEach(button => {
    button.addEventListener("click", closeDialog);
  });
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog();
  });
}

const CITY_COORDS = {
  "Manchester": [53.4808, -2.2426],
  "Birmingham": [52.4862, -1.8904],
  "Coventry": [52.408054, -1.510556],
  "Nelson": [53.8353, -2.2134],
  "Nottingham": [52.9548, -1.1581],
  "Leeds": [53.8008, -1.5491],
  "Telford": [52.67659, -2.4492],
  "Lancaster": [54.0470, -2.8010],
  "Liverpool": [53.4084, -2.9916],
  "Solihull": [52.41426, -1.78094],
  "Douglas (Isola di Man)": [54.1523, -4.4861],
  "Sheffield": [53.3811, -1.4701],
  "Bradford": [53.7950, -1.7594],
  "Warrington": [53.3900, -2.5970],
  "Carlisle": [54.8925, -2.9329],
  // Coordinates: https://wiki.openstreetmap.org/wiki/Walsall
  "Walsall": [52.5888, -1.9837],
  "West Bromwich": [52.5187, -2.1952]
};

let leafletLoading;

function loadMapAsset(tag, url, id) {
  let element = document.getElementById(id);
  if (element && element.dataset.loaded === "true") return Promise.resolve();
  return new Promise((resolve, reject) => {
    if (!element) {
      element = document.createElement(tag);
      element.id = id;
      if (tag === "link") {
        element.rel = "stylesheet";
        element.href = url;
      } else {
        element.src = url;
        element.async = true;
      }
    }
    const timeout = window.setTimeout(failed, 15000);
    function cleanup() {
      window.clearTimeout(timeout);
      element.removeEventListener("load", loaded);
      element.removeEventListener("error", failed);
    }
    function loaded() {
      cleanup();
      element.dataset.loaded = "true";
      resolve();
    }
    function failed() {
      cleanup();
      element.remove();
      reject(new Error("Map asset unavailable"));
    }
    element.addEventListener("load", loaded, { once: true });
    element.addEventListener("error", failed, { once: true });
    if (!element.isConnected) document.head.appendChild(element);
  });
}

function loadLeaflet() {
  if (!leafletLoading) {
    leafletLoading = Promise.all([
      loadMapAsset("link", "assets/vendor/leaflet/leaflet.css", "convoi-leaflet-css"),
      window.L ? Promise.resolve() : loadMapAsset("script", "assets/vendor/leaflet/leaflet.js", "convoi-leaflet-js")
    ]).then(() => {
      if (!window.L) throw new Error("Map library unavailable");
      return window.L;
    }).catch(error => {
      leafletLoading = null;
      throw error;
    });
  }
  return leafletLoading;
}

function initCandidateMap() {
  const mapElement = document.getElementById("candidate-map");
  if (!mapElement || mapElement.dataset.mapState) return;
  mapElement.dataset.mapState = "idle";
  mapElement.setAttribute("role", "region");
  const help = document.createElement("p");
  help.id = "candidate-map-help";
  help.className = "sr-only";
  help.textContent = UI.mapHelp;
  mapElement.after(help);
  mapElement.setAttribute("aria-describedby", help.id);
  let map;

  async function showMap() {
    if (mapElement.dataset.mapState === "loading" || mapElement.dataset.mapState === "ready") return;
    mapElement.dataset.mapState = "loading";
    mapElement.setAttribute("aria-busy", "true");
    const message = document.createElement("p");
    message.className = "candidate-map-message";
    message.setAttribute("role", "status");
    message.textContent = UI.mapLoading;
    mapElement.replaceChildren(message);
    try {
      const L = await loadLeaflet();
      mapElement.replaceChildren();
      map = L.map(mapElement, {
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: true
      });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        maxZoom: 18
      }).addTo(map);

      const cities = new Map();
      CANDIDATI.forEach(candidate => {
        const city = candidate.citta && candidate.citta.trim();
        if (!city || !CITY_COORDS[city]) return;
        if (!cities.has(city)) cities.set(city, []);
        cities.get(city).push(`${candidate.nome} ${candidate.cognome}`);
      });
      const points = Array.from(cities.keys(), city => CITY_COORDS[city]);
      if (points.length) map.fitBounds(points, { padding: [10, 10] });

      cities.forEach((names, city) => {
        const coordinate = CITY_COORDS[city];
        const marker = L.circleMarker(coordinate, {
          radius: 5, weight: 2, color: "#003399", fillColor: "#0097b2", fillOpacity: 0.9
        }).addTo(map).bindTooltip(`<strong>${escapeMarkup(city)}</strong><br>${names.map(escapeMarkup).join("<br>")}`, { interactive: true });
        const element = marker.getElement();
        if (!element) return;
        element.setAttribute("tabindex", "0");
        element.setAttribute("role", "button");
        element.setAttribute("aria-label", `${city}: ${names.join(", ")}`);
        element.setAttribute("aria-expanded", "false");
        marker.on("tooltipopen", () => element.setAttribute("aria-expanded", "true"));
        marker.on("tooltipclose", () => element.setAttribute("aria-expanded", "false"));
        element.addEventListener("focus", () => {
          map.panInside(coordinate, { padding: [10, 10], animate: false });
        });
        element.addEventListener("keydown", event => {
          if (event.key === "Escape") {
            event.stopPropagation();
            marker.closeTooltip();
          } else if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.stopPropagation();
            marker.toggleTooltip();
          }
        });
      });
      mapElement.dataset.mapState = "ready";
    } catch {
      if (map) {
        map.remove();
        map = null;
      }
      mapElement.dataset.mapState = "failed";
      message.textContent = UI.mapFailed;
      const retry = document.createElement("button");
      retry.type = "button";
      retry.className = "btn btn-small btn-outline";
      retry.textContent = UI.retry;
      retry.addEventListener("click", showMap);
      mapElement.replaceChildren(message, retry);
    } finally {
      mapElement.removeAttribute("aria-busy");
    }
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      showMap();
    }, { rootMargin: "160px 0px" });
    observer.observe(mapElement);
  } else {
    showMap();
  }
}

function initTabs() {
  document.querySelectorAll('.pillar-index[role="tablist"]').forEach(tablist => {
    const buttons = Array.from(tablist.querySelectorAll(".pillar-btn")).filter(button => document.getElementById(button.dataset.target));
    if (!buttons.length) return;
    function activate(button, focus = false) {
      buttons.forEach(tab => {
        const selected = tab === button;
        tab.classList.toggle("is-active", selected);
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(tab.dataset.target);
        panel.classList.toggle("is-active", selected);
        panel.hidden = !selected;
        panel.tabIndex = 0;
      });
      if (focus) button.focus();
    }
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => activate(button));
      button.addEventListener("keydown", event => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        const vertical = tablist.getAttribute("aria-orientation") === "vertical";
        let next;
        if (event.key === (vertical ? "ArrowDown" : "ArrowRight")) next = (index + 1) % buttons.length;
        else if (event.key === (vertical ? "ArrowUp" : "ArrowLeft")) next = (index + buttons.length - 1) % buttons.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = buttons.length - 1;
        else return;
        event.preventDefault();
        activate(buttons[next], true);
      });
    });
    activate(buttons.find(button => button.getAttribute("aria-selected") === "true") || buttons[0]);
  });
}

function initVideos() {
  document.querySelectorAll(".programma-video-frame [data-video-id]").forEach(button => {
    button.addEventListener("click", event => {
      const id = button.dataset.videoId;
      if (!/^[\w-]{11}$/.test(id)) return;
      event.preventDefault();
      const frame = document.createElement("iframe");
      frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      frame.title = button.dataset.videoTitle || button.getAttribute("aria-label") || UI.video;
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      button.closest(".programma-video-frame").replaceChildren(frame);
      frame.focus({ preventScroll: true });
    }, { once: true });
  });
}

function initPage() {
  const initialScrollY = window.scrollY;
  initCandidati();
  initTabs();
  initPopupVoto(initialScrollY);
  initPrivacyPolicy();
  initVideos();
  initCandidateMap();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initPage, { once: true });
else initPage();
