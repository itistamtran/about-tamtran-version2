import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [react(), WindiCSS()],
  base: '/', // ✅ Ensures correct routing
  build: {
    outDir: 'dist', // ✅ Ensure output goes to dist/
    assetsDir: 'assets', // ✅ Ensures assets are properly organized
    rollupOptions: {
      input: 'index.html', // ✅ Ensures correct entry point
    }
  }
});
