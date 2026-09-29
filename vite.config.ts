import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Pages keeps the requested URL and serves 404.html. A copy of index.html lets the SPA read the real path. */
function spaFallback(): Plugin {
  return {
    name: "github-pages-spa-fallback",
    apply: "build",
    closeBundle() {
      const outDir = resolve("dist");
      copyFileSync(resolve(outDir, "index.html"), resolve(outDir, "404.html"));
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
