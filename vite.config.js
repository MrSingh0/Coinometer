import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000 // Set to a size limit in kB
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.coingecko.com/api/v3', // Specifies the target API endpoint
        changeOrigin: true, // Changes the origin of the request to the target URL
        rewrite: (path) => path.replace(/^\/api/, '') // Rewrites the request path
      }
    }
  }
});
