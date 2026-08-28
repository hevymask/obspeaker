import { defineConfig } from 'vite'
import path from 'node:path'

// Plugin
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

const host = process.env.TAURI_DEV_HOST

export default defineConfig(() => ({
  plugins: [
    tailwindcss(),
    react(),
    tanstackRouter()
  ],

  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    
    hmr: host ? {
      protocol: 'ws',
      host,
      port: 1421
    } : undefined,
    
    watch: {
      ignored: ['**/src-tauri/**']
    },

    clearScreen: false
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}))
