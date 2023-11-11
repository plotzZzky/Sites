import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')


// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: '',
  plugins: [reactRefresh()],
  build: {
    assetsInclude: ['media/**'],
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        profs: resolve(root, 'menu', 'index.html'),
      }
    }
  }
})