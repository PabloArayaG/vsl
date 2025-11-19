import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild', // esbuild es más rápido y viene incluido
    target: 'esnext',
  },
  esbuild: {
    drop: ['console', 'debugger'], // Eliminar console.log en producción
  },
})

