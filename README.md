# Portfolio site

Plain HTML/CSS/JS — no build step, no dependencies. Files: `index.html` (content), `styles.css` (design; change `--accent` to re-theme), `script.js` (scroll effects), `assets/` (CV PDF).

## Preview locally
Open `index.html` in a browser (or run `python3 -m http.server` in this folder).

## Deploy free on GitHub Pages
1. Create a repo named `<github-username>.github.io` (user site) — or any repo name for a project site.
2. Upload these files to the `main` branch.
3. Settings → Pages → Source: *Deploy from a branch* → `main` / root.
4. The site goes live at `https://<github-username>.github.io/` within a couple of minutes.

## Keep it current
Citation count (`data-count` in the stats row) and CV: replace `assets/Bishnu_Ramachandran_CV.pdf` and keep the filename.
