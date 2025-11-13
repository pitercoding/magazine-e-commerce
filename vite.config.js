import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.', // raiz do projeto
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @ -> src
    },
  },
  server: {
    port: 5173, // porta padrão do Vite
    open: true, // abre no navegador automaticamente
  },
  build: {
    outDir: 'dist', // pasta de build
    emptyOutDir: true,
  },
});
