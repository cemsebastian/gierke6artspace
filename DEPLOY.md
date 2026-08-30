# Gierke6 Art Space — Deployment (GitHub Pages + Squarespace-Domain)

Die Website ist eine rein statische Seite (HTML/CSS/JS) im Ordner `site/`.
Squarespace kann keinen eigenen Code hosten — aber die bei Squarespace gekaufte
Domain kann per DNS auf GitHub Pages zeigen. Das Hosting ist kostenlos.

## 1. GitHub-Repository anlegen

1. Auf https://github.com einloggen (ggf. kostenloses Konto erstellen).
2. Neues Repository anlegen, z. B. `gierke6artspace` (Public).
3. Den **Inhalt** des Ordners `site/` hochladen (per "Add file → Upload files"
   oder per git). Wichtig: `index.html` muss im Repo-Root liegen, die Datei
   `CNAME` ebenfalls.

Per Kommandozeile:

```bash
cd site
git init
git add .
git commit -m "Gierke6 Art Space Website"
git branch -M main
git remote add origin https://github.com/<DEIN-USERNAME>/gierke6artspace.git
git push -u origin main
```

## 2. GitHub Pages aktivieren

1. Im Repository: **Settings → Pages**.
2. Unter "Build and deployment": Source = **Deploy from a branch**,
   Branch = `main`, Ordner `/ (root)` → Save.
3. Nach 1–2 Minuten ist die Seite unter
   `https://<DEIN-USERNAME>.github.io/gierke6artspace/` erreichbar.

## 3. Domain bei Squarespace auf GitHub Pages zeigen lassen

1. Bei Squarespace einloggen → **Domains** → `gierke6artspace.de` →
   **DNS-Einstellungen** (DNS Settings).
2. Vorhandene Squarespace-eigene A-Records/CNAMEs für die Domain entfernen
   (die auf Squarespace-Server zeigen).
3. Diese Einträge anlegen:

   | Typ   | Host | Wert                    |
   |-------|------|-------------------------|
   | A     | @    | 185.199.108.153         |
   | A     | @    | 185.199.109.153         |
   | A     | @    | 185.199.110.153         |
   | A     | @    | 185.199.111.153         |
   | CNAME | www  | `<DEIN-USERNAME>.github.io` |

4. Im GitHub-Repo unter **Settings → Pages → Custom domain**:
   `gierke6artspace.de` eintragen und speichern.
   Danach **"Enforce HTTPS"** aktivieren (erscheint, sobald das Zertifikat
   ausgestellt wurde — kann bis zu 24 h dauern, meist deutlich schneller).

Fertig: Die Seite läuft dann unter https://gierke6artspace.de.

## Inhalte später ändern

- **Fotos ergänzen:** Neue Bilder als `img/raum3.jpg` / `img/raum4.jpg`
  hochladen und in `index.html` die beiden mit
  `<!-- PLACEHOLDER -->` markierten `<figure>`-Blöcke durch echte
  `<img>`-Blöcke ersetzen (Vorlage: die beiden Blöcke darüber).
- **Texte ändern:** direkt in `index.html` — alle Texte stehen dort im Klartext.
- Nach jeder Änderung: Datei im GitHub-Repo aktualisieren (Upload/Commit),
  die Seite baut sich automatisch neu.

## ⚠️ Bitte prüfen

- **Impressum** (`impressum.html`): Name, Adresse (Gierkeplatz 6), Telefon und
  E-Mail wurden von gierke6contemporary.de übernommen — bitte auf Richtigkeit
  prüfen. Ein Impressum ist in Deutschland Pflicht (§ 5 DDG).
- **Kontakt-E-Mail:** aktuell `gierkeplatz6@gmail.com` (in `index.html` und
  `impressum.html`).
- **Datenschutz:** Die Schriften werden lokal eingebunden (keine Google-Fonts-
  Anfragen, DSGVO-konform) und eine Datenschutzerklärung liegt unter
  `datenschutz.html`. Bitte einmal gegenlesen.
- **Google Business Profile:** Für lokale Suchanfragen ("Eventraum
  Charlottenburg") lohnt sich ein kostenloses Google-Business-Profil für
  "Gierke6 Art Space", Schustehrusstraße 17 — Kategorie Veranstaltungsraum /
  Kunstgalerie, mit Fotos und Link zur Website.
- **Backlink:** Auf gierke6contemporary.de einen Link zu gierke6artspace.de
  setzen (und umgekehrt ist bereits geschehen) — die neue Domain startet ohne
  Backlinks.
