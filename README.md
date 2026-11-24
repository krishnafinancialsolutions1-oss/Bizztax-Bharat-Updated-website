# BizzTaxBharat website (home page)

Static site: plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure
- `index.html` – home page
- `css/style.css` – all styles
- `js/main.js` – scroll animations, tabs and the interactive 3D illustration
- `assets/` – logo, hero illustration and favicon

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder.

## Deploy
Push to GitHub, then import the repo in Vercel (framework preset: **Other**, no build command, output directory: the repo root).

## Notes
- Service and About links currently point to the existing pages at v24-kappa-ashy.vercel.app. Replace them with local pages as each page is rebuilt.
- Brand colours: navy `#0F3D91`, green `#4A9A1A`.
- Check that you hold the licence for the hero illustration before publishing.
