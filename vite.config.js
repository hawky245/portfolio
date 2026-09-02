import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Never publish source maps in production artifacts.
    sourcemap: false,
    // Explicitly retain Vite's installed production minification pipeline
    // for both JavaScript and CSS without adding a separate dependency.
    minify: true,
    cssMinify: true,
  },
})
