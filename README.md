# Portfolio Prep

A guided process for Immersive Media Design students who are developing a portfolio: define, curate, document, explain, test, and revise.

The site is a static Vite + React app. Portfolio Audit answers stay in the browser (`localStorage`). There is no account and no backend.

Page copy lives in `src/content/`, one module per part of the guide.

## Install

```bash
npm install
```

## Dev

```bash
npm run dev
```

Open the URL Vite prints. Routes are served under `/PortfolioPrep/`.

## Build

```bash
npm run build
```

Output is in `dist/`. `dist/404.html` is a copy of `index.html`, so GitHub Pages can serve the app for unknown paths and keep the URL. A small script in `index.html` also restores paths encoded as `?/…`.

## GitHub Pages

https://mnolan4.github.io/PortfolioPrep/

The workflow in `.github/workflows/pages.yml` builds `dist` and deploys it with GitHub Actions. `base` is `/PortfolioPrep/`.
