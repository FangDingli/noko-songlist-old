import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    proxy: {
      "/devServer": {
        target: "http://songlist-back.noko.live",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devServer/, '')
      }
    }
  },
  plugins: [vue()]
})
