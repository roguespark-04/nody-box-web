# Nody Box — product site

Commercial marketing site for **Nody Box**: battery-powered Ethernet heartbeat modules for AI datacenter construction.

This repo is the public marketing + downloads page. It is **not** the collector / ops dashboard.

## Local preview

From this directory:

```bash
# Python
python3 -m http.server 4173

# or Node
npx --yes serve -l 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

Static files only — no build step. Compatible with GitHub Pages from the repository root.

## GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: **`main`** / folder: **`/ (root)`**
4. Save — site publishes at `https://roguespark-04.github.io/nody-box-web/`

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Commercial product homepage |
| `privacy.html` / `terms.html` | Legal placeholders |
| `styles.css` | Light commercial enterprise theme (copper accents, Atom tokens) + local fonts |
| `app.js` | Mobile nav + notify placeholder |
| `assets/` | Cube mark, favicon, IBM Plex woff2 |
| `screenshots/` | Capture references |

App Store / Google Play cards are **Coming soon** placeholders (no fake store URLs).
