# test
# BlueShield Alliance (Fictional Demo Site)

This is a static offline website demo.

## Why direct download from Codex can fail

Sometimes this environment only gives you code/output, not a direct "download file" button.
If that happens, use one of the packaging methods below to create a single archive locally.

## Quick start (run locally)

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open: `http://127.0.0.1:4173/index.html`

## Create a downloadable ZIP (recommended)

From the project root, run:

```bash
zip -r blueshield-offline-site.zip index.html styles.css script.js README.md OFFLINE_EXPORT.md
```

That ZIP is the file you share/send to others.

## If you do not have `zip`

Use tar instead:

```bash
tar -czf blueshield-offline-site.tar.gz index.html styles.css script.js README.md OFFLINE_EXPORT.md
```

## How offline access works

- The site uses one HTML entry point (`index.html`) plus local files (`styles.css` and `script.js`). Images are embedded directly inside `index.html` as Base64 data URLs (no separate JPG files required).
- If someone else wants to run it offline, they need the full folder contents.
- Best sharing method: send one archive (`.zip` or `.tar.gz`) with everything.

## Manual reconstruction option

If you truly cannot download files directly, see `OFFLINE_EXPORT.md` for exact steps to recreate each file from code blocks.

## Notes

- The campaign and lore are fictional.
- Forms are front-end only and do not process real payments.


## Image source note

- The JPG photos in `assets/photos/` were downloaded from internet photo sources and stored locally for offline use.


## Can I pull files from the internet into this project?

Yes. I can download internet files in this environment and save them into the repo (for example into `assets/photos/`).
For this site, the photos are local `.jpg` files that were downloaded from web image sources and are served offline afterward.

Example download pattern:

```bash
curl -L "https://picsum.photos/seed/real-dolphin-ocean/1200/800.jpg" -o assets/photos/dolphins.jpg
```


## Embedded image mode

- JPG images are embedded directly in `index.html` (`data:image/jpeg;base64,...`).
- You do **not** need separate JPG files to view images when opening the page.
