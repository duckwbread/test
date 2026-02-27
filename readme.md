 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 00bcb6e3738c7392875d6c3e65c22d569eaff069..cb01a92fc4045fdd2ae1b79a4d5ab66ab1826308 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,49 @@
-# test
\ No newline at end of file
+# BlueShield Alliance (Fictional Demo Site)
+
+This is a static offline website demo.
+
+## Why direct download from Codex can fail
+
+Sometimes this environment only gives you code/output, not a direct "download file" button.
+If that happens, use one of the packaging methods below to create a single archive locally.
+
+## Quick start (run locally)
+
+```bash
+python3 -m http.server 4173 --bind 0.0.0.0
+```
+
+Then open: `http://127.0.0.1:4173/index.html`
+
+## Create a downloadable ZIP (recommended)
+
+From the project root, run:
+
+```bash
+zip -r blueshield-offline-site.zip index.html styles.css script.js assets README.md OFFLINE_EXPORT.md
+```
+
+That ZIP is the file you share/send to others.
+
+## If you do not have `zip`
+
+Use tar instead:
+
+```bash
+tar -czf blueshield-offline-site.tar.gz index.html styles.css script.js assets README.md OFFLINE_EXPORT.md
+```
+
+## How offline access works
+
+- The site depends on local files (`index.html`, `styles.css`, `script.js`, and all files under `assets/` and `assets/photos/`).
+- If someone else wants to run it offline, they need the full folder contents.
+- Best sharing method: send one archive (`.zip` or `.tar.gz`) with everything.
+
+## Manual reconstruction option
+
+If you truly cannot download files directly, see `OFFLINE_EXPORT.md` for exact steps to recreate each file from code blocks.
+
+## Notes
+
+- The campaign and lore are fictional.
+- Forms are front-end only and do not process real payments.
 
EOF
)
