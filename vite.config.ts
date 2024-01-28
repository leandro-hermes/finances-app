import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
    })
  ],
  resolve: {
    alias: {
      "~context": "/src/app/context",
      "~hooks": "/src/app/hooks",
      "~pages": "/src/app/pages",
      "~shared": "/src/app/shared",
      "~models": "/src/models",
    },
  },
})
