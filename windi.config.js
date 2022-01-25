import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'



export default defineConfig({
    darkMode: 'class', // or 'media'
    theme: {
      extend: {
        fontFamily: {
          saaremaa: ['Sansita Swashed', 'sans-serif']
        },
      },
    },
})