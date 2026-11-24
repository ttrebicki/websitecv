# Tomasz Trębicki

Publiczna strona portfolio.

## Wymagania

- Node.js 20 lub nowszy
- npm

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona będzie dostępna pod adresem http://localhost:3000.

Build produkcyjny lokalnie:

```bash
npm run build
npm start
```

## Wdrożenie na Netlify

Hosting to Netlify. Komenda buildu: `npm run build`. Katalog publikacji: `.next`.

Połącz repozytorium z kontem Netlify w panelu albo użyj CLI:

```bash
netlify login
netlify deploy --build --prod
```

Ustaw zmienną środowiskową `NEXT_PUBLIC_SITE_URL` na publiczny adres witryny. Sitemap i `robots.txt` biorą z niej URL. Gdy zmienna nie jest ustawiona, używany jest `http://localhost:3000`.
