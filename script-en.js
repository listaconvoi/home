// Formspree endpoint for collecting email addresses through the "register
// to vote" popup. Go to formspree.io, create a free form, and paste the
// address provided here (e.g. "https://formspree.io/f/xxxxabcd").
// The popup will not appear while this is empty.
const FORMSPREE_ENDPOINT = "https://api.web3forms.com/submit";

// Candidates for Manchester Comites - "Con Voi"
//
// City: the candidate's city of residence in the UK. Entries containing ""
// still need to be completed.
//
// All photo paths are already set up in assets/candidati/, using the
// candidate's surname in lowercase (e.g. ardito.jpg). The photo appears
// automatically when the file is added. Until then, initials are shown
// on a blue background, with no broken-image icons.
//
// To add a biography, enter the text in the "bio" field. Without a biography,
// the card does not display the "Read bio" button.
const CANDIDATI = [
  { n: 1,  cognome: "Ardito",     nome: "Cesare Giulio",      citta: "Manchester",                    foto: "assets/candidati/ardito.jpg", bio: "Current President of Manchester Comites. A mathematician originally from Rome, he has lived in Manchester for ten years. He administers the Italians in Manchester community and founded I3Italy, a project providing information and support for Italians in England. In 2021, he was elected to Manchester Comites with Italia4Italy. His work has focused primarily on representing the Italian community in the North of England in its dealings with public institutions, taking its concerns to national level, including at a hearing before the Italian Chamber of Deputies last February." },
  { n: 2,  cognome: "Islam",      nome: "Safiqul",            citta: "Birmingham",                    foto: "assets/candidati/islam.jpg", bio: "Current Vice-President of Manchester Comites. He holds an MA from Leeds Trinity University and an honorary doctorate in Philosophy specialising in International Business and Community Leadership from Kennedy University. He is Managing Director of UIB Housing Ltd., UIB Service & Multi Centre Ltd. and LBC Builders Ltd. He founded UIB (United Italian Bangladesh) and the ASTON Bangla school, supporting the Italian community in Birmingham and the West Midlands with permits, visas, translations, consular procedures, and citizenship and benefits applications. He also promotes Italian language learning among younger generations through B1-level courses." },
  { n: 3,  cognome: "Aait",       nome: "Assia",               citta: "Birmingham",                              foto: "assets/candidati/aait.jpg", bio: "I'm Assia, an Italian-Moroccan born in Turin. I hold a degree in Applied Modern Languages from France and a Master's in Psychology from Birmingham City University. My experiences across different cultures, languages and countries have given me a strong intercultural awareness and taught me to listen closely to others. I want to put this experience to work for the Italian community in the UK, celebrating its diversity, building connections and giving younger generations a voice." },
  { n: 4,  cognome: "Akram",      nome: "Imran",               citta: "Nelson",                        foto: "assets/candidati/akram.jpg", bio: "He has lived in Nelson, UK, for over 12 years. An Italian citizen of Pakistani origin, he previously lived in Italy for around 18 years. He has always been closely involved with his community, consistently making time to listen and help people resolve their problems. He believes in solidarity, integration and mutual support, and remains committed to helping those in need." },
  { n: 5,  cognome: "Ansah",      nome: "Ernest Asiedu",       citta: "Telford",                              foto: "assets/candidati/ansah.jpg", bio: "Chairman of the Ghanaian-Italian Association in Telford, whose motto is 'Unity is Strength'. For years, he has built partnerships and cultural connections to bring the diaspora community together and help it thrive." },
  { n: 6,  cognome: "Asif",       nome: "Farwa",                citta: "Coventry",                              foto: "assets/candidati/asif.jpg", bio: "Born and raised in Italy, with Pakistani roots, she has lived in the UK since she was seventeen. A graduate in International Relations from Coventry University, she worked in education for three years and volunteered at the Italian Vice Consulate in Birmingham for two years. She speaks fluent Italian, English and Urdu. For years, she has organised and promoted fundraising campaigns and charitable projects supporting the most vulnerable communities in different countries. She is standing for Comites to serve the community, listen to fellow Italians' needs, offer practical support and help build an Italian community that is more united, inclusive and responsive to people's needs." },
  { n: 7,  cognome: "Awan",       nome: "Khalid Mahmood",      citta: "Birmingham",                              foto: "assets/candidati/awan.jpg", bio: "My name is Khalid Mahmood Awan. I was born in Pakistan and lived in Italy for 19 years, an important experience that gave me a deep understanding of Italian culture, society and values. I have lived in Birmingham, UK, for around ten years. Over the years, I have kept strong ties with both the Italian community and people of Pakistani origin living in the UK. I enjoy being there for others, listening to their needs and helping, wherever possible, to find solutions to everyday difficulties." },
  { n: 8,  cognome: "Beneventi",  nome: "Alessia",              citta: "Nottingham",                    foto: "assets/candidati/beneventi.jpg", bio: "An Italian teacher and Director of the Italian School of Nottingham. She has worked in the north of the UK for many years, promoting Italian language and culture in partnership with local schools, families and associations. Working within the Manchester consular district, she has become a trusted point of contact for many Italians in the region, thanks to her experience in education and her ongoing commitment to the community." },
  { n: 9,  cognome: "Boateng",    nome: "Nana Adjei",          citta: "Leeds",                         foto: "assets/candidati/boateng.jpg", bio: "Nana Adjei Boateng has been active in community organisations in Leeds and West Yorkshire for many years, with extensive experience in leadership roles and in fostering dialogue between different communities. He studied Engineering at the Polytechnic School in Ghana, developing technical and organisational skills that he has also put to use in his community work. In Leeds, he served as Vice-President of the Men Executives Club and later as President of the VIP Men's Club. He was also Vice-President of Ghana Union Leeds, supporting the Ghanaian community's activities and promoting social and cultural cohesion. He is currently President of the Yorkshire Italian Diaspora Association in Leeds, through which he promotes Italian culture, organises social and cultural initiatives and supports the Italian community in Leeds and West Yorkshire. If elected to Comites, his experience in community organisations and multicultural settings would enable him to bring first-hand knowledge of local communities and their needs to the role." },
  { n: 10, cognome: "Buccelli",   nome: "Bruno",                citta: "Lancaster",                     foto: "assets/candidati/buccelli.jpg", bio: "An entrepreneur and event organiser with over ten years' experience in hospitality, culture and promoting the local area. He has created and organised major events in Lancaster, including Lancaster Festa Italia, one of the UK's leading celebrations of Italian culture and tradition, and the Lancaster International Film Festival, which he founded and directs. He is also the owner and founder of Buccelli's, an Italian restaurant in central Lancaster that opened in 2016. Originally from Rome, Bruno built the restaurant around authenticity, tradition and the quality of Italian cooking, with a particular focus on regional recipes, Italian ingredients and food made by hand. Under his leadership, Buccelli's has earned major national recognition in the UK. In 2022, the restaurant received the prestigious ITA0039 Award, recognising excellence in \"100% Italian Taste\", while its chefs won Best Italian Chef at the Italian Awards. In 2026, Buccelli's was also Highly Recommended in the Best Restaurant in the North West of England category at the Italian Awards, reaffirming its place among the UK's most recognised Italian restaurants. Through his restaurant, events and cultural initiatives, Bruno Buccelli continues to promote Italian culture in the UK, building a bridge between Italian traditions and the local communities of Lancaster and Lancashire." },
  { n: 11, cognome: "Cardosi",    nome: "Patricia Marina",     citta: "Birmingham",                              foto: "assets/candidati/cardosi.jpg", bio: "Born in Barquisimeto, Venezuela, into a family of Italians who emigrated after the Second World War. She graduated in Law from the Catholic University of Caracas and practised as a lawyer for 35 years. From 1995 to 2004, she also served as Honorary Vice-Consul of Italy in Barquisimeto, gaining extensive experience in relations between citizens and Italian institutions. She has lived in England since 2017 and maintains a strong connection with the Italian community, with a particular interest in promoting Italian language and culture. She is standing for Comites to put her professional and consular experience at the service of fellow Italians and help make their dealings with Italian authorities easier." },
  { n: 12, cognome: "Colamarco",  nome: "Adele",                citta: "Liverpool",                     foto: "assets/candidati/colamarco.jpg", bio: "Originally from Avellino, she has lived in Liverpool for 13 years with her husband and their children, aged 14 and 9. A Natural Sciences graduate, she has also lived and studied in Edinburgh and York, where she worked for the RSPB. She is standing to help fellow Italians access a more efficient, streamlined consular service." },
  { n: 13, cognome: "Denegri",    nome: "Valentina",           citta: "Douglas (Isle of Man)",        foto: "assets/candidati/denegri.jpg", bio: "Born in Turin, she lived in Italy until the age of thirty before moving to the Isle of Man for what was meant to be a temporary stay. She had simply gone to help a friend move house, but life had other plans: many years later, she is still on the island. She later married that friend and had a daughter. Although they subsequently went their separate ways, they have maintained an important bond as parents. She has worked at a secondary school for over twenty years, holding various roles and gaining a wealth of professional experience. She is currently the School Business Manager, a role she finds particularly rewarding and which allows her to make a practical contribution to the school community's development and smooth running. Despite many years abroad, she has maintained a strong connection with Italy, its culture and the Italian community, which she continues to promote and support where she lives and works. She also teaches Italian at college." },
  { n: 14, cognome: "Eshun",      nome: "Comfort",              citta: "Solihull",                              foto: "assets/candidati/eshun.jpg", bio: "A devoted mother of four, a caring professional and an Occupational Therapy student. She is deeply committed to supporting others, particularly those in need of help and encouragement. Resilient, hardworking and devoted to her family, she faces life's challenges with faith, strength and determination while building a better future for herself and her children." },
  { n: 15, cognome: "Fazzi",      nome: "Marco",                citta: "Sheffield",                     foto: "assets/candidati/fazzi.jpg", bio: "Born in Monza and living in Manchester for around three years, he is a theoretical physicist with 15 years of research experience across Belgium, the United States, Israel, Italy, Sweden and the UK. As someone whose career has taken him from country to country, he knows first-hand the practical challenges faced by people moving abroad for work, study or personal reasons. During his career, he has served as school fellowships lead, developing considerable expertise in project coordination, international funding applications, managing priorities and deadlines, and organising events for over 200 participants. He will bring his analytical skills to the study of data about the consular district and put his practical management experience at the service of the community through Manchester Comites." },
  { n: 16, cognome: "Giona",      nome: "Ciro",                 citta: "Bradford",                      foto: "assets/candidati/giona.jpg", bio: "Born in 1964, he has lived in the UK since 1983. He holds a diploma in art. He is standing for Comites to continue supporting fellow Italians, as he has done for decades." },
  { n: 17, cognome: "Howlader",      nome: "Almas",                 citta: "Walsall",                      foto: "assets/candidati/howlader.jpg", bio: "He works in hospitality in Walsall. He is standing to improve the wellbeing of Italian citizens across the consular district by simplifying administrative procedures and improving support for all Italians." },
  { n: 18, cognome: "Massini",    nome: "Silvia",               citta: "Manchester",                    foto: "assets/candidati/massini.jpg", bio: "Born and raised in Rome, she moved to England in 1994 as a visiting student in Brighton, where she met her Scottish partner. They live together and have two children, both born and raised in Manchester. After graduating in Statistical and Economic Sciences from Sapienza University in Rome, she continued her studies in Italy and England, where she began her academic career as a researcher at Warwick Business School in 1999, before joining the University of Manchester's Business School in 2000. She has been a Comites member since 2023." },
  { n: 19, cognome: "Pinto",      nome: "Giuseppe",             citta: "Warrington",                     foto: "assets/candidati/pinto.jpg", bio: "A 50-year-old from Naples, he has lived in the UK for 15 years and in Warrington with his family since 2017. A Civil Engineering graduate, he is an Associate Director at a multinational engineering company, where he leads and coordinates airport infrastructure design, working particularly with airports in the North of England and Scotland. He enjoys music, reading, cooking and technological innovation, and volunteers with Warrington East Scouts as a member of its Trustee Board. His decision to stand for Comites stems from his vivid memories of the challenges he faced on arriving in the UK without a social network, and his resulting desire to represent the Italian community's needs with a practical, transparent approach, promoting integration and mutual support." },
  { n: 20, cognome: "Rosella",    nome: "Sarah",                citta: "Carlisle",                      foto: "assets/candidati/rosella.jpg", bio: "Born and raised in Rome, she moved to the North of England in 2012. She runs a small business in Carlisle and would like to open an Italian language school, initially for children and potentially for adults later on." },
   { n: 21, cognome: "Singh",      nome: "Kamal Deep",          citta: "Birmingham",                              foto: "assets/candidati/singh.jpg", bio: "He lives and works in the UK. He has chosen to stand to make a practical contribution to our Italian community, working for representation that is attentive, transparent and responsive to the needs of Italians abroad." },
  { n: 22, cognome: "Totaro",     nome: "Immacolata",          citta: "Manchester",                    foto: "assets/candidati/totaro.jpg", bio: `"A bridge between cultures, minds and solutions."<br>
"Born in Naples, I came to the UK in 2011. My path has been anything but straightforward, and that is precisely my strength. My training as an electrical technician in Italy taught me the discipline of logic and systems. But my real passion has always been people. That is why I began studying Psychology and Counselling, which I am now pursuing further at university to deepen my understanding of the human mind. As Secretary of PD Manchester in 2022/2023, I helped keep the local branch active here in the North West of the UK. I am a natural multitasker and choose to put my energy into helping others. For years, I was Director of Dunia Ltd, where I became a trusted source of support for Italians arriving in the UK. I helped them navigate complex bureaucracy, turning confusion into clarity and helping newcomers build stable, successful lives in a foreign country.<br>
Alongside my practical and administrative skills, I bring a holistic approach to wellbeing. In recent years, I have run workshops as a therapist, and that experience has taught me that a healthy community depends on the emotional and mental wellbeing of its members.<br>
Today, I am ready to put this distinctive combination of practical skills and cultural empathy at the service of the committee. I see not just problems, but systems to improve and people to support. I am here to listen, to stand up for your interests and to build bridges for every member of our community."` },
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
          ? `<img src="${c.foto}" alt="Photo of ${c.nome} ${c.cognome}" class="candidato-foto candidato-foto-img" loading="lazy" decoding="async">`
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
        <button class="candidato-bio-toggle" type="button" aria-expanded="false">Read bio</button>
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
        btn.textContent = open ? "Read bio" : "Hide bio";
        bio.hidden = open;
      });
    }

    frag.appendChild(li);
  });
  grid.appendChild(frag);
}

