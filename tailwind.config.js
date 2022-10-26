/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/index.html",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: colors.green,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      moss: {
        500: '#BDFFB3',
        600: '#8DFB86',
        700: '#28843F',
        800: '#0C3A18',
        900: '#000300',
      }
    },
    extend: {},
  },
  plugins: [],
}
