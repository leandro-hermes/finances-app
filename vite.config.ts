import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~context': '/src/app/context',
      '~hooks': '/src/app/hooks',
      '~pages': '/src/app/pages',
      '~shared': '/src/app/shared',
    },
  },
})
