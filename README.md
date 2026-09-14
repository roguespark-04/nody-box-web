# Nody Box — product site

Commercial marketing site for **Nody Box**: battery-powered Ethernet heartbeat **hardware** for AI datacenter construction and cable plant verification.

This repo is the public company / product marketing page. It is **not** the collector / ops dashboard. Product surface: **website + hardware device** (USB / `etctl` provisioning).

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
| `index.html` | Industrial commercial company homepage |
| `privacy.html` / `terms.html` | Legal placeholders |
| `styles.css` | Charcoal + copper corporate theme + local IBM Plex |
| `app.js` | Mobile nav |
| `assets/` | Brand lockup (copper N + NODY BOX), N mark/favicon, fonts |
| `screenshots/` | Capture references |

Design intent: Harris / Applied Digital / Siemens / Keysight-class **hardware seller** — website + device only; not a SaaS or app-store landing page.
