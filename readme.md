# test
# BlueShield Alliance (Fictional Demo Site)

This is a static offline website demo.
Static site with:
- `index.html`
- `lore-origins.html`
- `lore-depths.html`
- `lore-conflict.html`
- `styles.css`
- `script.js`
- `assets/images/*.webp`

## Why direct download from Codex can fail
## Does CSS/JS run automatically?
Yes.

Sometimes this environment only gives you code/output, not a direct "download file" button.
If that happens, use one of the packaging methods below to create a single archive locally.
If each HTML file is in the same folder as `styles.css` and `script.js`, then opening the HTML will load both automatically through:

## Quick start (run locally)

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open: `http://127.0.0.1:4173/index.html`

## Create a downloadable ZIP (recommended)

From the project root, run:

```bash
zip -r blueshield-offline-site.zip index.html styles.css script.js README.md OFFLINE_EXPORT.md
```html
<link rel="stylesheet" href="styles.css" />
<script src="script.js"></script>
```

That ZIP is the file you share/send to others.

## If you do not have `zip`

Use tar instead:
## Best way to run on Mac (recommended)
Some browsers restrict local `file://` behavior for scripted fetch/export. Use a local server:

```bash
tar -czf blueshield-offline-site.tar.gz index.html styles.css script.js README.md OFFLINE_EXPORT.md
cd /path/to/test
python3 -m http.server 4173
```

## How offline access works

- The site uses one HTML entry point (`index.html`) plus local files (`styles.css` and `script.js`). Images are embedded directly inside `index.html` as Base64 data URLs (no separate JPG files required).
- If someone else wants to run it offline, they need the full folder contents.
- Best sharing method: send one archive (`.zip` or `.tar.gz`) with everything.

## Manual reconstruction option
Open:

If you truly cannot download files directly, see `OFFLINE_EXPORT.md` for exact steps to recreate each file from code blocks.
- `http://127.0.0.1:4173/index.html`

## Notes

- The campaign and lore are fictional.
- Forms are front-end only and do not process real payments.


## Image source note

- The JPG photos in `assets/photos/` were downloaded from internet photo sources and stored locally for offline use.
## Open directly without server
You can double-click an HTML file and it will usually render with styles/scripts.

Download Offline HTML now saves clean source and keeps image file paths in `assets/images`.

## Can I pull files from the internet into this project?

Yes. I can download internet files in this environment and save them into the repo (for example into `assets/photos/`).
For this site, the photos are local `.jpg` files that were downloaded from web image sources and are served offline afterward.

Example download pattern:
## Packaging to share
From project root:

```bash
curl -L "https://picsum.photos/seed/real-dolphin-ocean/1200/800.jpg" -o assets/photos/dolphins.jpg
zip -r blueshield-offline-site.zip index.html lore-origins.html lore-depths.html lore-conflict.html styles.css script.js assets/images readme.md "offline export.md"
```


## Embedded image mode

- JPG images are embedded directly in `index.html` (`data:image/jpeg;base64,...`).
- You do **not** need separate JPG files to view images when opening the page.
## Notes
- The campaign and lore are fictional.
- Forms are front-end demo flows only.
