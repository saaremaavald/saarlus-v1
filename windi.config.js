import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
// import colors from 'windicss/colors'



export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,ts}'],
    exclude: ['node_modules', '.git', 'excluded', 'dist', 'windi.config.{ts,js}', 'tailwind.config.{ts,js}'],
    },
  darkMode: 'class', // or 'media'
  plugins: [ typography ],
  // preflight: false,
  theme: {
    extend: {
      colors: {
        saarlus: {
          0:"#F8FAF4",
          50: "#E7EEDC",
          100: "#D5E2C5",
          200: "#AFCA9B",
          300: "#85B278",
          400: "#5D9A60",
          500: "#468261",
          600: "#356A67",
          700: "#263952",
          800: "#22193A",
          900: "#210E22",
          1000: "#0A0407",
        },
      },
      fontFamily: {
        saaremaa: ['Changa One', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
    },
  },
  shortcuts : {
    'story-container': 'container mx-auto px-6 py-[5vh] sm:px-[10vw] lg:px-[12vw] xl:max-w-6xl 2xl:max-w-7xl font-serif',
    'story-h1' : 'mb-8 text-5xl font-saaremaa font-normal text-saarlus-700',
    'story-h2' : 'my-6 text-3xl font-saaremaa font-normal text-saarlus-700',
    'story-origin': 'px-4 my-8 pt-4 italic border-t-1 border-t-gray-200',
  },
    
})