const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    // colors: {
    //   // 'blue1': '#7900FF',
    //   // // 'blue2': '#548CFF',
    //   // // 'blue3': '#93FFD8',
    //   // // 'blue4': '#CFFFDC',
      
    // },
    // colors: {
    //   // transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.gray,
    //   emerald: colors.emerald,
    //   indigo: colors.indigo,
    //   yellow: colors.yellow,
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
