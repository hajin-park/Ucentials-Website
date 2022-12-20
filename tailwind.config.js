/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      clipPath: {
        "poly-right": "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
}
