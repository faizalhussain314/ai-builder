import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Example of a more specific proxy configuration
      '/process-content': {
        target: 'https://stagging.webspacekit.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/process-content/, '/new-react-webhook-file.php')
      }
    }
  }
});