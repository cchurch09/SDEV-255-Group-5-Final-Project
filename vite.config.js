import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://cchurch09.github.io/SDEV-255-Group-5-Final-Project/",
})
