import { defineConfig } from "vite";
import fs from 'fs';
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ viteTsconfigPaths() ],
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000
  },
  define: {
    global: "globalThis",
  },
  server: {
    port: 3333,
    host: true,
    open: true,
  },
  preview: {
//    port: 3001,
    port: 444,
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/blocky.dyndns.org/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/blocky.dyndns.org/cert.pem'),
    }
  },
});
