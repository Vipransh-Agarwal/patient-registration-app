import { defineConfig } from 'vite';

export default defineConfig({
  // Define the root of the application
  root: './',

  // Configure the output directory for the production build
  build: {
    outDir: 'dist',  // This is the folder where the production build will be placed
  },

  // Optional: Configure server settings
  server: {
    open: true, // Automatically open the browser when running `npm run dev`
    port: 5173, // Default Vite port
  }
});
