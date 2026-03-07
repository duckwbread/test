# Offline Export / Manual Rebuild Guide

If you cannot directly download files from your Codex session, use one of these methods.

## Method A: Package everything in one command (best)

Run in project root:
## Recommended run mode
Use a local server for reliable JS/image export behavior:

```bash
zip -r blueshield-offline-site.zip index.html styles.css script.js README.md OFFLINE_EXPORT.md
cd /path/to/test
python3 -m http.server 4173
```

Alternative:

```bash
tar -czf blueshield-offline-site.tar.gz index.html styles.css script.js README.md OFFLINE_EXPORT.md
```

## Method B: Recreate files manually from code

Then copy/paste file contents from this repository into files with matching names:
Then open:

- `your-site/index.html`
- `your-site/styles.css`
- `your-site/script.js`
- `http://127.0.0.1:4173/index.html`

## Validate your rebuilt site
## File set required
- `index.html`
- `lore-origins.html`
- `lore-depths.html`
- `lore-conflict.html`
- `styles.css`
- `script.js`
- `assets/images/*.webp`

## Create one shareable ZIP
```bash
cd your-site
python3 -m http.server 4173 --bind 0.0.0.0
zip -r blueshield-offline-site.zip index.html lore-origins.html lore-depths.html lore-conflict.html styles.css script.js assets/images readme.md "offline export.md"
```

Open:

- `http://127.0.0.1:4173/index.html`

## Troubleshooting

- If images are missing, verify the folder paths exactly match references in `index.html`.
- If layout is unstyled, verify `styles.css` is beside `index.html`.
- If modals do not open, verify `script.js` is beside `index.html`.

## Share with others

Anyone who wants the site offline must receive the full file set (preferably as a ZIP archive).
- No styling: ensure `styles.css` is next to HTML files.
- No modal behavior: ensure `script.js` is next to HTML files.
- Missing images: ensure `assets/images` folder is included.
- Export not embedding images: run via local server (not `file://`).
