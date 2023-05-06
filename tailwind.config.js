/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'max-w': ['1400px']
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      margin: {
        'mb':['57px']
      },
      borderRadius: {
        'radius': ['100px']
      },
    },
  },
  plugins: [],
}
