import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        dashboard: 'http://localhost:3001/assets/remoteEntry.js', // Remote micro frontend running locally
      },
      shared: ['react', 'react-dom'], // Share dependencies
    }),
  ],
  server: {
    port: 3000,
  },
});
