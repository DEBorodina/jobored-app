import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [svgr(), react(), babel()],
  build: {
    minify: false,
  },
});
