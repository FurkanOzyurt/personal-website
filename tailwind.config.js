/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F4F5F7',
          white: '#FCFCFE',
          text: '#00283A',
          supText: '#7B7B7D'
        },
        primary: '#AFB42B'
      }
    },
  },
  plugins: [],
}
