import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from "vite-plugin-md"
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'


export default defineConfig({
  base: "/saarlus-v1/",
  plugins: [
    vue({
      reactivityTransform: true,
      include: [/\.vue$/, /\.md$/], 
    }),
    WindiCSS(),
    markdown({
      wrapperComponent: 'MarkdownWrapper',
      exposeFrontmatter: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        breaks: true,
      },
    }),
    Icons({
      autoInstall: true
    }),
  ]
})
