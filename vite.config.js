import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Remove or set base to empty string to avoid absolute paths
  base: '', // This makes Vite use relative paths for assets
  build: {
    // Ensure assets are emitted with relative paths
    assetsInlineLimit: 0, // Forces assets to be emitted as separate files
    rollupOptions: {
      output: {
        // Customize asset file names if needed
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash].css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});