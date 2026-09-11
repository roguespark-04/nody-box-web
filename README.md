# Nody Box — product site

Marketing site for **Nody Box**: battery-powered Ethernet heartbeat modules for AI datacenter construction.

> Still phoning home. Not dead yet.

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

Static files only — no build step.

## GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: **`main`** / folder: **`/ (root)`**
4. Save — site publishes at `https://roguespark-04.github.io/nody-box-web/`

Optional CLI (if you have admin on the repo):

```bash
gh api -X PUT "repos/roguespark-04/nody-box-web/pages" \
  -f build_type=legacy \
  -f source='{"branch":"main","path":"/"}'
```

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Single-page marketing site |
| `styles.css` | Self-contained styles + local fonts |
| `app.js` | Notify placeholder (no backend) |
| `assets/` | Favicon + IBM Plex woff2 |
| `screenshots/` | Capture references |

App Store / Google Play cards are **Coming soon** placeholders (no fake store URLs).
