import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [] // Повністю очищаємо плагіни, щоб він ігнорував зовнішній tailwind
    }
  }
})