// "Register to vote" popup, shown only once when the user reaches the
// bottom of the page. The cookie lasts 180 days: anyone who has already
// seen (or closed) it will not see it again in that browser.
const POPUP_COOKIE = "convoi_popup_visto";
const POPUP_COOKIE_GIORNI = 180;
// How far the user must scroll before the popup appears, in pixels.
// 500px is roughly two or three mouse-wheel movements on a typical screen.
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
    const accessKeyInput = document.querySelector('.popup-voto-form input[name="access_key"]');
  if (!accessKeyInput || !accessKeyInput.value) return; // Missing Web3Forms key: popup disabled
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
        stato.textContent = "You'll receive the form by email shortly. You'll need to print it, sign it and send it to the Consulate.";
        stato.hidden = false;
        form.hidden = true;
        setCookie(POPUP_COOKIE, "1", POPUP_COOKIE_GIORNI);
        window.removeEventListener("scroll", onScroll);
        setTimeout(chiudi, 6000);
      } else {
        stato.textContent = "Unable to send. Please try again shortly.";
        stato.hidden = false;
        form.querySelector("button[type=submit]").disabled = false;
      }
    } catch {
      stato.textContent = "Unable to send. Please check your internet connection.";
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
  "Douglas (Isle of Man)": [54.1523, -4.4861],
  "Sheffield": [53.3811, -1.4701],
  "Bradford": [53.7950, -1.7594],
  "Warrington": [53.3900, -2.5970],
  "Carlisle": [54.8925, -2.9329],
  "West Bromwich": [52.5187, -2.1952]
};

