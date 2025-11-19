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
        assetFileNames: (assetInfo) => {
          // Generar nombres con hash para mejor caching
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
    cssCodeSplit: false, // CSS en un solo archivo para mobile
    minify: 'esbuild',
    target: 'esnext',
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
})

