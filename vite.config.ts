import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { guidePages, legacyPaths } from "./src/content/nav.ts";

/**
 * GitHub Pages has no SPA rewrite. 404.html keeps unknown paths on the app.
 * A directory index for each guide route lets that URL return 200.
 */
function spaFallback(): Plugin {
  return {
    name: "github-pages-spa-fallback",
    apply: "build",
    closeBundle() {
      const outDir = resolve("dist");
      const indexPath = resolve(outDir, "index.html");
      copyFileSync(indexPath, resolve(outDir, "404.html"));
      const routes = [...guidePages.map((page) => page.path), "/audit", ...legacyPaths];
      for (const routePath of routes) {
        if (routePath === "/") continue;
        const dir = resolve(outDir, routePath.replace(/^\//, ""));
        mkdirSync(dir, { recursive: true });
        copyFileSync(indexPath, resolve(dir, "index.html"));
      }
    },
  };
}

function redirectRoot(): Plugin {
  return {
    name: "redirect-root",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? "";
        if (url === "/" || url === "/index.html") {
          res.writeHead(302, { Location: "/PortfolioPrep/" });
          res.end();
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: "/PortfolioPrep/",
  plugins: [react(), spaFallback(), redirectRoot()],
});
