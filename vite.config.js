import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/card-selector-3d/', // 👈 importante para GitHub Pages
})
