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
    shortcuts : {
      'story-container': 'container mx-auto px-6 sm:px-[10vw] lg:px-[12vw]',
      'story-h1' : 'font-saaremaa text-5xl font-bold',
      'story-origin': 'bg-light-600 px-4 rounded-xl',
    }
})