function initCandidateMap() {
  const mapEl = document.getElementById("candidate-map");
  if (!mapEl || typeof L === "undefined") return;

  const map = L.map(mapEl, {
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18
  }).addTo(map);

  const perCitta = new Map();

  CANDIDATI.forEach(c => {
    const citta = c.citta && c.citta.trim();
    if (!citta || !CITY_COORDS[citta]) return;

    if (!perCitta.has(citta)) perCitta.set(citta, []);
    perCitta.get(citta).push(`${c.nome} ${c.cognome}`);
  });

  const punti = [];

  perCitta.forEach((nomi, citta) => {
    const coord = CITY_COORDS[citta];
    punti.push(coord);

    L.circleMarker(coord, {
      radius: 5,
      weight: 2,
      color: "#003399",
      fillColor: "#0097b2",
      fillOpacity: 0.9
    })
      .addTo(map)
      .bindTooltip(`<strong>${citta}</strong><br>${nomi.join("<br>")}`);
  });

  if (punti.length) {
    map.fitBounds(punti, { padding: [10, 10] });
  }
}

function initTabs() {
  const buttons = Array.from(document.querySelectorAll(".pillar-btn"));
  const panels = Array.from(document.querySelectorAll(".pillar-panel"));
  if (!buttons.length) return;

  function activate(id) {
    buttons.forEach(b => {
      const on = b.dataset.target === id;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });

    panels.forEach(p => {
      const on = p.id === id;
      p.classList.toggle("is-active", on);

      if (on) {
        p.removeAttribute("hidden");
      } else {
        p.setAttribute("hidden", "");
      }
    });
  }

  buttons.forEach(b => {
    b.addEventListener("click", () => activate(b.dataset.target));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCandidati();
  initCandidateMap();
  initTabs();
  initPopupVoto();
  initPrivacyPolicy();
});