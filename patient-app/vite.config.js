// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    target: 'esnext',
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  server: {
    open: true,
    port: 5173,
  },
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },
  worker: {
    format: 'es',
  },
});
