# Wagner Custom Designs — company site

Commercial company homepage for **Wagner Custom Designs** (interim name). Custom design and hardware products for industry.

**Nody Box** is a **product sub-page** of the company site (`nody-box.html`) — not a separate brand website. Same Wagner Custom Designs chrome/nav throughout. Company mark: rearing unicorn + wordmark on white + ice/sky blue (`#5EB3E8` family).

This repo remains named `nody-box-web` for now. Static GitHub Pages from the repository root. It is **not** the collector / ops dashboard. Product surface: **website + hardware device** (USB / `etctl` provisioning). No mobile apps.

## Local preview

```bash
python3 -m http.server 4173
# or: npx --yes serve -l 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## GitHub Pages

Published at `https://roguespark-04.github.io/nody-box-web/` from branch **`main`** / folder **`/ (root)`**.

- Company: `https://roguespark-04.github.io/nody-box-web/`
- Product: `https://roguespark-04.github.io/nody-box-web/nody-box.html`

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Company homepage only (Products · About · Contact) |
| `nody-box.html` | Nody Box product sub-page (same company chrome; hero, how, why, specs, provisioning, sales) |
| `privacy.html` / `terms.html` | Legal placeholders (Wagner Custom Designs) |
| `styles.css` | White + ice/sky blue + local IBM Plex |
| `app.js` | Mobile nav |
| `assets/wagner-unicorn-logo.png` | Company mark (ice/sky blue unicorn) |
| `screenshots/` | Capture references |
