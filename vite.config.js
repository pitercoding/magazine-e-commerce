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
    port: 5173,
    open: true, // abre no navegador automaticamente
  },
  build: {
    outDir: 'dist', // pasta de build
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'index': path.resolve(__dirname, 'index.html'),
        'login': path.resolve(__dirname, 'login.html'),
        'criar-conta': path.resolve(__dirname, 'criar-conta.html'),
        'checkout': path.resolve(__dirname, 'checkout.html'),
        'pedidos': path.resolve(__dirname, 'pedidos.html'),
      },
    },
  },
});
