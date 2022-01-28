import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from "vite-plugin-md"
import WindiCSS from 'vite-plugin-windicss'
// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'
// import Components from 'unplugin-vue-components/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
      include: [/\.vue$/, /\.md$/], 
    }),
    WindiCSS(),
    markdown({
      // wrapperComponent: 'StoryPage',
      exposeFrontmatter: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: false,
        breaks: true,
      },
    }),
    // Components({
    //   resolvers: IconsResolver({
    //     enabledCollections: ["heroicons-outline"],
    //   }),
    // }),
    // Icons(),
  ]
})
