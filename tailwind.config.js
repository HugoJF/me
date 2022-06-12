const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter',],
        display: ['"Baloo 2"',],
      },
      colors: {
        gray: colors.zinc,
      }
    },
  },
  plugins: [],
}
