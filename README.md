# Sito "Con Voi" — Comites Manchester 2026

Sito statico, nessuna build, nessun database. Tre file principali (`index.html`, `style.css`, `script.js`) più una cartella `assets/`.

## Pubblicare su GitHub Pages (gratis)

1. Crea un repository nuovo su GitHub, ad esempio `convoi-manchester-2026`. Può essere pubblico.
2. Carica dentro tutti i file di questa cartella (`index.html`, `style.css`, `script.js`, `assets/`), mantenendo la stessa struttura.
3. Vai su **Settings → Pages** nel repository.
4. In "Branch" scegli `main` e cartella `/ (root)`, poi salva.
5. Dopo un paio di minuti il sito è online su `https://<tuo-utente>.github.io/convoi-manchester-2026/`.

Per collegare un dominio proprio (es. `convoimanchester.it`): in Settings → Pages aggiungi il dominio in "Custom domain", poi presso il tuo registrar crea un record CNAME che punta a `<tuo-utente>.github.io`.

## Aggiornare un testo dopo la pubblicazione

- Programma e testi: modifica direttamente `index.html`, cerca il paragrafo da cambiare.
- Elenco candidati: modifica l'array `CANDIDATI` in cima a `script.js`.
- Colori: le variabili sono in cima a `style.css`, sotto `:root`.

## Aggiungere foto e bio ai candidati

Ogni candidato in `script.js` ha già i campi `foto` e `bio`, oggi vuoti.

1. Metti le foto (quadrate, almeno 300x300px) dentro `assets/candidati/`, un file per candidato, es. `ardito.jpg`.
2. Nell'array `CANDIDATI`, scrivi il percorso nel campo `foto`: `foto: "assets/candidati/ardito.jpg"`.
3. Scrivi il testo della bio (2-3 frasi bastano) nel campo `bio`.

La card cambia da sola: mostra la foto al posto delle iniziali, e aggiunge un pulsante "Leggi la bio" che apre il testo senza allungare la pagina. I candidati senza foto o senza bio restano come sono oggi, quindi puoi aggiornarli uno alla volta senza rifare tutto insieme.

Ogni modifica va ricaricata su GitHub (upload del file o `git push`); GitHub Pages si aggiorna da solo in un minuto o due.

## Popup "registrati per votare"

In fondo alla pagina c'è un popup che compare quando il visitatore scorre fino in fondo al sito, chiede l'email, e la invia a Formspree (un servizio gratuito che raccoglie gli invii e te li mostra in una dashboard). Un cookie impedisce che ricompaia allo stesso visitatore per 180 giorni, sia se chiude il popup con la X sia se invia l'email.

Per attivarlo:

1. Vai su [formspree.io](https://formspree.io) e crea un account gratuito.
2. Crea un nuovo form (New Form) e collega l'email dove vuoi ricevere le notifiche.
3. Copia l'endpoint che ti viene mostrato, tipo `https://formspree.io/f/xxxxabcd`.
4. Apri `script.js`, riga 5, e incollalo dentro `const FORMSPREE_ENDPOINT = "";` tra le virgolette.

Finché `FORMSPREE_ENDPOINT` è vuoto, il popup resta spento: non compare a nessuno. Le email raccolte si scaricano in CSV dalla dashboard di Formspree in qualsiasi momento.

## Chiudere il sito dopo le elezioni

Basta disattivare Pages in Settings → Pages → "Unpublish site", oppure eliminare il repository. Il sito resta comunque salvato sul tuo computer.

## Cosa contiene ogni file

- `index.html` — struttura e testi della pagina
- `style.css` — aspetto grafico
- `script.js` — elenco candidati e funzionamento delle schede del programma
- `assets/logo-512.png`, `assets/favicon.png` — logo della lista in due formati
- `assets/domanda-iscrizione-elenco-elettorale.pdf` — modulo di iscrizione all'elenco elettorale, scaricabile dalla sezione "Come si vota"
