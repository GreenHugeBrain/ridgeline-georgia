import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from /ridgeline-georgia/ on GitHub Pages; dev stays at the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ridgeline-georgia/' : '/',
  plugins: [react()],
  server: { port: 5182 },
}))
