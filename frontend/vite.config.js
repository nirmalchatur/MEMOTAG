import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'
export default {
  plugins: [react()],
  build: {
    outDir: 'build',    // Set the output directory to `build`
    sourcemap: true,     // Enable source maps for easier debugging
  },
  server: {
    port: 5173,           // Change to desired port
    open: true             // Automatically open the app in browser on server start
  }
};
