import { defineConfig } from 'windicss/helpers'
// import typograpy from 'windicss/plugin/typography'
// import colors from 'windicss/colors'



export default defineConfig({
    darkMode: 'class', // or 'media'
    // plugins: [ typography ],
    // preflight: false,
    theme: {
      extend: {
        // typography: {
        //   DEFAULT: {
        //     css: {
        //       color: '#333',
        //       a: {
        //         'color': '#3182ce',
        //         '&:hover': {
        //           color: '#2c5282',
        //         },
        //       },
        //     },
        //   },
        fontFamily: {
          saaremaa: ['Changa One', 'sans-serif'],
          serif: ['Merriweather', 'serif']
        },
      },
    },
    shortcuts : {
      'story-header': 'w-full bg-gray-800',
      'story-container': 'container mx-auto px-6 py-[5vh] sm:px-[10vw] lg:px-[12vw] xl:max-w-6xl 2xl:max-w-7xl font-serif',
      'story-h1' : 'mb-8 text-5xl font-saaremaa font-normal',
      'story-h2' : 'my-6 text-3xl font-saaremaa font-normal',
      'story-origin': 'px-4 my-8 pt-4 italic border-t-1 border-t-gray-200',
    },
    
})