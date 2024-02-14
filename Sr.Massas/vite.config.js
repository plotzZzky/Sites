import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@comps': resolve(__dirname, 'src/components')
    }
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        pratos: resolve(root, 'pratos', 'index.html'),
      }
    }
  }
})