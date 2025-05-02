
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "./", // This helps with GitHub Pages deployment
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    // Generate CNAME file for GitHub Pages with custom domain
    rollupOptions: {
      plugins: [
        {
          name: 'generate-cname',
          generateBundle() {
            this.emitFile({
              type: 'asset',
              fileName: 'CNAME',
              source: 'your-domain.com' // Replace this with your actual domain
            });
          }
        }
      ]
    }
  }
}));
