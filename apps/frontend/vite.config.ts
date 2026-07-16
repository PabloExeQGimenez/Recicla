/// <reference types="vitest/config" />
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    css: true,
    env: {
      VITE_API_URL: '/api',
    },
    alias: {
      '@recicla/shared': path.resolve(__dirname, '../../packages/shared/src'),
    },
  },
})
