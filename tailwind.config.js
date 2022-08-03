/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#b5aa97',
          200: '#c4baa7',
          300: '#aca08e',
          400: '#9d9382',
          500: '#898072'
        },
        accent: {
          100: '#c8f0cb',
          500: '#75a579'
        }
      },
      fontFamily: {
        'title': [ 'Roboto', 'sans-serif' ],
        'raleway': [ 'Raleway', 'sans-serif' ]
      },
      minHeight: {
        '1/5': '20%'
      }
    },
  },
  plugins: [],
}
