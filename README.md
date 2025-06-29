# Impfplan-Tracker

Eine Progressive Web App (PWA) zum Tracking von 84-Tage Impfplänen für Katzen.

## Features
- 84-Tage Impfkalender
- Dosisberechnung basierend auf Gewicht
- Tägliche Erinnerungen
- Offline-fähig (PWA)
- Lokale Datenspeicherung

## Deployment

### Automatisches Deployment
Das Repository ist für automatisches Deployment auf Fly.io konfiguriert.

### Manuelles Deployment
```bash
fly deploy
```

### Lokale Entwicklung
```bash
# Mit Python
python -m http.server 8080

# Mit Node.js
npx serve . -p 8080
```

## Technologie
- Vanilla JavaScript
- Tailwind CSS (CDN)
- PWA Support
- Nginx (Production)

## Versions

Die aktuelle Version wird im Footer angezeigt und ist ebenfalls Bestandteil des
Service-Worker Cache-Namens. Bei jedem Deployment sollte diese Versionsnummer
inkrementiert werden, damit installierte PWAs stets die neueste Version laden.
