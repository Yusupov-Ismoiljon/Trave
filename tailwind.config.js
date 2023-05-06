/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        contener: '1440px',
      },
      fontFamily: {
        'ibm': ['IBM Plex Serif', 'serif']
      },
    },
  },
  plugins: [],
}
