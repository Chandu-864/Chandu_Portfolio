import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Chandu_Portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    outDir: 'dist'
  }
})