import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: ['**/*.scss'], // Include all .scss files
  },
  css: { preprocessorOptions: { scss: { modules: true } } },
});
