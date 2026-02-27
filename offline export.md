# Offline Export / Manual Rebuild Guide

If you cannot directly download files from your Codex session, use one of these methods.

## Method A: Package everything in one command (best)

Run in project root:

```bash
zip -r blueshield-offline-site.zip index.html styles.css script.js README.md OFFLINE_EXPORT.md
```

Alternative:

```bash
tar -czf blueshield-offline-site.tar.gz index.html styles.css script.js README.md OFFLINE_EXPORT.md
```

## Method B: Recreate files manually from code

Then copy/paste file contents from this repository into files with matching names:

- `your-site/index.html`
- `your-site/styles.css`
- `your-site/script.js`

## Validate your rebuilt site

```bash
cd your-site
python3 -m http.server 4173 --bind 0.0.0.0
```

Open:

- `http://127.0.0.1:4173/index.html`

## Troubleshooting

- If images are missing, verify the folder paths exactly match references in `index.html`.
- If layout is unstyled, verify `styles.css` is beside `index.html`.
- If modals do not open, verify `script.js` is beside `index.html`.

## Share with others

Anyone who wants the site offline must receive the full file set (preferably as a ZIP archive).
