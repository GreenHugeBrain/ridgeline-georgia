import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const page = (p) => fileURLToPath(new URL(p, import.meta.url))

// A multi-page build: every route is a real HTML file with its own React root,
// so there is no client-side router and no 404 rewrite needed on GitHub Pages.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ridgeline-georgia/' : '/',
  plugins: [react()],
  server: { port: 5182 },
  build: {
    rollupOptions: {
      input: {
        home: page('./index.html'),
        tours: page('./tours/index.html'),
        gallery: page('./gallery/index.html'),
        about: page('./about/index.html'),
        enquire: page('./enquire/index.html'),
      },
    },
  },
}))
