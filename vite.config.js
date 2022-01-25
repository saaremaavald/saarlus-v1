import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from "vite-plugin-md"
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
      include: [/\.vue$/, /\.md$/], 
    }),
    WindiCSS(),
    markdown(),
  ]
})
